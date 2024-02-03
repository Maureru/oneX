import { links } from '../data/data'
import './App.css'

function App() {
  return (
    <div className='txt'>
      <h1>OneX Basketball</h1>
      <h3>Register to 1xBet Here</h3>
      <a className='btn' href={links.onexx.link}>Register Now</a>
      <h4>PROMO CODE: <span>TAMBAYENGINEER</span></h4>
    </div>
  )
}

export default App
