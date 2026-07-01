'use client';

import DreamShell from '@/components/dreams/dreamsurface.shell';
import React from 'react';




export interface WidgetCardProps {
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  onConfigure?: () => void;
  onHide?: () => void;
  onRemove?: () => void;
  isPinned?: boolean;
  className?: string;
  style?: React.CSSProperties;
}


export default function WidgetCard({
  title,
  children,
  onConfigure,
  onHide,
  onRemove,
  className,
  style,
}: WidgetCardProps) {
  return (
    <DreamShell
      widgetId={title.toLowerCase().replace(/\s+/g, '-')}
      title={title}
      icon="✦"
      dataState="ready"
      onConfigure={onConfigure}
      onHide={onHide}
      onRemove={onRemove}
      className={className}
      style={style}
    >
      {children}
    </DreamShell>
  );
}
