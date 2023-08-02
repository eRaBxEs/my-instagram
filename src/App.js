import {Nav, Bio, Gallery} from './components'
import './App.css'

const App = () => {
  return (// JSX (Extended Javascript)
    <>
      <Nav />
      <div className="App">
        <Bio />
      </div>
      <Gallery />
    </>

  );
}

export default App;
