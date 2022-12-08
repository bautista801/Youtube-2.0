import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/VideoCard.css'
import { demoVideoUrl } from '../utils/constants'

const VideoCard = ({video: { id: { videoId }, snippet }}) => {

    return (
        <Link to={ videoId? `/video/${videoId}` : demoVideoUrl }>
            <div className="carta">
                <img src={snippet?.thumbnails?.medium?.url} className="card-img-top" alt={snippet.title} />
                <div className="card-body">
                    <h5 className="card-title">{snippet?.title.slice(0, 60)}</h5>
                    <h6 className="card-title">{snippet?.channelTitle}</h6>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard