'use client';

import { useCallback, useRef } from 'react';


export function useTick( ){
  const audioContextRef = useRef<AudioContext | null>(null);
  const isInitializedRef = useRef(false);

  
  const ensureAudioContext = useCallback(() => {
    if (!isInitializedRef.current) {
      try {
        audioContextRef.current = new (window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext)();
        isInitializedRef.current = true;
      } catch (e: unknown) {
        console.warn('[useTick] AudioContext not supported:', e);
      }
    }
    return audioContextRef.current;
  }, []);

  
  const tickOpen = useCallback(() => {
    const ctx = ensureAudioContext();
    if (!ctx) return;

    try {
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.type = 'triangle';
      oscillator.frequency.setValueAtTime(3500, ctx.currentTime);

      
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.01);
      gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.03);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.03);
    } catch (e: unknown) {
      console.warn('[useTick] tickOpen error:', e);
    }
  }, [ensureAudioContext]);

  
  const tickSelect = useCallback((index: number) => {
    const ctx = ensureAudioContext();
    if (!ctx) return;

    try {
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.type = 'triangle';
      
      oscillator.frequency.setValueAtTime(2800 + (index * 80), ctx.currentTime);

      
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.005);
      gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.015);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.015);
    } catch (e: unknown) {
      console.warn('[useTick] tickSelect error:', e);
    }
  }, [ensureAudioContext]);

  
  const tickConfirm = useCallback(() => {
    const ctx = ensureAudioContext();
    if (!ctx) return;

    try {
      
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(3200, ctx.currentTime);
      gain1.gain.setValueAtTime(0, ctx.currentTime);
      gain1.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.005);
      gain1.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.015);
      osc1.start(ctx.currentTime);
      osc1.stop(ctx.currentTime + 0.015);

      
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(4000, ctx.currentTime + 0.03);
      gain2.gain.setValueAtTime(0, ctx.currentTime + 0.03);
      gain2.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.035);
      gain2.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.05);
      osc2.start(ctx.currentTime + 0.03);
      osc2.stop(ctx.currentTime + 0.05);
    } catch (e: unknown) {
      console.warn('[useTick] tickConfirm error:', e);
    }
  }, [ensureAudioContext]);

  return {
    tickOpen,
    tickSelect,
    tickConfirm,
  };
}
