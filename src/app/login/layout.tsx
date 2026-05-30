import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Secure Partner Login",
  description: "Log in to your Gengraphs & Graphics corporate workspace to access your purchases, dynamic dashboard downloads, and workspace integration tools.",
  openGraph: {
    title: "Secure Partner Login | Gengraphs & Graphics",
    description: "Log in to your Gengraphs & Graphics corporate workspace to access your purchases, dynamic dashboard downloads, and workspace integration tools.",
  }
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
