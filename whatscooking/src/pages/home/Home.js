import './Home.css'
import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../components/RecipeList'


const Home = () => {
  const { data, isLoading, error } = useFetch('http://localhost:3000/recipes')
  return (
    <div className='home'>
      {error && <div className='error'>{error}</div>}
      {isLoading && <div className='loading'>Loading...</div>}
      
      {!isLoading && !error &&  <RecipeList recipes={data} />}
    
    </div>
   
  )
}

export default Home