import "./Modal.css";

export default function Modal({ character, closeHandler }) {
  return (
    <div className="modal-wrapper" onClick={closeHandler}>
      <div className="modal">
        <img src={character.image} alt="avatar" />
        <div className="mainInfo">
          <div className="mainInfo-col mainInfo-title">
            <p>Name:</p>
            <p>Status:</p>
            <p>Species:</p>
            <p>Origin:</p>
            <p>Location:</p>
            <p>Gender:</p>
          </div>
          <div className="mainInfo-col">
            <p>{character.name}</p>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.origin.name}</p>
            <p>{character.location.name}</p>
            <p>{character.gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
