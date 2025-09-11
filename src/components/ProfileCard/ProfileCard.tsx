import s from "./ProfileCard.module.css";
interface Props {
  avatar: string;
  name: string;
  description: string;
}
function ProfileCard(props: Props) {
  const { avatar, name, description } = props;
  return (
    <div className={s.container}>
      <img src={avatar} alt="jack-sparrow" />
      <h2 className={s.name}>{name}</h2>
      <p className={s.userDescription}>{description}</p>
    </div>
  );
}
export default ProfileCard;
