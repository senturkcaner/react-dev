import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <MovieList />
    </>
  );
}

function Header() {
  return (
    <div id="header">
      <h1>Header</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        possimus neque non quam animi quisquam magnam reprehenderit ad ea quidem
        tempora odio earum et eveniet minima qui delectus, pariatur molestias!
      </p>
    </div>
  );
}

function MovieList() {
  return (
    <div>
      <h2>Movie List</h2>
      <div id="movie-list">
        <Movie
          image="1.jpg"
          title="Kaptan Amerika"
          description="Güzel bir film"
        />
      </div>
    </div>
  );
}

function Movie(props) {
  console.log(props);

  const movieObj = {
    image: "1.jpg",
    title: "Kaptan Amerika",
    description: "Güzel bir film",
  };

  return (
    <div className="movie">
      <img src={"/img/" + props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
