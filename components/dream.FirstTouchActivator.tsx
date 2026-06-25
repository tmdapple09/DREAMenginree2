'use client';

import { useEffect } from 'react';

const INTERACTIVE_SELECTOR = [
  'button',
  'a[href]',
  'label[for]',
  'summary',
  'input[type="button"]',
  'input[type="submit"]',
  'input[type="reset"]',
  'input[type="checkbox"]',
  'input[type="radio"]',
  '[role="button"]',
  '[role="menuitem"]',
  '[role="tab"]',
  '[role="switch"]',
  '[role="checkbox"]',
  '[role="radio"]',
  '[data-first-touch-target]',
  '[data-pressable]',
  '[data-clickable]',
  '.cursor-pointer',
  '.de-tile',
  '.de-widget-tile',
  '.de-card-pressable',
  '.de-pressable',
  '.de-pressable-primary',
  '.de-pressable-sm',
  '.de-icon-btn',
  '.de-btn-primary',
  '.de-btn-ghost',
  '.de-row',
  '.feed-action-btn',
  '.topbar-back-btn',
  '.premium-btn-primary',
  '.premium-btn-gold',
  '.dream-card',
  '.dream-widget-card',
  '.feed-card-premium',
].join(',');

const PASSIVE_INPUT_SELECTOR = [
  'input:not([type])',
  'input[type="text"]',
  'input[type="search"]',
  'input[type="email"]',
  'input[type="password"]',
  'input[type="number"]',
  'input[type="tel"]',
  'input[type="url"]',
  'textarea',
  'select',
  '[contenteditable="true"]',
].join(',');

const IGNORE_SELECTOR = [
  '[data-first-touch-ignore]',
  '[data-no-first-touch]',
  '[data-drag-surface]',
  '[data-drag-handle]',
  '[data-resize-handle]',
  '[data-sculpt-surface]',
  '[data-game-surface]',
  'canvas',
].join(',');

const TAP_SLOP_PX = 14;
const MAX_TAP_MS = 850;
const NATIVE_SUPPRESS_MS = 650;

type PendingTouch = {
  pointerId: number;
  pointerType: string;
  startedAt: number;
  x: number;
  y: number;
  target: HTMLElement;
};

type SuppressedNativeClick = {
  target: HTMLElement;
  until: number;
};

function isCoarsePointer(pointerType: string): boolean {
  if (pointerType === 'touch' || pointerType === 'pen') return true;
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
  return window.matchMedia('(pointer: coarse)').matches;
}

function isHTMLElement(value: EventTarget | null): value is HTMLElement {
  return value instanceof HTMLElement;
}

function closestElement(start: EventTarget | null, selector: string): HTMLElement | null {
  if (!isHTMLElement(start)) return null;
  return start.closest(selector) as HTMLElement | null;
}

function isDisabled(element: HTMLElement): boolean {
  if (element.getAttribute('aria-disabled') === 'true') return true;
  if (element instanceof HTMLButtonElement) return element.disabled;
  if (element instanceof HTMLInputElement) return element.disabled;
  if (element instanceof HTMLSelectElement) return element.disabled;
  if (element instanceof HTMLTextAreaElement) return element.disabled;
  return false;
}

function interactiveFromEventTarget(target: EventTarget | null): HTMLElement | null {
  if (closestElement(target, PASSIVE_INPUT_SELECTOR)) return null;
  if (closestElement(target, IGNORE_SELECTOR)) return null;

  const interactive = closestElement(target, INTERACTIVE_SELECTOR);
  if (!interactive || isDisabled(interactive)) return null;
  if (interactive.closest(IGNORE_SELECTOR)) return null;

  return interactive;
}

function isSameInteractiveClick(a: HTMLElement, eventTarget: EventTarget | null): boolean {
  const clicked = interactiveFromEventTarget(eventTarget);
  return clicked === a;
}

function movedTooFar(start: PendingTouch, event: PointerEvent): boolean {
  return Math.hypot(event.clientX - start.x, event.clientY - start.y) > TAP_SLOP_PX;
}

/**
 * Root-level mobile first-touch rescue.
 *
 * DREAMengin has several nested runtime/scroll/overlay surfaces. On mobile,
 * those layers can consume the first tap before React's delegated `onClick`
 * sees it, which makes ordinary controls miss the first activation.
 *
 * This component only runs for coarse pointers and only for native interactive
 * controls. It dispatches the intended click on the first completed tap, then
 * suppresses the browser's follow-up native click so handlers do not double-run.
 */
export default function FirstTouchActivator() {
  useEffect(() => {
    let pending: PendingTouch | null = null;
    let suppressNativeClick: SuppressedNativeClick | null = null;
    let synthesizingClick = false;

    const clearPending = () => {
      pending = null;
    };

    const onPointerDown = (event: PointerEvent) => {
      if (!isCoarsePointer(event.pointerType)) return;
      if (event.pointerType === 'mouse' && event.button !== 0) return;

      const target = interactiveFromEventTarget(event.target);
      if (!target) {
        clearPending();
        return;
      }

      pending = {
        pointerId: event.pointerId,
        pointerType: event.pointerType,
        startedAt: performance.now(),
        x: event.clientX,
        y: event.clientY,
        target,
      };

      target.dataset.firstTouchActive = 'true';
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!pending || pending.pointerId !== event.pointerId) return;
      if (movedTooFar(pending, event)) {
        pending.target.removeAttribute('data-first-touch-active');
        clearPending();
      }
    };

    const onPointerUp = (event: PointerEvent) => {
      if (!pending || pending.pointerId !== event.pointerId) return;

      const current = pending;
      clearPending();
      current.target.removeAttribute('data-first-touch-active');

      if (!isCoarsePointer(current.pointerType)) return;
      if (movedTooFar(current, event)) return;
      if (performance.now() - current.startedAt > MAX_TAP_MS) return;
      if (!document.contains(current.target)) return;
      if (isDisabled(current.target)) return;

      const stillSameControl = isSameInteractiveClick(current.target, event.target);
      if (!stillSameControl) return;

      suppressNativeClick = {
        target: current.target,
        until: performance.now() + NATIVE_SUPPRESS_MS,
      };

      synthesizingClick = true;
      current.target.click();
      synthesizingClick = false;
    };

    const onPointerCancel = () => {
      if (pending) pending.target.removeAttribute('data-first-touch-active');
      clearPending();
    };

    const onClickCapture = (event: MouseEvent) => {
      if (synthesizingClick) return;
      if (!suppressNativeClick) return;

      const now = performance.now();
      const suppressed = suppressNativeClick;

      if (now > suppressed.until) {
        suppressNativeClick = null;
        return;
      }

      if (isSameInteractiveClick(suppressed.target, event.target)) {
        event.preventDefault();
        event.stopImmediatePropagation();
        suppressNativeClick = null;
      }
    };

    window.addEventListener('pointerdown', onPointerDown, true);
    window.addEventListener('pointermove', onPointerMove, true);
    window.addEventListener('pointerup', onPointerUp, true);
    window.addEventListener('pointercancel', onPointerCancel, true);
    window.addEventListener('click', onClickCapture, true);

    return () => {
      window.removeEventListener('pointerdown', onPointerDown, true);
      window.removeEventListener('pointermove', onPointerMove, true);
      window.removeEventListener('pointerup', onPointerUp, true);
      window.removeEventListener('pointercancel', onPointerCancel, true);
      window.removeEventListener('click', onClickCapture, true);
    };
  }, []);

  return null;
}
