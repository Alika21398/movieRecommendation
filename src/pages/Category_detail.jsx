import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchGenres, fetchMoviesWithGenres } from "../apiHooks/api";
import { IMAGE_URL } from "../../config/constants";

const Category_detail = () => {
  let { cid } = useParams();
  const [category, setCategory] = useState(cid);
  const [genres, setGenres] = useState();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchGenres()
      .then((res) => setGenres(res))
      .catch((e) => console.error(e));

    fetchMoviesWithGenres(cid)
      .then((res) => {
        setMovies(res);
      })
      .catch((e) => {
        console.error(e);
      });
      setCategory(cid)
  }, [cid]);

  const handleChange = (id) => {
    fetchMoviesWithGenres(id)
      .then((res) => {
        console.log('res', res)
        setMovies(res);
      })
      .catch((e) => {
        console.error(e);
      });
      setCategory(id)
  };
console.log('first', genres)
  return (
    <>
      <section className="px-11 lg:px-44">
        {/* Filtering content starts */}
        <div className="my-5">
          <label htmlFor="" className="mr-2">
            Choose the genre
          </label>
          <select
            className="px-4 py-2 border border-[#F50000]"
            name=""
            id=""
            value={category}
            onChange={(e) => handleChange(e.target.value)}
          >
            <option>Select</option>
            {genres?.map((items) => {
              return <option value={items?.id}>{items?.name}</option>;
            })}
          </select>
        </div>
        {/* Filtering content ends */}
        <div className="flex gap-4 flex-wrap justify-center">
          {movies?.map((items) => {
            const genre = items?.genres?.map((items) => items?.name).join(", ");
            return (
              <Link to={`/details/${items.id}`}>
              <div className="lg:w-[300px] rounded-md">
                <div>
                  <img src={IMAGE_URL + items?.poster_path} alt="poster" />
                </div>
                <div className="p-4">
                  <div className="font-bold">{items?.title}</div>
                  <div className="text-sm mt-2">{genre} min</div>
                </div>
              </div>
          </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Category_detail;
