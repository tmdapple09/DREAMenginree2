

export const rulesets = {
  "engins/rulesets/code/index": () => import("@/engins/rulesets/code"),
  "engins/rulesets/dreams/index": () => import("@/engins/rulesets/dreams"),
  "engins/rulesets/forge/index": () => import("@/engins/rulesets/forge"),
  "engins/rulesets/game/declarative": () => import("@/engins/rulesets/game/declarative"),
  "engins/rulesets/homedream/dream.homedream.constants": () => import("@/engins/rulesets/homedream/dream.homedream.constants"),
  "engins/rulesets/homedream/dream.homedream.physics": () => import("@/engins/rulesets/homedream/dream.homedream.physics"),
  "engins/rulesets/homedream/dream.homedream.transforms": () => import("@/engins/rulesets/homedream/dream.homedream.transforms"),
  "engins/rulesets/homedream/index": () => import("@/engins/rulesets/homedream"),
  "engins/rulesets/lab/index": () => import("@/engins/rulesets/lab"),
  "engins/rulesets/music/index": () => import("@/engins/rulesets/music"),
};

export type RulesetsMap = typeof rulesets;
