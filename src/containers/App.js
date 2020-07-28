import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import { setSearchField } from '../actions';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

//subscribe - see reducers.js for fields
const mapStateToProps = state => {
    return{
        searchField: state.searchField
    }
}
// gets dispatched into the reducer
const mapDispatchToProps = (dispatch) => {
   return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
   }
}

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: []
        }
    }

    componentDidMount(){
    // console.log('store: ',this.props.store.getState()); <-- this only worked when we passed store to App on index.js
    console.log('store', this.state)
    //http://jsonplaceholder.typicode.com/users
    //1) desctructure
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => { return response.json(); })
    //         .then(users => {this.setState({robots: users}) })

     fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({robots: users}) })
    }

    //  no longer need this, it is coming from reducers.js
    // //when you create your own functions you need to use the arrow functions
    // //onSearchchange (event)
    // onSearchChange = (event) => {
    //     // console.log(event.target.value);
    //     this.setState({searchfield: event.target.value});
    // }

    render(){
        //destructure this.state.robots, this.state.searchfield
        const {robots} = this.state;
        const {searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
           return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()) 
        })
        //descructure robots.length === 0, where 0 stands for false, 
        //    so you can change this to true with !robots.length
       return robots.length === 0?
            <h1>Loading ...</h1> :
            (
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    {/* moved onSearchChange to mapDispatchToProps, and defined as a const
                        but could have used it as this.props.onSearchChange */}
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);