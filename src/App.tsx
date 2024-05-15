import './App.css'
import RandomNumberLink from './Components/RandomNumber.tsx';

function App() {

  return (
      <>
          <div className="App">
              <header className="App-header">
                  <h1>Random Number Generator</h1>
                  <RandomNumberLink/>
              </header>
          </div>
      </>
  )
}

export default App
