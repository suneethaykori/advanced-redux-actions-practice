import { connect } from 'react-redux';
import { setCurrentUserSort } from "../actions";
import SortUsers from "../components/SortUsers"

function mapDispatchToProps(dispatch){
    return {
      set:function(sort){
        let action = setCurrentUserSort(sort)
        dispatch(action);
      }
    }
  }
  
  let CurrentUserSort = connect(null, mapDispatchToProps)(SortUsers)
  export default CurrentUserSort;
  