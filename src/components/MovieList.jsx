import Movie from "./Movie";
import { movie_list } from "../data";

export default function MovieList() {
  return (
    <div className="container">
      <h2>Movie List</h2>
      {movie_list.filter((m) => m.is_active).length == 0 ? (
        <div>Film Bulunamadı</div>
      ) : (
        <div
          id="movie-list"
          className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4"
        >
          {movie_list.map((movie, index) => (
            <Movie key={index} movieObj={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
