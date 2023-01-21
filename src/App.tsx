import reactLogo from './assets/react.svg'
import './App.css'
import { Main } from './pages/home'
import { HeaderNavbar } from './components/Navbar'

function App() {

  return (
    <div>
    <HeaderNavbar/>
    <Main />
    </div>
  )
}

export default App