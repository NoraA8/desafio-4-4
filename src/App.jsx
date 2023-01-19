import MiApi from "./components/MiApi.jsx";

const App = () => {
  return (
    <>
      <header className="bg-img">
        <h1> </h1>
      </header>
      <div className="container d-flex flex-column align-items-center mb-5">
        <MiApi />
      </div>
      <footer className="text-center text-white color">
        <h5 className="pt-3">Cantidad de personajes: 826 - Cantidad de temporadas: 6 - Cantidad de episodios: 61</h5>
        <h5>Estado de emision <button className="icon" disabled></button></h5>
        <p className="m-0 pb-2">❮❯ ©Copyright 2023</p>
      </footer>
    </>
  );
};

export default App;
