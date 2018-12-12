import {connect} from "react-redux";
import {setVideoURL} from "../actions";
import VideoTextBox from "../components/VideoTextBox";

function mapDispatchToProps(dispatch){
    return{
      set:function(url){
        var action = setVideoURL(url);
        dispatch(action);
      }
    }
  }
  
  let VideoTextBoxContainer = connect(null, mapDispatchToProps)(VideoTextBox)
  export default VideoTextBoxContainer;
  

