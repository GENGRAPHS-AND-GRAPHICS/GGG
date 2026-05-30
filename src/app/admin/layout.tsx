import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Admin Portal",
  description: "Administrative command center for Gengraphs & Graphics. Manage template assets, system analytics, orders, and system configurations.",
  robots: {
    index: false,
    follow: false,
  }
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
