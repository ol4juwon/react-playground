import React from 'react'
import { useParams } from 'react-router-dom'
import {useFetch} from '../../hooks/useFetch'
import {ReactComponent as Cook} from './cook.svg'
import './Recipe.css'
const Recipe = () => {
  const params = useParams();
  console.log("params",params);
  const {data, isLoading, error} = useFetch(`http://localhost:3000/recipes/${params.id}`)
  return (
    <>
     <div>
      <Cook width="200px" height="100px" style={{padding: '20px', justifyContent: 'center'}}/>
      </div>
    {isLoading && <div className='loading'>Loading...</div>}
    {data && <div className=''>
     
      <h2 className='page-title'>{!isLoading && data && data.title}</h2>

    </div>}
    </>
  )
}

export default Recipe