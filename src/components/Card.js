import React from 'react';

// styles from tachyons
//tc: text center, bg: background, dib, br: border, pa: padding, ma: margins, grow animation, shadow: shadow

// 2) destructure props to the values that were passed in    
   const Card = ({name, email, id}) =>{
     return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt='robots'></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

 //1) destructure the props; props.name, props.email, props.id ==> now just use name, email, id
// const Card = (props) =>{
//     const {name, email, id} = props;
//     return(
//         <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <img src={`https://robohash.org/${id}?size=200x200`} alt='robots'></img>
//             <div>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         </div>
//     )
// }

 //Original
//  const Card = (props) =>{
//     return(
//         <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <img src={`https://robohash.org/${props.id}?size=200x200`} alt='robots'></img>
//             <div>
//                 <h2>{props.name}</h2>
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     )
// }



export default Card;