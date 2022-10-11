import React from 'react'
import { useParams } from 'react-router-dom'

export const Search = () => {
 const q= useParams();
 console.log(q)
  return (
    <div>Search</div>
  )
}
