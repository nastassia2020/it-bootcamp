import "./Card.css"


export default function Card({ info }) {
  return (
    <div className="wrapper">
      <img className="avatar" src={info.image} alt="haha" />
      <p className="personName">{info.name}</p>
    </div>
  );
}
