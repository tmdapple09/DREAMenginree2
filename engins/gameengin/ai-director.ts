

export interface PlayerSignals {
  
  deaths: number;
  
  score: number;
  
  combo: number;
  
  avgSpeed: number;
  
  elapsed: number;
}

export interface DirectorState {
  
  challengeLevel: number;
  
  skillTier: 'beginner' | 'casual' | 'skilled' | 'expert';
  
  label: string;
}

export class AIDirector {
  private challengeLevel = 0.35; 
  private tfReady = false;
  private history: PlayerSignals[] = [];
  private sampleTick = 0;

  async init(): Promise<void> {
    
    try {
      const tf = await import('@tensorflow/tfjs');
      
      try {
        await import('@tensorflow/tfjs-backend-webgpu');
        await tf.setBackend('webgpu');
      } catch {
        try {
          await tf.setBackend('webgl');
        } catch {
          await tf.setBackend('cpu');
        }
      }
      await tf.ready();
      this.tfReady = true;
    } catch {
      
    }
  }

  
  update(signals: PlayerSignals): DirectorState {
    this.sampleTick++;
    this.history.push({ ...signals });
    if (this.history.length > 300) this.history.shift();

    
    if (this.sampleTick % 10 === 0) {
      if (this.tfReady) {
        this.challengeLevel = this.inferWithTF(signals);
      } else {
        this.challengeLevel = this.heuristic(signals);
      }
    }

    return this.buildState(signals);
  }

  
  get level(): number { return this.challengeLevel; }

  
  private heuristic(s: PlayerSignals): number {
    const deathPenalty = Math.min(0.3, s.deaths * 0.04);
    const scoreFactor  = Math.min(0.4, s.score / 5000);
    const comboBonus   = Math.min(0.15, (s.combo - 1) * 0.03);
    const timeFactor   = Math.min(0.15, s.elapsed / 600); 

    const raw = scoreFactor + comboBonus + timeFactor - deathPenalty;
    const target = Math.max(0.05, Math.min(0.95, raw + 0.35));

    
    return this.challengeLevel + (target - this.challengeLevel) * 0.05;
  }

  
  private inferWithTF(s: PlayerSignals): number {
    try {
      
      
      
      const features = [
        Math.min(1, s.deaths / 20),           
        Math.min(1, s.score / 10000),          
        Math.min(1, (s.combo - 1) / 9),        
        s.avgSpeed,                             
        Math.min(1, s.elapsed / 600),          
      ];

      
      
      const w1 = [
        [0.6, -0.5,  0.3,  0.1,  0.4, -0.2,  0.7, 0.2],  
        [0.8,  0.4,  0.6,  0.3,  0.7,  0.5,  0.4, 0.6],  
        [0.4,  0.6,  0.7,  0.5,  0.3,  0.6,  0.5, 0.4],  
        [0.5,  0.3,  0.4,  0.6,  0.5,  0.3,  0.4, 0.5],  
        [0.3,  0.4,  0.5,  0.4,  0.6,  0.4,  0.3, 0.5],  
      ];
      const b1 = [-0.15, 0.1, 0.0, 0.05, -0.1, 0.1, -0.05, 0.0];

      
      const h1 = b1.map((b, j: number) => {
        const sum = features.reduce((acc, f, i: number) => acc + f * w1[i][j], b);
        return Math.max(0, sum); 
      });

      
      const w2 = [0.5, 0.4, 0.6, 0.4, 0.5, 0.3, 0.5, 0.4];
      const b2 = -0.3;
      const logit = h1.reduce((acc, h: number, i: number) => acc + h * w2[i], b2);
      const target = 1 / (1 + Math.exp(-logit)); 

      return this.challengeLevel + (target - this.challengeLevel) * 0.05;
    } catch {
      return this.heuristic(s);
    }
  }

  private buildState(s: PlayerSignals): DirectorState {
    const l = this.challengeLevel;
    const skillTier: DirectorState['skillTier'] =
      s.deaths === 0 && s.combo >= 3 && l >= 0.7  ? 'expert'
      : l >= 0.55                                   ? 'skilled'
      : l >= 0.35                                   ? 'casual'
      :                                               'beginner';

    const label =
      l < 0.3 ? '🟢 Easing in'
      : l < 0.5 ? '🟡 In the zone'
      : l < 0.75 ? '🟠 Heating up'
      :            '🔴 Elite mode';

    return { challengeLevel: l, skillTier, label };
  }
}
