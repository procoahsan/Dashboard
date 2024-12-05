import React from 'react'

export default function DollarCard({title,price}) {
  return (
    <div className='flex flex-col gap-2'>
      <span className='text-md font-semibold' >{title}</span>
    <span className='text-lg font-semibold' >{price}</span>

    </div>
  )
}
