import React from 'react';
import GifsList from './GifsList';
import SearchBar from './SearchBar';

const App = ({ gifUrls, fetchGifsDispatch }) => (
  <>
    <SearchBar fetchGifsDispatch={fetchGifsDispatch} />
    <GifsList gifUrls={gifUrls} />
  </>
);

export default App;
