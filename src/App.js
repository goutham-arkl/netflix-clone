import React from 'react'
import {Action,Originals,Comedy,Horror, Romance, Documentries} from './urls'
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPost url={Originals} title='Netflix Originals'/>
     <RowPost url={Action} title='Action' isSmall/>
     <RowPost url={Comedy} title='Comedy' isSmall/>
     <RowPost url={Horror} title='Horror' isSmall/>
     <RowPost url={Romance} title='Romance' isSmall/>
     <RowPost url={Documentries} title='Documentry' isSmall/>
    </div>
  );
}

export default App;
