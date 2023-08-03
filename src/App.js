import {Nav, Bio, Gallery} from './components'
import './App.css'

const App = () => {
  return (// JSX (Extended Javascript)
    <>
      <Nav />
      <div className="container">
        <Bio />
        <Gallery />
      </div>
    </>

  );
}

export default App;
