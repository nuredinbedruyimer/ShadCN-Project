import React from 'react'
import Navbar from './components/pages/anime/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/pages/homepage/HomePage'
import AnimeList from './components/pages/anime/AnimeList'
import DiscoveryPage from './components/pages/discoveries/DiscoveryPage'
import CommunityPage from './components/pages/community/CommunityPage'
import ProfilePage from './components/pages/user/ProfilePage'
import AnimeListPage from './components/pages/anime/AnimeListPage'

const App = () => {
  return (
    <header className='bg-gray-50 w-full flex justify-center flex-col mx-0'>
    <Navbar/>

    <Routes>

    <Route path='/'>
    <Route index element={<HomePage/>}/>
    <Route path='anime-list' element={<AnimeListPage/>}/>
    <Route path='discoveries' element={<DiscoveryPage/>}>
      
    </Route>
    <Route path='community' element={<CommunityPage/>}/>
    <Route path='profile' element={<ProfilePage/>}/>


    </Route>
      
    </Routes>
 
    </header>
  )
}

export default App
