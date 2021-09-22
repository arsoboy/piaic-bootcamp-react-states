import React, {useState} from 'react';
import './App.css';
import ThemeSelector from './theme-selector';

function App() {

  let [theme, setTheme] = useState(false);  // Light=true, Dark=false
  let themeTitles = ["Light", "Dark"]

  return (
    <div className={ theme ? 'App theme-light' : 'App'  }>
      <header className="App-header">
        <h1 style={{textAlign:"center",textDecoration:"underline"}}>
          REACT 
          <br /><em style={{fontSize:"70%"}}>Using State Hook</em>
        </h1>
        <ThemeSelector title={themeTitles[Number(theme)]} theme={theme} setTheme={setTheme} />
      </header>
    </div>
  );
}

export default App;
