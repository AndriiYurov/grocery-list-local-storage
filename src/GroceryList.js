
import { useState } from 'react';
import check from './check.jpg';
import { useEffect } from 'react';

const GroceryList = () => {

    const [userInput, setUserInput] = useState('')
    const [groceryList, setGroceryList] = useState(localStorage.groceryList ? JSON.parse(localStorage.groceryList) : [])

    useEffect(() => {
        localStorage.setItem("groceryList", JSON.stringify(groceryList))
    }, [groceryList])

    const addItem = () => {
        if (userInput === '') {
            alert("Please enter an item!")
        }

        else {
            setGroceryList([userInput, ...groceryList])
            setUserInput('')
        }
    }


    const crossedWord = (event) => {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    const deleteItem = () => {
        setGroceryList([])
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
    }
/////
   
        return(
            <div>
            <form onSubmit={onFormSubmit}>
            <div className="Container">
                <input type='text' 
                placeholder='What do you want to buy?'
                onChange={(e) => setUserInput(e.target.value)}
                value={userInput}/>
            </div>
            <div className="Container">
            <button onClick={() => addItem()} className="Add">Add</button>
            </div>
            <ul>
                {groceryList.map((item, index) => (
                    <li onClick={crossedWord} key={index}><img src={check} width="30px" alt="cart"/>{item}</li>
                ))}
            </ul>
            <div className="Container">
            <button onClick={deleteItem} className="Delete">Delete</button>
            </div>
            </form>
            </div>
        )
    }


export default GroceryList;