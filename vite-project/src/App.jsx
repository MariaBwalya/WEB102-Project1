import './App.css';
import Card from './components/Card';
import zmImg from "./assets/zmImg.jpg"; // import your image idk mistake


const App = () => {
  return (
    <div className='App'>
      <img src= {zmImg}/>
      <h1>DISCOVER ZAMBIA'S RICH CULTURE 🇿🇲</h1>
      <Card />

    </div>
  )
}

export default App