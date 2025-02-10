import axios from "axios"


const fetchMovieWithId = async(id)=>{
    try{
      const res = await axios.get(`/api/movies/${id}`)
      return res?.data
    }
    catch(error){
      console.error("error", error)
    }
  }
const fetchRecommendation = async(id)=>{
    try{
      const res = await axios.get(`/api/movies/${id}/recommendations`)
      return res?.data
    }
    catch(error){
      console.error("error", error)
    }
  }

const fetchGenres = async()=>{
    try{
      const res = await axios.get(`/api/genres`)
      return res?.data
    }
    catch(error){
      console.error("error", error)
    }
  }

const fetchMoviesWithGenres = async(id)=>{
    try{
      const res = await axios.get(`/api/movies/?year=&genres=${id}`)
      return res?.data?.results;
    }
    catch(error){
      console.error("error", error)
    }
  }

  export {fetchMovieWithId, fetchRecommendation, fetchGenres, fetchMoviesWithGenres}