import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    if (search !== "") {
      fetch(` https://api.tvmaze.com/search/shows?q=${search}`)
        .then((res) => res.json())
        .then((data) => setSearchData(data));
    }
  }, [search]);
  return (
    <>
        <h1 style={{"text-align":"center"}}>Movie search box</h1>
      <div className="box">
        <fieldset style={{"margin-top":"-20vh"}}>
          <legend>
            <h1>Search Box</h1>
          </legend>
          <form action="">
            <input
              type="text"
              name=""
              id=""
              onChange={handleChange}
              value={search}
            />
            <div className="s-data">
              {searchData.map((data, index) => {
                return (
                  <a href={data.show.url} key={index}>
                    {data.show.name} <br />
                  </a>
                );
              })}
            </div>
          </form>
        </fieldset>
      </div>
    </>
  );
}

export default App;
