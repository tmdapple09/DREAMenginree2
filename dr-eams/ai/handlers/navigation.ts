import {
    HomeAnchorSetStatePayload,
    NavDeltaPayload,
} from '@/types/ai-system';
import { ToolHandler } from '../tool-router';








export const handleNavDelta: ToolHandler = async (ctx) => {
  const payload = ctx.intent.payload as unknown as NavDeltaPayload;

  
  
  return {
    ok: true,
    data: {
      nav_delta: payload.delta_nav,
      route_delta: payload.delta_route,
    },
    ui_delta: {
      nav_patch: payload.delta_nav
        ? [
            {
              op: 'replace' as const,
              path: '/nav',
              value: payload.delta_nav,
            },
          ]
        : undefined,
      toast: {
        kind: 'info' as const,
        message: 'Navigation updated',
      },
    },
  };
};





export const handleHomeAnchorSetState: ToolHandler = async (ctx) => {
  const payload = ctx.intent.payload as unknown as HomeAnchorSetStatePayload;

  return {
    ok: true,
    data: {
      home_anchor_state: payload.state,
    },
    ui_delta: {
      nav_patch: [
        {
          op: 'replace' as const,
          path: '/nav/home_anchor_state',
          value: payload.state,
        },
      ],
    },
  };
};





export const handleHomeMenuOpen: ToolHandler = async () => {
  return {
    ok: true,
    data: {},
    ui_delta: {
      open_overlay: 'HOME_MENU',
    },
  };
};
