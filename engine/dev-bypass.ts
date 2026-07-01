


function isDevEnv(): boolean {
  return process.env.NODE_ENV !== 'production';
}


export function isDevBypassActive(): boolean {
  return isDevEnv() && process.env.DEV_BYPASS_AUTH === 'true';
}


export function isDevAdminBypassActive(): boolean {
  return (
    isDevEnv() &&
    process.env.DEV_BYPASS_AUTH === 'true' &&
    process.env.DEV_ADMIN === 'true'
  );
}
