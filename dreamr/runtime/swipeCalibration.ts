


export interface CalibrationSample {
  
  observedDeviationPx: number;
  
  travelPx: number;
  
  durationMs: number;
}


export interface CalibrationProfile {
  
  slopeMin: number;
  
  slopeMax: number;
  
  triggerThresholdPx: number;
  
  calibratedAt: string;
}

const FACTORY_DEFAULTS: Readonly<CalibrationProfile> = {
  slopeMin: 0.6,
  slopeMax: 0.85,
  triggerThresholdPx: 55,
  calibratedAt: '',
};


let activeProfile: CalibrationProfile = { ...FACTORY_DEFAULTS };


export function calibrateDevice(samples: CalibrationSample[]): CalibrationProfile {
  if (samples.length === 0) return activeProfile;

  const meanDev =
    samples.reduce((sum, s) => sum + s.observedDeviationPx, 0) / samples.length;

  
  const devScale = Math.max(0.5, Math.min(2.0, meanDev / 1.5));

  
  const slopeCenter = (FACTORY_DEFAULTS.slopeMin + FACTORY_DEFAULTS.slopeMax) / 2;
  const halfWidth = (FACTORY_DEFAULTS.slopeMax - FACTORY_DEFAULTS.slopeMin) / 2;
  const scaledHalfWidth = halfWidth * devScale;
  const newMin = Math.max(0.1, slopeCenter - scaledHalfWidth);
  const newMax = Math.min(3.0, slopeCenter + scaledHalfWidth);

  
  const rawThreshold = Math.round(FACTORY_DEFAULTS.triggerThresholdPx * devScale);

  activeProfile = {
    slopeMin: newMin,
    slopeMax: Math.max(newMin + 0.05, newMax), 
    triggerThresholdPx: Math.max(20, Math.min(120, rawThreshold)),
    calibratedAt: new Date().toISOString(),
  };

  return activeProfile;
}


export function getActiveProfile(): CalibrationProfile {
  return activeProfile;
}


export function setActiveProfile(profile: CalibrationProfile): void {
  activeProfile = { ...profile };
}


export function resetCalibration(): void {
  activeProfile = { ...FACTORY_DEFAULTS };
}
