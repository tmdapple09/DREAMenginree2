

export const cartridges = {
  "public/cartridges/mad-maxi/MANIFEST": () => import("@/public/cartridges/mad-maxi/MANIFEST.json"),
};

export type CartridgesMap = typeof cartridges;
