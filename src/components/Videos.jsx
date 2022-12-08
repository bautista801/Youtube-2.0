import React from 'react'
import {ChannelCard, VideoCard} from './'
import '../styles/VideoCard.css'

const Videos = ({videos, seleccionarCategoria}) => {

  if(!videos?.length) return 'Loading...'

  return (
    <div className='d-flex flex-column'>
      <h2 className='title-h2'>{seleccionarCategoria}</h2>
      <div className='flex'>
          {
            videos.map((item, id) => {
              return (
                <div key={id}>
                  { item.id.videoId && <VideoCard video={item} /> }
                  { item.id.channelId && <ChannelCard ChannelDetail={item} /> }
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default Videos