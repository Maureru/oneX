import { useEffect } from 'react'
import { links } from '../data/data';

import './App.css'

function App() {

  const ids = "onexbet"

  useEffect(() => {
      const timeoutId = setTimeout(() => {
          // Replace 'https://example.com' with the external link you want to redirect to
          /* if (!links[ids]) {
              console.log('ERROR');
          } else {
              console.log('DEF');
              window.location.replace(links[ids].link);
          } */
          window.location.replace(links[ids].link);
      }, 500);

      // Clear the timeout when the component is unmounted
      return () => clearTimeout(timeoutId);
  }, []);

/*     if (!links[ids])
      return (
          <div>
              <h3>Invalid Link ....</h3>
          </div>
      );
*/
  return (
    <div>
      <h1>OneX Basketball</h1>
      <h3>Please Wait!</h3>
      <h2>Did You Know?</h2>
      <p>Players never could advance the ball. Instead, each player had to throw it from wherever he caught it. The first team credited with advancing the ball by dribbling it played at Yale in 1897 and the official allowance for the dribble, just one per possession at first, were adopted four years later.</p>
      <p>Shouldering, holding, pushing, tripping, or otherwise striking an opponent was never allowed. However, such offenses were never considered fouls until 1910, with the advent of a rule disqualifying a player for committing four of them. That total was raised to five in 1946, in the inaugural rules of the Basketball Association of America (the original name of the National Basketball Association), and to six the next year.</p>
      <h2>NOTABLE GOATS: Michael Jordan, Lebron James, Kobe Bryant, Stephen Curry</h2>
    </div>
  )
}

export default App
