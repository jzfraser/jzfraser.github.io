import { ReactNode } from "react";

export type SocialLinkProps = {
  icon: ReactNode;
  to: string;
  label: string;
};

export function SocialLink({ icon, to, label }: SocialLinkProps) {
  return (
    <a
      className="social-icon"
      target="_blank"
      aria-label={label}
      rel="noopener noreferrer"
      href={to}
    >
      {icon}
    </a>
  );
}
