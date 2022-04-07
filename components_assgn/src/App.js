import logo from './logo.svg';
import './App.css';

function App() {
  const type=["Android","Blackberry","iPhone","Windows Phone"];
  const comapny=["Samsung","HTC","Micromax","Apple"];
  return (
    <div className="App">
      <div>
      <b><h2>Mobile Operating System</h2></b>
      <ul>
        {type.map((el)=>{
            return <li>{el}</li>
        })}
      </ul>
      </div>
      <div>
        <b><h2>Mobile Manufactures</h2></b>
        <ul>
          {
            comapny.map((el)=>{
              return <li>{el}</li>
            })
          }
        </ul>
      </div>
      
    </div>
  );
}

export default App;
