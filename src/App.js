import React,{ useEffect, Fragment } from 'react';
import Searchbar from './components/layout/Searchbar';
import Logs from './components/logs/Logs';
import Addbtn from './components/layout/Addbtn'
import Techlistmodal from './components/techs/Techlistmodal'
import Addlogmodal from './components/logs/Addlogmodal'
import Editlogmodal from './components/logs/Editlogmodal';
import Addtechmocal from './components/techs/Addtechmodal'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';


const App = () => {
  useEffect(() => {
    // init materialize js
    M.AutoInit();
  });
  return (
    <Fragment>
      <Searchbar />
      <div className='container'>
        <Addbtn />
        <Addlogmodal />
        <Editlogmodal />
        <Addtechmocal />
        <Techlistmodal />
        <Logs />
      </div>
    </Fragment>
  )
}

export default App;
