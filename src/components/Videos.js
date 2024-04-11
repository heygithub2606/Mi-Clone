import React from "react";
import VideosCard from './VideosCard.js'
import '../Styles/Videos.css'

const Videos = ({ videos }) => {
    return (
        <div className="Videos">
            {
                videos.map((item, index) => {
                    return <VideosCard index={index} key={item.image} image={item.image} name={item.name} />
                })
            }
        </div>
    )
}


export default Videos;