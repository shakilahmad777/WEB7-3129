import React from 'react'
import { useLoaderData } from 'react-router-dom';

export default function LaptopDetails() {
  const laptop = useLoaderData();
  console.log('moathooor',laptop)
  return (
    <div>
        <h1>Name: {laptop.name}</h1>
        <h2>lasdkfhsdldfk</h2>
    </div>
  )
}
