import { links } from '../data/data'
import './App.css'

function App() {
  return (
    <div className='txt'>
      <h1>OneX Basketball</h1>
      <h2>Register to 1xBet Here</h2>
      <a className='btn' href={links.onex.link}>Register Now</a>
      <h4>PROMO CODE: <span>TAMBAYENGINEER</span></h4>
    </div>
  )
}

export default App
