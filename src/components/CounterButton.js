import React from 'react';



function CounterButton(props) {
  return (
      <div>
        <button onClick={
          ()=>{
            if(props.increase){
              props.increase();
            }
          }
        }>Increase Counter By One</button>
        <button onClick={
          ()=>{
            if(props.decrease){
              props.decrease();
            }
          }
        }>Decrease Counter By One</button>
      </div>
  );
}  

// function mapDispatchToProps(dispatch){
//   return{
//     increase:function(){
//       var action = increaseCounter();
//       dispatch(action);
//     },
//     decrease:function(){
//       var action = decreaseCounter();
//       dispatch(action);
//     }
//   }
// }

export default CounterButton;

