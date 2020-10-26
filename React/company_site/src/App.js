import Header from './components/custom_header.jsx';
import './App.css';

import Main from './components/Main'


function App() {
  return (
    
    <div className="App">

    <div className="Company_name"> <h1>Company Name </h1> <br/> subheading </div>
    <div className="Header">
    <Header className="Header"/>
    </div>
      <div className="App-Body">
        <Main/> 
     </div>
    </div>
  );
}

export default App;
