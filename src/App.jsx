import React from 'react'
import AnimeList from './components/pages/AnimeList'

const App = () => {
  return (
    <main className=''>
      <h1 className='text-center mb-6'> Anime <span className='text-4xl text-orange-500 font-extrabold'>List</span></h1>
      <AnimeList/>
    </main>
  )
}

export default App
