import "./Card.css";

export default function Card({ info, openHandler }) {
  return (
    <div className="wrapper" onClick={openHandler}>
      <img className="avatar" src={info.image} alt="haha" />
      <p className="personName">{info.name}</p>
    </div>
  );
}
