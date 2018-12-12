import { connect } from 'react-redux';
import { setIsLoading } from "../actions";
import ShowModal from "../components/ShowModal"

function mapDispatchToProps(dispatch){
    return{
      setIsLoading:function(isLoading){
        var action = setIsLoading(isLoading);
        dispatch(action);
      }
    }
  }
  
  let ShowModalContainer = connect(null, mapDispatchToProps)(ShowModal)
  export default ShowModalContainer;
  