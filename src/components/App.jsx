
import NavBar from './NavBar/NavBar'
import './App.css'
import Banner from './Banner/Banner'
import RowPost from './RowPost/RowPost'
import { originals,action } from '../urls'

function App() {


  return (
    <div className='app'>
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Actions' isSmall/>
    </div>

  )
}

export default App
