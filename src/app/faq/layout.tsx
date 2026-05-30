import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to commonly asked questions about Gengraphs & Graphics Power BI templates, dashboard customization, download licensing, and integration support.",
  openGraph: {
    title: "Frequently Asked Questions | Gengraphs & Graphics",
    description: "Find answers to commonly asked questions about Gengraphs & Graphics Power BI templates, dashboard customization, download licensing, and integration support.",
  }
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
