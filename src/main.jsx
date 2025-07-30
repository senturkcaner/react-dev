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
  const headerStyles = {
    color: "red",
    fontSize: "30px",
    textTransform: "uppercase",
  };
  return (
    <div id="header">
      <h1 style={headerStyles}>Header</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        possimus neque non quam animi quisquam magnam reprehenderit ad ea quidem
        tempora odio earum et eveniet minima qui delectus, pariatur molestias!
      </p>
    </div>
  );
}

function MovieList() {
  const movie_list = [
    {
      id: 1,
      image: "1.jpg",
      title: "Kaptan Amerika",
      description: "Güzel bir film",
      is_active: true,
      is_new: true,
    },
    {
      id: 2,
      image: "2.jpg",
      title: "Araba Hırsızları",
      description: "Güzel bir film",
      is_active: true,
      is_new: false,
    },
    {
      id: 3,
      image: "3.jpg",
      title: "The Codes of War",
      description: "Güzel bir film",
      is_active: true,
      is_new: true,
    },
    {
      id: 4,
      image: "4.jpg",
      title: "Moana 2",
      description: "Güzel bir film",
      is_active: true,
      is_new: false,
    },
  ];
  return (
    <div>
      {movie_list.filter((m) => m.is_active).length == 0 ? (
        <h2>Movie List</h2>
      ) : (
        <div id="movie-list">
          {movie_list.map((movie, index) => (
            <Movie key={index} movieObj={movie} />
          ))}
        </div>
      )}
      <div>Film Bulunamadı</div>
    </div>
  );
}

function Movie({ movieObj }) {
  console.log(movieObj);
  return (
    <>
      {movieObj.is_active && (
        <div className="movie">
          <img src={"/img/" + movieObj.image} alt="" />
          <h3 className={`f30 ${movieObj.is_new ? "new" : ""}`}>
            {movieObj.title}
          </h3>
          <p>{movieObj.description}</p>
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
