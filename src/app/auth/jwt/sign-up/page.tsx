import type { Metadata } from 'next';

import { CONFIG } from 'src/global-config';

import { JwtSignUpView } from '../../../../auth/view/jwt/jwt-sign-up-view';

// ----------------------------------------------------------------------

export const metadata: Metadata = { title: `Sign up | Jwt - ${CONFIG.appName}` };

export default function Page() {
  return <JwtSignUpView />;
}
