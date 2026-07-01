'use client';

import { useRouter } from 'next/navigation';
import EnginNavBar from './dream.bar.EnginNavBar';
import type { EnginRuleSet } from './dream.EnginRuleSet';
import EnginAppShell from './dream.shell.EnginAppShell';




export function makeEnginApp(ruleset: EnginRuleSet): () => React.JSX.Element {
  function EnginApp( ){
    const router = useRouter();
    const { EnginComponent } = ruleset;
    return (
      <EnginAppShell
        engineName={ruleset.name}
        engineEmoji={ruleset.emoji}
        accentColor={ruleset.accentColor}
        backHref={ruleset.backHref}
        backLabel={ruleset.backLabel}
        nav={<EnginNavBar items={ruleset.nav} accentColor={ruleset.accentColor} />}
      >
        <div className="h-full overflow-y-auto">
          <EnginComponent onBack={() => router.push(ruleset.backHref)} />
        </div>
      </EnginAppShell>
    );
  }

  EnginApp.displayName = `EnginApp(${ruleset.id})`;
  return EnginApp;
}
