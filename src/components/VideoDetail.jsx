import { useState, useEffect, React } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Loader } from './'
import { Videos } from './'
import { FetchApi } from '../utils/FetchApi'
import '../styles/VideoDetail.css'
import { AiOutlineLike } from 'react-icons/ai'
import ReactPlayer from 'react-player'


const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    FetchApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    FetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <div className='row p-0 m-0'>
      <div className='col-sm-12 col-md-12 col-lg-12 col-xl-8 col-xxl-8 p-0 mx-auto limit'>
        <div className="video">
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls playing={true} />
        </div>
        <h3 className='titleVideo'>{title}</h3>
        <div className='infoVideo'>
          <div className='ms-2'>
            <Link to={`/channel/${channelId}`}>
              <span>
                {channelTitle}
              </span>
            </Link>
            <div>
              <p className='visits mt-4'>
                {viewCount} Visitas
              </p>
            </div>
          </div>
          <div className='likes'>
            <AiOutlineLike className='icon-like' />
            <span className='number-likes'>
              {likeCount}
            </span>
          </div>
        </div>
      </div>

      <div className='col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4 p-0 m-0'>
        <Videos videos={videos} />
      </div>
    </div>
  )
}

export default VideoDetail