// import {createStore} from 'redux';
// import state from "./state";
// import reducers from "./reducers";

// var store = createStore(reducers,state);

// export default store;



//we have decided that we are using redux so we have to install and  import it
import {createStore} from 'redux';
//we need our data to put in the database
import state from "./state";
//just take this reducers thing for granted right now
import reducers from "./reducers";
const store = createStore(reducers,state);

export default store;