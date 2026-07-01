

export const dreamdmbar = {
  "dreamdmbar/dream.GlowingLight": () => import("@/dreamdmbar/dream.GlowingLight"),
  "dreamdmbar/dreamsurface.dreamdmbar": () => import("@/dreamdmbar/dreamsurface.dreamdmbar"),
  "dreamdmbar/hooks/useDreamBarContext": () => import("@/dreamdmbar/hooks/useDreamBarContext"),
  "dreamdmbar/hooks/useDreamDMConversations": () => import("@/dreamdmbar/hooks/useDreamDMConversations"),
  "dreamdmbar/hooks/useDreamDMDraft": () => import("@/dreamdmbar/hooks/useDreamDMDraft"),
  "dreamdmbar/hooks/useDreamDMMessages": () => import("@/dreamdmbar/hooks/useDreamDMMessages"),
  "dreamdmbar/hooks/useDreamSearch": () => import("@/dreamdmbar/hooks/useDreamSearch"),
  "dreamdmbar/hooks/useMessagingCore": () => import("@/dreamdmbar/hooks/useMessagingCore"),
  "dreamdmbar/hooks/useModuleBarIntent": () => import("@/dreamdmbar/hooks/useModuleBarIntent"),
  "dreamdmbar/hooks/useNotifications": () => import("@/dreamdmbar/hooks/useNotifications"),
  "dreamdmbar/notifications/notificationHelpers": () => import("@/dreamdmbar/notifications/notificationHelpers"),
  "dreamdmbar/notifications/useNotifications": () => import("@/dreamdmbar/notifications/useNotifications"),
  "dreamdmbar/runtime/barInteractions": () => import("@/dreamdmbar/runtime/barInteractions"),
  "dreamdmbar/runtime/bridgeSeamFlow": () => import("@/dreamdmbar/runtime/bridgeSeamFlow"),
  "dreamdmbar/runtime/DreamSystemContext": () => import("@/dreamdmbar/runtime/DreamSystemContext"),
};

export type DreamdmbarMap = typeof dreamdmbar;
