import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Topbar, ChannelDetail, Feed, SearchFeed, VideoDetail} from './components';

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
