import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';



const Dumm = () => {
    return (
        <div className='icon '>
            <div className='fTruck'>
            <FontAwesomeIcon icon={faTruck} size="lg" />
            <h4>Free shipping</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            </div>
        <div className='fcredit'>
            <FontAwesomeIcon icon={faCreditCard} size="lg" />
            <h4>safe payment</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            </div>
        <div className='fshield'>
             <FontAwesomeIcon icon={faShieldHalved} size="lg" />
            <h4>secure payment</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            </div>
        <div className='fhead'>
            <FontAwesomeIcon icon={faHeadphones} size="lg" />
            <h4>Back Guarantee</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    );
};

export default Dumm;
