import React from 'react';

const Trailer = ({trailer}) => {
    //console.log(trailer.linkEmbed);
  return (
    <iframe width="800" height="600" title={trailer?.title}
    src={trailer?.linkEmbed}>
    </iframe>
  )
}

export default Trailer