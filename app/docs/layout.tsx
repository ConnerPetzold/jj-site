import Logo from "@/components/Logo";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      {...baseOptions()}
      tree={source.pageTree}
      githubUrl="https://github.com/jj-vcs/jj"
    >
      {children}
    </DocsLayout>
  );
}
