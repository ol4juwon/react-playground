import React from 'react'
import { useLocation } from 'react-router-dom'

export const Search = () => {
 const q= useLocation();
 console.log(q)
  return (
    <div>Search</div>
  )
}
