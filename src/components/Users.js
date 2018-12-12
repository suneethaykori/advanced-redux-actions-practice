import React from 'react';
import { connect } from 'react-redux';

function Users(props) {
  var usersDivs = null;
  if(props.users){
    var sorted = props.users.sort((a,b) => {
      return a[props.sortOn] > b[props.sortOn];
    });
    usersDivs = sorted.filter(function(u){
      return !props.firstNameFilter || 
      (props.firstNameFilter && 
      u.first_name.indexOf(props.firstNameFilter) > -1);
    })
    usersDivs = usersDivs.map(function(u){
      return <div>{u.first_name} {u.last_name}</div>
    })
    console.log(usersDivs)
  }
  return (
      <div>
        <h1>Users</h1>
       {usersDivs}
      </div>
  );
}
function mapStateToProps(state){
  return{
    users:state.users,
    firstNameFilter:state.searchText,
    sortOn:state.currentUserSort
  }
}

export default connect(mapStateToProps)(Users)