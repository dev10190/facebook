import React, { useContext } from 'react'
import styles from './Home.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Main from '../../components/Main/Main'
import { PostList } from '../../store/facebook-store'
import Video from '../Video/Video'
import MarketPlace from '../MarketPlace/MarketPlace'

const Home = () => {
  const {navbarSelected} = useContext(PostList)
  return (
    <>
    <Navbar />
    {navbarSelected === "Home" && <Main />}

    {navbarSelected === "Video" && <Video />}

    {navbarSelected === 'Market' && <MarketPlace />}
    
    </>
  )
}

export default Home
