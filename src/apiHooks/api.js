import axios from "axios"


const fetchMovieWithId = async(id)=>{
    try{
      const res = await axios.get( `/api/movies/${id}`)
      return res.data

    }
    catch(error){
      console.log("error", error)
    }
  }

  export {fetchMovieWithId}