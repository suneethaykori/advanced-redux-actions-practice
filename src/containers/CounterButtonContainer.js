import CounterButton from "../components/CounterButton"
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from "../actions";



function mapDispatchToProps(dispatch){
    return{
      increase:function(){
        var action = increaseCounter();
        dispatch(action);
      },
      decrease:function(){
        var action = decreaseCounter();
        dispatch(action);
      }
    }
  }
  
  let CounterButtonContainer = connect(null, mapDispatchToProps)(CounterButton);
  export default CounterButtonContainer;

  