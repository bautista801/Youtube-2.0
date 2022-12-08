import React from 'react'
import '../styles/ChannelDetail.css'
import { useState, useEffect } from 'react'
import { Videos, ChannelCard } from './'
import { useParams } from 'react-router-dom'
import { FetchApi } from '../utils/FetchApi'

const ChannelDetail = () => {

  const [ChannelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])


  const { id } = useParams()

  useEffect(() => {
    const fetchResults = async () => {
      const data = await FetchApi(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await FetchApi(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);


  return (
      <div>
        <div className='gradiente'>
        </div>
        <div className='top'>
          <ChannelCard ChannelDetail={ChannelDetail} />
          <Videos videos={videos} />
        </div>
      </div>
  )
}

export default ChannelDetail