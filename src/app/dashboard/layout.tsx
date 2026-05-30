import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Client Workspace & Inventory",
  description: "Access your purchased Power BI and UI/UX templates, manage licenses, and download your analytical frameworks from Gengraphs & Graphics.",
  openGraph: {
    title: "Client Workspace & Inventory | Gengraphs & Graphics",
    description: "Access your purchased Power BI and UI/UX templates, manage licenses, and download your analytical frameworks from Gengraphs & Graphics.",
  }
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
