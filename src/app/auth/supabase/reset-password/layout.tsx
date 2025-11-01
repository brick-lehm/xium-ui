import { AuthSplitLayout } from "src/theme/page/auth/jwt/layout/auth-split";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <AuthSplitLayout>{children}</AuthSplitLayout>;
}
