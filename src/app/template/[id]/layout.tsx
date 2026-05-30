import { Metadata } from 'next';
import { getPublicPostByIdAction } from '@/app/admin/actions';

interface Props {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: Omit<Props, 'children'>): Promise<Metadata> {
  const { id } = await params;
  try {
    const post = await getPublicPostByIdAction(id);
    if (!post) {
      return {
        title: "Template Not Found",
        description: "The requested dashboard template blueprint could not be found."
      };
    }
    return {
      title: `${post.title} - Power BI & UI/UX Template`,
      description: `Download and launch the ${post.title} dashboard blueprint. Premium corporate analytics configuration designed by Mohit Bhardwaj.`,
      openGraph: {
        title: `${post.title} | Gengraphs & Graphics`,
        description: `Download and launch the ${post.title} dashboard blueprint. Premium corporate analytics configuration designed by Mohit Bhardwaj.`,
      }
    };
  } catch {
    return {
      title: "Premium Dashboard Template",
      description: "Explore high-fidelity, interactive Power BI templates and UI/UX design blueprints."
    };
  }
}

export default function TemplateLayout({ children }: Props) {
  return <>{children}</>;
}
