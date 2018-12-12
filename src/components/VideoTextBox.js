import React from 'react';
import {connect} from "react-redux";
import {setVideoURL} from "../actions";

function VideoTextBox(props) {
  return (
      <div>
        Enter URL of YouTube video
        <input 
      onChange={(e)=>{
        if(props.set){
          props.set(e.target.value);
        }
      }}
      type="text" />

      </div>
  );
}


export default VideoTextBox;


