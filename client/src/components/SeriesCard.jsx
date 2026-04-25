import React from 'react'

const SeriesCard = (props) => {
    return (
        <li
            className='bg-red-400 rounded-xl p-4 w-72 shadow-lg'
        >
            <div>
                <img
                    src={props.currElem.img_url}
                    alt={props.currElem.name}
                    className='w-full h-48 object-cover rounded-lg'
                />
            </div>

            <h2 className='font-bold text-lg mt-2'>
                {props.currElem.name}
            </h2>

            <h3>⭐ {props.currElem.rating}</h3>

            <p className='text-sm mt-1'>
                {props.currElem.description}
            </p>

            <p className='mt-1'>
                <strong>Genre:</strong> {props.currElem.genre.join(", ")}
            </p>

            <p className='mt-1'>
                <strong>Cast:</strong> {props.currElem.cast.join(", ")}
            </p>

            <a
                href={props.currElem.watch_url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className='mt-3 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800'>
                    Watch Now
                </button>
            </a>
        </li>
    )
}

export default SeriesCard