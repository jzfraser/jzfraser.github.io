import "../styles/Avatar.scss";

export type AvatarProps = {
  imgSrc: string;
};

export function Avatar({ imgSrc }: AvatarProps) {
  return (
    <div className="avatar">
      <img src={imgSrc} alt="image of me smiling" />
    </div>
  );
}
