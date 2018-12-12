import { connect } from 'react-redux';
import { setIsLoading } from "../actions";
import LoadingModal from "../components/Modal";

function mapStateToProps(state){
    return{
      isLoading: state.isLoading,
    }
  }
  

function mapDispatchToProps(dispatch){
    return{
      setIsLoading:function(isLoading){
        var action = setIsLoading(isLoading);
        dispatch(action);
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoadingModal)
  