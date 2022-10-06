import './Home.css'
import React from 'react'
import { useFetch } from '../../hooks/useFetch'


const Home = () => {
  const { data, isLoading, error } = useFetch('http://localhost:3000/recipes')
  return (
    <div className='home'>
      {error && <div className='error'>{error}</div>}
      {isLoading && <div className='loading'>Loading...</div>}
      
      {data?.map((recipe) => {
      return <h2 key={recipe.id}>Recipe: {recipe.title}</h2>
    })  }</div>
  )
}

export default Home