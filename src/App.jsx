import { links } from '../data/data'
import './App.css'

function App() {
  return (
    <div className='txt'>
      <h1>OneX Philippines</h1>
      <h3>Register to 1xBet Here</h3>
      <a className='btn' href={links.onexx.link}>Register Now</a>
      <h4>PROMO CODE: <span>TAMBAYENGINEER</span></h4>
      <h5 style={{
        textTransform: "uppercase"
      }}>For Guide and Assistance. Join Our GC</h5>
      <a style={{
        padding: "5px 10px",
        border: "2px solid #535bf2",
        borderRadius: "5px"
      }} href="https://telegram.me/+Cao5jMKGTINiOGVl">Player's VIP Group</a>
      <h3 className='macoo'>@Macoo - Official Agent</h3>
    </div>
  )
}

export default App
