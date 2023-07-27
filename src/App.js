import * as React from "react";
import Card from "./components/Card/Card";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://rickandmortyapi.com/api/character")
        .then((res) => {
          const info = res.data;
          if (info) {
            setData({ info });
          }
        });
    };
    fetchData();
    // console.log("info*** ", data);
  }, []);

  return (
    <div className="App">
      <div className="cards">
        {data &&
          data.info &&
          data.info.results.map((item) => <Card key={item.id} info={item} />)}
      </div>
    </div>
  );
}

export default App;
