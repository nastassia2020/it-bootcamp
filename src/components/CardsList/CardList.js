import * as React from "react";
import Card from "../Card/Card";
import axios from "axios";
import Modal from "../Modal/Modal";
import "./CardList.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { ColorRing } from "react-loader-spinner";

export default function CardList() {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [selectedCharacter, setSelectedCharacter] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [hasMore, setHasMore] = React.useState(true);

  const fetchData = async () => {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    return res.data.results;
  };

  const fetchMoreData = async () => {
    const newData = await fetchData();
    if (newData.length === 0) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setData((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);
    }, 2000);
  };

  React.useEffect(() => {
    fetchMoreData();
    console.log("data ", data);
  }, []);

  const closeModalHandler = (e) => {
    e.preventDefault();
    setOpenModal(false);
  };

  const characterModal = (character) => {
    return <Modal character={character} closeHandler={closeModalHandler} />;
  };

  const onCardClick = (id) => {
    const character = data.find((item) => item.id === id);
    setSelectedCharacter(character);
    setOpenModal(true);
  };

  return (
    <div className="App">
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        style={{ overflow: "hidden" }}
      >
        <div className="cards">
          {data &&
            data.map((item) => {
              return (
                <React.Fragment key={item.id + page}>
                  <Card openHandler={() => onCardClick(item.id)} info={item} />
                  {openModal &&
                    selectedCharacter?.id === item.id &&
                    characterModal(selectedCharacter)}
                </React.Fragment>
              );
            })}
        </div>
      </InfiniteScroll>
    </div>
  );
}
