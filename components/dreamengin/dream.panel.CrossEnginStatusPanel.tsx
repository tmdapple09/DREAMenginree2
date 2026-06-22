"use client";

import { bridge, type PeerState } from "@/lib/runtime/dualRuntimeBridge";
import { useEffect, useState } from "react";

interface Props {
  excludeChannel?: string;
}

export function CrossEnginStatusPanel({ excludeChannel }: Props) {
  const [peers, setPeers] = useState<readonly PeerState[]>([]);

  useEffect(() => {
    return bridge.subscribePeerActivity(setPeers);
  }, []);

  const channels = peers.filter((peer) => peer.channel !== excludeChannel);

  if (channels.length === 0) return null;

  return (
    <div className="de-widget-grid">
      {channels.map((peer) => (
        <div
          key={peer.channel}
          className="de-widget-card flex justify-between p-2"
        >
          <span className="capitalize text-xs font-medium">{peer.channel}</span>
        </div>
      ))}
    </div>
  );
}

export default CrossEnginStatusPanel;
