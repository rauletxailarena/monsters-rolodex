import { Component } from 'react';
import './card.style.css'

// class Card extends Component {
//     render() {
//         const { id, name, email } = this.props.monster;
//         return (
//             <div className='card-container' key={id}>
//                 <img 
//                     alt={`monster &{name}`}
//                     src={`https://robohash.org/${id}/?set=set2&size=180x180`}
//                 />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         )
//     }
// }

const Card = (props) => {
    return (
        <div className='card-container' key={props.monster.id}>
            <img 
                alt={`monster &{name}`}
                src={`https://robohash.org/${props.monster.id}/?set=set2&size=180x180`}
            />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}

export default Card;