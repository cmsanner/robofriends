import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        //http://jsonplaceholder.typicode.com/users
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => { return response.json(); })
            .then(users => {this.setState({robots: users}) })
    }

    //when you create your own functions you need to use the arrow functions
    //onSearchchange (event)
    onSearchChange = (event) => {
        // console.log(event.target.value);
        this.setState({searchfield: event.target.value});
    }

    render(){
        //destructure this.state.robots, this.state.searchfield
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
           return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()) 
        })
        //descructure robots.length === 0, where 0 stands for false, 
        //    so you can change this to true with !robots.length
       return robots.length === 0?
            <h1>Loading ...</h1> :
            (
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        
    }
}

export default App;