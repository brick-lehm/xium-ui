import { AuthSplitLayout } from 'src/theme/core/usage/auth/jwt/layout/auth-split';

import { GuestGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <GuestGuard>
      <AuthSplitLayout>{children}</AuthSplitLayout>
    </GuestGuard>
  );
}
