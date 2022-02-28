import React,{Fragment,useEffect} from 'react';
import './App.css';
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddlogModal from './components/logs/AddlogModal';
import EditlogModal from './components/logs/EditlogModal';
import AddtechModal from './components/techs/AddtechModal';
import TechlistModal from './components/techs/TechlistModal';
import {Provider} from 'react-redux';
import store from './store';

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App=()=> {
  useEffect(()=>{
    // Init Materialize JS 
    M.AutoInit();
  });
  return (
    <Provider store={store}> 
    <Fragment>
      <SearchBar/>
      <div className="container">
        <AddBtn/>
        <AddlogModal/>
        <EditlogModal/>
        <AddtechModal/>
        <TechlistModal/>
        <Logs/>
      </div>
    </Fragment>
    </Provider>
  );
}

export default App;
