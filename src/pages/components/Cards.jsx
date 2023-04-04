import React from 'react'
import Image from 'next/image'

const Cards = ({data}) => {
  console.log(data.images);
  return (
    <div>
          <div className="card card-compact glass shadow-xl text-center cursor-pointer">
            <div className='flex flex-col items-center'>
              <Image src={data.images} className='w-56 p-4' alt="language" />
              <div className="card-body">
                  <h2 className="card-title">{data.name}</h2>
              </div>

            </div>
          </div>
    </div>
  )
}

export default Cards