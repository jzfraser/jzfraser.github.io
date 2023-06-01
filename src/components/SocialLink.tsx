import { ReactNode } from "react";
import { Col } from "react-bootstrap";

export type SocialLinkProps = {
  icon: ReactNode;
  to: string;
  label: string;
};

export function SocialLink({ icon, to, label }: SocialLinkProps) {
  return (
    <Col className="social-link">
      <a
        className="social-icon"
        target="_blank"
        aria-label={label}
        rel="noopener noreferrer"
        href={to}
      >
        {icon}
      </a>
    </Col>
  );
}
