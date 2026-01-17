import { AppProviders as CoreAppProviders, AppProvidersProps } from "@core/components/AppProviders";
import { AuthProvider } from "@app/auth/UseSession";
import { LicenseProvider } from "@app/contexts/LicenseContext";
import { CheckoutProvider } from "@app/contexts/CheckoutContext";
import { ServerExperienceProvider } from "@app/contexts/ServerExperienceContext";
import { UpdateSeatsProvider } from "@app/contexts/UpdateSeatsContext";

export function AppProviders({ children, appConfigRetryOptions, appConfigProviderProps }: AppProvidersProps) {
  return (
    <CoreAppProviders
      appConfigRetryOptions={appConfigRetryOptions}
      appConfigProviderProps={appConfigProviderProps}
    >
      <AuthProvider>
        <LicenseProvider>
          <UpdateSeatsProvider>
            <ServerExperienceProvider>
              <CheckoutProvider>
                {children}
              </CheckoutProvider>
            </ServerExperienceProvider>
          </UpdateSeatsProvider>
        </LicenseProvider>
      </AuthProvider>
    </CoreAppProviders>
  );
}
