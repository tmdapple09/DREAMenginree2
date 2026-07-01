

export const dreamr = {
  "app/dreamr/page": () => import("@/app/dreamr/page"),
  "components/dreamr/dream.CloseFriendsSettings": () => import("@/components/dreamr/dream.CloseFriendsSettings"),
  "components/dreamr/dream.panel.DreamRChannelPanel": () => import("@/components/dreamr/dream.panel.DreamRChannelPanel"),
  "components/dreamr/dream.panel.DreamRCreatorPanel": () => import("@/components/dreamr/dream.panel.DreamRCreatorPanel"),
};

export type DreamrMap = typeof dreamr;
