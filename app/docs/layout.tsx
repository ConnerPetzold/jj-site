import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      tree={source.pageTree}
      githubUrl="https://github.com/jj-vcs/jj"
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}
