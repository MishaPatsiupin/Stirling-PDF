import { useEffect } from 'react';
import { useBanner } from '@app/contexts/BannerContext';

export function DesktopBannerInitializer() {
  const { setBanner } = useBanner();

  useEffect(() => {
    // Banners removed as per user requirements
    setBanner(null);
    return () => {
      setBanner(null);
    };
  }, [setBanner]);

  return null;
}
