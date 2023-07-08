import image from './shopping.jpg';
import imageTwo from './man.jpg';
import './App.css';
import GroceryList from './GroceryList'



function App() {


  return (
    <div className="App">
    <div className='Container'>
    <img src={image} alt="shopping" width="250px"/>
    </div>
    <div className='Container'>
    <h1>Grocery List</h1>
    </div>
    <GroceryList/>
    <img src={imageTwo} width="250px" alt="man"/>
    </div>
  );
}

export default App;
