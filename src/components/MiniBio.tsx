import "../styles/MiniBio.scss";

import { ReactNode } from "react";
import { Row } from "react-bootstrap";

import { MiniBioBullet, MiniBioBulletProps } from "./BioBullet";
import { SocialLink, SocialLinkProps } from "./SocialLink";

export type MiniBioProps = {
  intro: ReactNode;
  miniBioBullets: MiniBioBulletProps[];
  socialLinks?: SocialLinkProps[];
};

export function MiniBio({ intro, miniBioBullets, socialLinks }: MiniBioProps) {
  return (
    <div className="bio">
      <div className="bio-container">
        {intro}
        <div className="bio-contents">
          {miniBioBullets.map((bullet, index) => (
            <MiniBioBullet key={index} icon={bullet.icon} text={bullet.text} />
          ))}
        </div>
        {socialLinks && (
          <Row>
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                icon={link.icon}
                to={link.to}
                label={link.label}
              />
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}
