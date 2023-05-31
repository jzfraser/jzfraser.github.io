type BioBulletProps = {
  emoji: string;
  text: string;
};

export function BioBullet({ emoji, text }: BioBulletProps) {
  return (
    <div>
      <span className="bio-bullet">{emoji}</span> {text}
    </div>
  );
}
