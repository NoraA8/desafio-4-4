import { useState, useEffect } from "react";

const MiApi = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState([]);

  const getData = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await res.json();
    setCharacters(data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <input
          className="form-control me-2 my-3"
          type="search"
          placeholder="Buscador"
          aria-label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {characters
        .filter((x) => x.name.includes(search))
        .map((item) => {
          return (
                <div key={item.id} className="card my-3 text-center" style={{ width: "25rem" }}>
                  <img src={item.image} className="card-img-top size" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                  </div>
                </div>
          );
        })
        .reverse()}
    </>
  );
};

export default MiApi;
