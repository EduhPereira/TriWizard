import "./styles.css";
export const StudentCard = ({ key, name, image, house }) => {
  return (
    <div className={`StudentCard ${house}__border`} key={key}>
      <img className="StudentCard__img" src={image} alt="" />
      <h2 className="StudentCard__name">{name}</h2>
      <span className={`StudentCard__house ${house}`}>{house}</span>
    </div>
  );
};
