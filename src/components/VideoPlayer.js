import React from 'react';
import { connect } from 'react-redux';

function VideoPlayer(props) {
  let width = 200;
  let height = 200;
  if(props.scale){
    width = 200 * props.scale;
    height = 200 * props.scale;
  }
  return (
      <div><iframe title="YouTube video player"  type="text/html" 
      width={width} height={height} src={props.URL}
      frameBorder="0" allowFullScreen></iframe></div>
  );
}

function mapStateToProps(state){
  return{
    URL:state.videoURL,
    scale:state.videoScale
  }
}

export default connect(mapStateToProps)(VideoPlayer)
