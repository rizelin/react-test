import React,{ useState } from 'react'; 

function App() {
  console.log('lender')
  const [number, setNumber] = useState(1)
  const dobule = () => {
    setNumber((prevState) => prevState * 2 ); 
    setNumber((prevState) => prevState * 2 ); 
  };

  // const pringHello = () => {
  //   console.log('Hello')
  // }
  // 색션2-10

  return (
    <React.StrictMode>
    <div>
      {number} 
    </div>
    <button className="btn btn-primary" onClick={dobule}>submit</button>
    </React.StrictMode>
  )
}

export default App;