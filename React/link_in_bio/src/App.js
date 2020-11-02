import './App.css';
import LinkedIn from "./linkedin-logo.png"
import GitHub from "./github-logo.png"

function App() {
  return (
    <div className="App">
    
   

    <h2>By.Connor_Hutchy</h2>

    <a 
    className="Link" href="https://www.linkedin.com/in/connor-hutchinson/" >
      <img className="Image" src={LinkedIn} alt="LinkedIn"></img>
    </a>
    <br/>
    <a 
    className="Link" id="Git" href="https://github.com/connorhutchy" >
      <img className="Image" src={GitHub} alt="Personal Github"></img>
      <h3>Personal</h3>
    </a>
    <br/>
    <a 
    className="Link" id="Git" href="https://github.com/s3544152" >
      <img className="Image" src={GitHub} alt="Student Github"></img>
      <h3>Student</h3>
    </a>
    
    </div>
  );
}

export default App;
