import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AnimeCard from './AnimeCard';
import Loading from './Loading';

const AnimeList = () => {

    const [animeLists, setAnimeLists] = useState(null)
    const [loading, setLoading] = useState(false)


    const url = "http://localhost:3000/animes";

    const fetchAllAnimeLists = async()=>{
        try {
            const response  = await axios.get(url);
            setLoading(true)
            await new Promise(resolve=>setTimeout(resolve, 3000))
            setAnimeLists(response.data)
            setLoading(false)
        } catch (error) {
            console.log("Error In Fetching List Of Anime : ", error)
            
        }
    }

    useEffect(()=>{
        fetchAllAnimeLists()
    }, [])
    
  return (

    <div>
        {
            loading ? <Loading/> : (    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3'>
    {
        animeLists&& animeLists.length > 0 ? animeLists.map(anime=><AnimeCard anime={anime} key={anime?.id} className='text-sm font-bold'>{anime?.title}</AnimeCard>):<h1>No Anime List</h1>
    }
    </div>)
        }
    </div>





    
      
  )
}

export default AnimeList
