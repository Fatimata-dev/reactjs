import React from 'react';
// Le CSS s'applique pour toute l'application
import './Card.css';
import styles from './Card.module.css';

function Card(props) {
    console.log(styles);
    return (
        <React.Fragment>
            <div className={`${styles.card} mx-auto`}>
                <p>Card !</p>
                <p className='test'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque voluptatum in exercitationem iure aspernatur deleniti hic quod consequuntur dolore dicta obcaecati dolores repudiandae cupiditate labore ut esse culpa, nam rerum?</p>
                <button className="btn btn-success">Bootstrap</button>
            </div>
        </React.Fragment>
    );
}
export default Card;