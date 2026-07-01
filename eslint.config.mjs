import nextCoreWebVitals from "eslint-config-next/core-web-vitals"
import nextTypescript from "eslint-config-next/typescript"



const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    
    
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "assembly/**",
      "backend/**",
      "frontend/**",
      "scripts/**",
      "validate-deployment.js",
      "tests/e2e/**",
      "tests/navigation/**",
    ],
  },
  {
    
    
    
    
    
    
    
    
    
    
    rules: {
      
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "react/no-unescaped-entities": "off",
      "react-hooks/purity": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/refs": "off",
      "react-hooks/immutability": "off",
      "react-hooks/static-components": "off",
      
      
      
      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "prefer-const": "warn",
      
      "@next/next/no-img-element": "warn",
      "jsx-a11y/alt-text": "warn",
    },
  },
  {
    
    
    
    
    
    
    
    
    
    files: ["**/*.{ts,tsx,js,jsx}"],
    ignores: [
      "lib/hooks/useTap.ts",
      "components/games/**",
      "lib/games/**",
      "lib/dualsense/**",
      "tests/**",
    ],
    rules: {
      "no-restricted-syntax": [
        "warn",
        {
          selector: "JSXAttribute[name.name='onDoubleClick']",
          message:
            "Double-click is reserved for the home particle. Use the `useTap` hook from lib/hooks/useTap.ts (single-tap) instead. The only sanctioned double-tap site uses `useHomeParticleTap` and lives in the DreamDM bar.",
        },
        {
          selector: "JSXAttribute[name.name='onDblClick']",
          message:
            "Double-click is reserved for the home particle. Use the `useTap` hook from lib/hooks/useTap.ts (single-tap) instead.",
        },
      ],
    },
  },
]

export default eslintConfig
