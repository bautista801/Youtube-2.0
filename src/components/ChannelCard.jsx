import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ChannelCard.css'

const ChannelCard = ({ChannelDetail}) => {
  return (
    <div className='cartaCanal'>
      <Link to={`/channel/${ChannelDetail?.id?.channelId}`} >
        <div className='cardContent'>
          <img src={ChannelDetail?.snippet?.thumbnails?.high?.url } alt={ChannelDetail?.snippet?.title} />
          <h6 className='titleChannel'>{ChannelDetail?.snippet?.title}</h6>
          {
            ChannelDetail?.statistics?.subscriberCount && (
              <h6>
                {parseInt(ChannelDetail?.statistics?.subscriberCount).toLocaleString()} Suscriptores
              </h6>
            )
          }
        </div>
      </Link>
    </div>
  )
}

export default ChannelCard