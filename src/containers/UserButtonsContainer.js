import { connect } from 'react-redux';
import { addUser,removeUser  } from "../actions";
import UserButtons from "../components/UserButtons"


function userDispatch(dispatch){
    return{
      add:function(user){
        dispatch(addUser(user));
      },
      remove:function(user){
        dispatch(removeUser(user));
      }
  
  
    }
  }
  
  let UserButtonsCOntainer = connect(null, userDispatch)(UserButtons);
  export default UserButtonsCOntainer;
  