import React from 'react'
import {Sidebar, Videos} from './';
import '../styles/Feed.css'
import {FetchApi} from '../utils/FetchApi'
import { useEffect, useState } from 'react';

const Feed = () => {

  const [seleccionarCategoria, setSeleccionarCategoria] = useState('Inicio')

  const [videos, setVideos] = useState([])

  useEffect(() => {
    FetchApi(`search?part=snippet&q=${seleccionarCategoria}`)
     .then((data) => setVideos(data.items))
  }, [seleccionarCategoria])

  return (
    <div className='row m-0'>
      <div className='col-sm-1 col-md-1 col-lg-1 col-xxl-1 fixed'>
        <Sidebar 
          seleccionarCategoria={seleccionarCategoria}
          setSeleccionarCategoria={setSeleccionarCategoria}
        />
      </div>
      <div className='col-sm-11 col-md-11 col-lg-11 col-xxl-11 absolute'>
        <Videos seleccionarCategoria={seleccionarCategoria} videos={videos} />
      </div>
    </div>
  )
}

export default Feed