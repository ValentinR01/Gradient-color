import Header from './Header';
import {useState} from 'react';
import Parameters from './Parameters';
 

function App() {
  const [gradient, setGradient] = useState(
    {
      firstColor: '#00000',
      firstBreakpoint: 0,
      secondColor: '#00000',
      secondBreakpoint: 0,
      thirdColor: '#00000',
      thirdBreakpoint: 0,
      rotate: 0
    }
  )
  return (
    <>
    <Header />
    <Parameters gradient={gradient} setGradient={setGradient}/>
    </>
  );
}

export default App;
