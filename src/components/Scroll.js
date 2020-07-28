import React from 'react';

const Scroll = (props) => {
    // console.log(props.children); //Scroll wrapped CardList, which is the child - see App.js
    return  (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '500px'}}>
         {props.children}
        </div>
    )
}
        
export default Scroll;