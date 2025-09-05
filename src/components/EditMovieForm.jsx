import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAxios, { METHODS } from '../hooks/useAxios';
import axios from 'axios';

const EditMovieForm = (props) => {
  const { setMovies } = props;
  const [movie, setMovie] = useState({
    title: '',
    director: '',
    genre: '',
    metascore: 0,
    description: '',
  });
  const { id } = useParams();
  const {
    data: getMovieData,
    loading: getLoading,
    error: getError,
    sendRequest: sendGetRequest,
  } = useAxios({});
  const { loading: putLoading, sendRequest: sendPutRequest } = useAxios({});

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    sendGetRequest({
      url: `/movies/${id}`,
      method: METHODS.GET,
    });
  }, []);

  useEffect(() => {
    if (getMovieData) {
      setMovie(getMovieData);
    }
  }, [getMovieData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `/movies/${id}`;

    sendPutRequest({
      url,
      method: METHODS.PUT,
      data: movie,
      redirect: `/movies/${id}`,
    });
  };

  const { title, director, genre, metascore, description } = movie;

  return (
    <div className="bg-white rounded-md shadow flex-1 dark:bg-slate-800 dark:text-white">
      <form onSubmit={handleSubmit}>
        <div className="p-5 pb-3 border-b border-zinc-200">
          <h4 className="text-xl font-bold">
             <strong>Adjust </strong>{title}
          </h4>
        </div>
        <div className="px-5 py-3">
          <div className="py-2">
            <label htmlFor="title" className="block pb-1 text-lg">
              Title
            </label>
            <input
              className="dark:bg-slate-800 dark:text-white"
              value={title}
              onChange={handleChange}
              name="title"
              id="title"
              type="text"
            />
          </div>
          <div className="py-2">
            <label htmlFor="director" className="block pb-1 text-lg">
              Director
            </label>
            <input
              className="dark:bg-slate-800 dark:text-white"
              value={director}
              onChange={handleChange}
              name="director"
              id="director"
              type="text"
            />
          </div>
          <div className="py-2">
            <label htmlFor="genre" className="block pb-1 text-lg">
              Genre
            </label>
            <input
              className="dark:bg-slate-800 dark:text-white"
              value={genre}
              onChange={handleChange}
              name="genre"
              id="genre"
              type="text"
            />
          </div>
          <div className="py-2">
            <label htmlFor="metascore" className="block pb-1 text-lg">
              Metascore
            </label>
            <input
              className="dark:bg-slate-800 dark:text-white"
              value={metascore}
              onChange={handleChange}
              name="metascore"
              id="metascore"
              type="number"
            />
          </div>
          <div className="py-2">
            <label htmlFor="description" className="block pb-1 text-lg ">
              Description
            </label>
            <textarea
              className="dark:bg-slate-800 dark:text-white"
              value={description}
              onChange={handleChange}
              name="description"
              id="description"
            ></textarea>
          </div>
        </div>
        <div className="px-5 py-4 border-t border-zinc-200 flex justify-end gap-2">
          <Link to={`/movies/${id}`} className="myButton bg-zinc-500">
            Cancel
          </Link>
          <button
            type="submit"
            className="myButton bg-green-700 hover:bg-green-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMovieForm;
