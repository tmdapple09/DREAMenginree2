

export const dreamsurfaces = {
  "components/dreams/dream.connectorlayer": () => import("@/components/dreams/dream.connectorlayer"),
  "components/dreams/dream.DraggableDream": () => import("@/components/dreams/dream.DraggableDream"),
  "components/dreams/dream.featurelayer": () => import("@/components/dreams/dream.featurelayer"),
  "components/dreams/dream.GlobalDragLayer": () => import("@/components/dreams/dream.GlobalDragLayer"),
  "components/dreams/dream.outputlayer": () => import("@/components/dreams/dream.outputlayer"),
  "components/dreams/dream.panel.RuntimeMemoryHUD": () => import("@/components/dreams/dream.panel.RuntimeMemoryHUD"),
  "components/dreams/dream.PlatformErrorReporter": () => import("@/components/dreams/dream.PlatformErrorReporter"),
  "components/dreams/dream.shell.DreamShell": () => import("@/components/dreams/dream.shell.DreamShell"),
  "components/dreams/dream.shell.SharedDreamShell": () => import("@/components/dreams/dream.shell.SharedDreamShell"),
  "components/dreams/dream.SlideOverPanel": () => import("@/components/dreams/dream.SlideOverPanel"),
  "components/dreams/dream.widget.SuperDreamWidget": () => import("@/components/dreams/dream.widget.SuperDreamWidget"),
  "components/dreams/dream.window.JourneyDreamWindow": () => import("@/components/dreams/dream.window.JourneyDreamWindow"),
  "components/dreams/dreamsurface.dreamspace": () => import("@/components/dreams/dreamsurface.dreamspace"),
  "components/dreams/dreamsurface.shell": () => import("@/components/dreams/dreamsurface.shell"),
  "components/dreams/dreamsurface.window": () => import("@/components/dreams/dreamsurface.window"),
};

export type DreamsurfacesMap = typeof dreamsurfaces;
