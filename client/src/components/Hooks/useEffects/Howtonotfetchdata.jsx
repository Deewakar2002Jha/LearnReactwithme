import React from 'react'
import { useState } from 'react'

const Howtonotfetchdata = () => {

    // Create state to store API data
    // apiData = current data
    // setApiData = function to update data
    const [apiData, setApiData] = useState([]);

    // ❌ This fetch runs EVERY time component renders (not correct practice)
    fetch('https://jsonplaceholder.typicode.com/posts')

        // Convert response into JSON format
        .then(response => response.json())

        // Store fetched data into state
        .then(data => setApiData(data))

        // Catch and log any errors
        .catch(error => console.error(error))

    return (
        <div className='container effects-container'>

            {/* Loop through apiData array and display each item */}
            <ul>
                {apiData.map(item => (

                    // Use unique key (item.id) for React list rendering
                    <li key={item.id}>

                        {/* Display title of each post */}
                        {item.title}

                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Howtonotfetchdata