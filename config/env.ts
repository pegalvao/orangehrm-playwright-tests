export const ENV = {
  
  VALID_USERNAME: (globalThis as any).process.env.VALID_USERNAME as string,
  VALID_PASSWORD: (globalThis as any).process.env.VALID_PASSWORD as string,
  INVALID_USERNAME: (globalThis as any).process.env.INVALID_USERNAME as string,
  INVALID_PASSWORD: (globalThis as any).process.env.INVALID_PASSWORD as string,
};