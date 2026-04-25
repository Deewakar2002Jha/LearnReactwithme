import React from 'react'
import seriesdata from '../api/Seriesdata.json'

const NetflixSeries = () => {
  return (
    <ul className='p-5 flex flex-wrap gap-6 justify-center'>
      {seriesdata.map((currElem) => {
        return (
          <li
            key={currElem.id}
            className='bg-amber-300 rounded-xl p-4 w-72 shadow-lg'
          >
            <div>
              <img
                src={currElem.img_url}
                alt={currElem.name}
                className='w-full h-48 object-cover rounded-lg'
              />
            </div>

            <h2 className='font-bold text-lg mt-2'>
              {currElem.name}
            </h2>

            <h3>⭐ {currElem.rating}</h3>

            <p className='text-sm mt-1'>
              {currElem.description}
            </p>

            <p className='mt-1'>
              <strong>Genre:</strong> {currElem.genre.join(", ")}
            </p>

            <p className='mt-1'>
              <strong>Cast:</strong> {currElem.cast.join(", ")}
            </p>

            <a
              href={currElem.watch_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className='mt-3 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800'>
                Watch Now
              </button>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default NetflixSeries