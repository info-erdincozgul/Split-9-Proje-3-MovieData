import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

const Movie = (props) => {
  const { addToFavorites, deleteMovie, removeFavorite, favMovies } = props;

  const [movie, setMovie] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://nextgen-project.onrender.com/api/s11d3/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [id]);

  return (
    <div className="bg-white rounded-md shadow flex-1 dark:bg-slate-800 dark:text-white">
      <div className="p-5 pb-3 border-b border-zinc-200">
        <h4 className="text-xl font-bold">{movie.title} Details</h4>
      </div>
      <div className="px-5 py-3">
        <div className="py-1 flex">
          <div className="view-label">Title</div>
          <div className="flex-1">{movie.title}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label">Drictor</div>
          <div className="flex-1">{movie.director}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label">Genre</div>
          <div className="flex-1">{movie.genre}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label">Metascore</div>
          <div className="flex-1">{movie.metascore}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label">Description</div>
          <p className="flex-1">{movie.description}</p>
        </div>
      </div>

      <div className="px-5 py-3 border-t border-zinc-200 flex justify-end gap-2">
        {!favMovies.find((favmovie) => favmovie.id === movie.id) &&
        <button
          className="myButton bg-blue-600 hover:bg-blue-500 dark:bg-blue-200 dark:hover:bg-blue-400 dark:text-slate-800"
          onClick={() => addToFavorites(movie)}
        >
          Add Favorites
        </button> }
        {favMovies.find((favmovie) => favmovie.id === movie.id) && (
          <button
            className="myButton bg-blue-600 hover:bg-blue-500 dark:bg-blue-200 dark:hover:bg-blue-400 dark:text-slate-800"
            onClick={() => removeFavorite(movie.id)}
          >
            Remove Favorites
          </button>
        )}

        <Link
          to={`/movies/edit/${movie.id}`}
          className="myButton bg-blue-600 hover:bg-blue-500 dark:bg-blue-200 dark:hover:bg-blue-400 dark:text-slate-800"
        >
          Edit
        </Link>
        <button
          className="myButton bg-red-600 hover:bg-red-500 dark:bg-red-200 dark:hover:bg-red-400 dark:text-slate-800"
          onClick={() => deleteMovie(movie.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Movie;
