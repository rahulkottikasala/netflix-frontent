import React from 'react';
import {Action, Originals, Romance, Comedy, Horror} from './Urls'
import './App.css';
import NavBar from './component/NavBar/NavBar';
import Banner from './component/Banner/Banner';
import RowPost from './component/RowPost/RowPost';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={Originals} title={'Netflix Originals'} isBig />
     <RowPost url={Action} title={'Action Movies'} />
     <RowPost url={Romance} title={'Romance Movies'} />
     <RowPost url={Comedy} title={'Comedy Movies'} />
     <RowPost url={Horror} title={'Horror Movies'} />
    </div>
  );
}

export default App;
