import Router from "./Routes/Router";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from "react-redux";

import store from "./redux/store";


function App() {
  
  return (
 
    <Provider store={store}>
       <div className="App">
   <Router/>
    </div>
    </Provider>
  

  );
}

export default App;
