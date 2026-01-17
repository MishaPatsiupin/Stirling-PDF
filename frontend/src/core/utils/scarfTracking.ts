/**
 * Scarf analytics pixel tracking utility
 *
 * This module provides a firePixel function that can be called from anywhere,
 * including non-React utility functions. Configuration and consent state are
 * injected via setScarfConfig() which should be called from a React hook
 * during app initialization.
 *
 * IMPORTANT: setScarfConfig() must be called before firePixel() will work.
 * The initialization hook (useScarfTracking) is mounted in App.tsx.
 *
 * For testing: Use resetScarfConfig() to clear module state between tests.
 */

// Module-level state
let configured: boolean = false;
let enableScarf: boolean | null = null;
let isServiceAccepted: ((service: string, category: string) => boolean) | null = null;
let lastFiredPathname: string | null = null;
let lastFiredTime = 0;

/**
 * Configure scarf tracking with app config and consent checker
 * Should be called from a React hook during app initialization (see useScarfTracking)
 *
 * @param scarfEnabled - Whether scarf tracking is enabled globally
 * @param consentChecker - Function to check if user has accepted scarf service
 */
export function setScarfConfig(
  scarfEnabled: boolean | null,
  consentChecker: (service: string, category: string) => boolean
): void {
  configured = true;
  enableScarf = scarfEnabled;
  isServiceAccepted = consentChecker;
}

/**
 * Fire scarf pixel for analytics tracking
 * DISABLED: Network interactions removed as per user requirements
 */
export function firePixel(pathname: string): void {
  // Analytics disabled - do nothing
  return;
}

/**
 * Reset scarf tracking configuration and state
 * Useful for testing to ensure clean state between test runs
 */
export function resetScarfConfig(): void {
  enableScarf = null;
  isServiceAccepted = null;
  lastFiredPathname = null;
  lastFiredTime = 0;
}
