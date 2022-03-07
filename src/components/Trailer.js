import React from 'react';

const Trailer = ({trailer}) => {
    //console.log(trailer.linkEmbed);
  return (
    <iframe id="iframe" title={trailer?.title}
    src={trailer?.linkEmbed}>
    </iframe>
  )
}

export default Trailer