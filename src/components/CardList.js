import React, {Fragment} from 'react';
import Card from './Card';

//2) because this is javascript, anything we put in the curly brackets is javaScript
//   so we can move the cardArray inside the Fragment 
const CardList = ({robots}) => {
  return (
    <Fragment>
        {robots.map( (user,i) =>
            {
                return ( <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />)
            }
        )}
    </Fragment>
  );
}

export default CardList;

//1) add a loop to get all the robots
// when using a loop, need to provide a key for each item so you don't get the warning about 
// a unique key
// const CardList = ({robots}) => {
//     const cardArray = robots.map( (user,i) => {
//         return ( <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />)
//     })
//     return (
//       <Fragment>
//           {cardArray}
//       </Fragment>
//     );
//   }
  


//Original
// const CardList = ({robots}) => {
//     return (
//       <Fragment>
//           <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
//           <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
//           <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
//           <Card id={robots[3].id} name={robots[3].name} email={robots[3].email}/>
//       </Fragment>
//     );
//   }