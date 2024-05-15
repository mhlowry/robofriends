import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import React, { useEffect, useState} from "react";
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";

function App() {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [count, setCount] = useState(0); 

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
        }, []);

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
        console.log(event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? 
        <h1>Loading</h1> :
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <button onClick={()=>setCount(count+1)}>Click me! {count}</button>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
        </div>
        
}   

export default App;