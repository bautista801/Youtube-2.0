import React from 'react'
import { Videos } from './';
import '../styles/Feed.css'
import { FetchApi } from '../utils/FetchApi'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {

  const { searchTerm } = useParams()

  const [videos, setVideos] = useState([])

  useEffect(() => {
    FetchApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm])

  return (
    <div className='results'>
      <h3 className='title-h3 mt-4'>Resultados de <span className='word'>{searchTerm}</span></h3>
      <Videos videos={videos} />
    </div>
  )
}

export default SearchFeed