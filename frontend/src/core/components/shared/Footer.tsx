import { Flex } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useCookieConsent } from '@app/hooks/useCookieConsent';
import { useFooterInfo } from '@app/hooks/useFooterInfo';

interface FooterProps {
  privacyPolicy?: string;
  termsAndConditions?: string;
  accessibilityStatement?: string;
  cookiePolicy?: string;
  impressum?: string;
  analyticsEnabled?: boolean;
  forceLightMode?: boolean;
}

export default function Footer({
  privacyPolicy,
  termsAndConditions,
  accessibilityStatement,
  cookiePolicy,
  impressum,
  analyticsEnabled,
  forceLightMode = false
}: FooterProps) {
  const { t } = useTranslation();
  const { footerInfo } = useFooterInfo();

  // Use props if provided, otherwise fall back to fetched footer info
  const finalAnalyticsEnabled = analyticsEnabled ?? footerInfo?.analyticsEnabled ?? false;
  const finalPrivacyPolicy = privacyPolicy ?? footerInfo?.privacyPolicy;
  const finalTermsAndConditions = termsAndConditions ?? footerInfo?.termsAndConditions;
  const finalAccessibilityStatement = accessibilityStatement ?? footerInfo?.accessibilityStatement;
  const finalCookiePolicy = cookiePolicy ?? footerInfo?.cookiePolicy;
  const finalImpressum = impressum ?? footerInfo?.impressum;

  const { showCookiePreferences } = useCookieConsent({ analyticsEnabled: finalAnalyticsEnabled, forceLightMode });

  // Default URLs
  const defaultTermsUrl = "https://www.stirling.com/legal/terms-of-service";
  const defaultPrivacyUrl = "https://www.stirling.com/legal/privacy-policy";
  const defaultAccessibilityUrl = "https://www.stirling.com/accessibility";

  // Use provided URLs or fall back to defaults
  const finalTermsUrl = finalTermsAndConditions || defaultTermsUrl;
  const finalPrivacyUrl = finalPrivacyPolicy || defaultPrivacyUrl;
  const finalAccessibilityUrl = finalAccessibilityStatement || defaultAccessibilityUrl;

  // Helper to check if a value is valid (not null/undefined/empty string)
  const isValidLink = (link?: string) => link && link.trim().length > 0;

  // Footer removed as per user requirements
  return null;
}
