import { connect } from 'react-redux';
import { setTemp} from "../actions";
import ChangeTemperature from "../components/ChangeTemperature"

function mapDispatchToProps(dispatch){
    return{
      set:function(temp){
        var action = setTemp(temp);
        dispatch(action);
      }
    }
  }
  
  let ChangeTemperatureContainer = connect(null, mapDispatchToProps)(ChangeTemperature)
  export default ChangeTemperatureContainer;
  
