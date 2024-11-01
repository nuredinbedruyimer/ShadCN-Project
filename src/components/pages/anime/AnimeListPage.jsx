import React from 'react'
import AnimeList from './AnimeList'

const AnimeListPage = () => {
  return (
    <div>
         <h1 className='text-center mb-6'> Anime <span className='text-4xl text-orange-500 font-extrabold'>List</span></h1>
         <AnimeList/>
      
    </div>
  )
}

export default AnimeListPage
