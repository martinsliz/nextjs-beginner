import React from 'react'
import { useRouter } from 'next/navigation'

const BackButton = () => {
  const {push} = useRouter()
  const handleClick = () => {
    push('/')
  }
  return (
   <button onClick={handleClick}>Go Back</button>
  )
}

export default BackButton