import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Logo from "@/components/Logo";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Logo className="h-8" />,
    },
    githubUrl: "https://github.com/jj-vcs/jj",
  };
}
