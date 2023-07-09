import { useState } from 'react';
import check from './check.jpg';
import { useEffect } from 'react';
import uuid from 'react-uuid';
import { AiFillDelete } from "react-icons/ai"

const GroceryList = () => {

    const [userInput, setUserInput] = useState('')
    const [groceryList, setGroceryList] = useState(localStorage.groceryList ? JSON.parse(localStorage.groceryList) : [])
    

    useEffect(() => {
        localStorage.setItem("groceryList", JSON.stringify(groceryList))
    }, [groceryList])

    const addItem = (event) => {
        if (userInput === '') {
            alert("Please enter an item!")
        }

        else {
            const newList = {
                title: userInput,
                id: uuid()
            }
            setGroceryList([newList, ...groceryList])
            setUserInput('')
        }
    }

    const crossedWord = (event) => {
        event.preventDefault();
        const li = event.target;
        li.classList.toggle('crossed');
    }

    // const crossedWord = (id) => {
    //    const button = document.getElementById(id)
    //    button.classList.toggle('crossed');
    // }

    const deleteItems = () => {
        setGroceryList([])
    }

    const deleteItem = (id) => {
        let items =JSON.parse(localStorage.getItem("groceryList"));
        items = items.filter((item) => item.id !== id);
        setGroceryList(items)
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
    }

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
                {groceryList.map((item) => (
                    <div className='list' key={item.id}>
                    <li role='button' onClick={crossedWord}><img src={check} width="30px" alt="cart"/>{item.title}</li>
                    {/* <button id={item.id} onClick={() => crossedWord(item.id)}><img src={check} width="30px" alt="cart"/>{item.title}</button> */}
                    <AiFillDelete onClick={() => deleteItem(item.id)}></AiFillDelete>
                    </div>
                    
                ))}
            </ul>
            <div className="Container">
            <button onClick={deleteItems} className="Delete">Delete</button>
            </div>
            </form>
            </div>
        )
    }

export default GroceryList;