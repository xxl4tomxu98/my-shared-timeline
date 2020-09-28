import React from 'react';

// TODO: Take in an destructure the `urls` prop
const GifsList = ({urls}) => (

    <div>
      {urls.map(url => <img key={url.id} src={url} alt={url.title}/>)}
    </div>
);

export default GifsList;
