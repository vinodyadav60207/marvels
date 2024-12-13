// import React from 'react'
// // import Cards from './Mobile'
// import Mobile from './Mobile'
// import Printer from './Printer'
// import Tablets from './Tablets'
// import Tv from './Tv'
// import Laptop from './Laptop'


// export default function Header(props) {
//   return (
//     <div className='container1'>
//       <div className='mobile'>
//         <Mobile/>
//         </div>
//         <div className='tv'>
//         <Tv/>
//         </div>
//         <div className='laptop'>
//         <Laptop/>
//         </div>
//         <div className='tablets'>
//         <Tablets/>
//         </div>
//         <div className='printer'>
//         <Printer/>
//         </div>
//     </div>
//   )
// }






// import React from 'react'
// import { Link } from "react-router-dom";


// const Header = () => {
//   return (
  
//     <div className='conatainer d-flex'>
//      <img src="https://lms.achieversit.com/assets/images/logo.png" alt="logo"></img>
//      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//               <li class="nav-item">
//                 <Link class="nav-link active" aria-current="page" to="/">
//                   Home
//                 </Link>
//                 <li class="nav-item">
//                 <Link class="nav-link active" aria-current="page" to="/cart">
//                   Cart
//                 </Link>
//               </li>
//               </li>
//       </ul>

//       </div>
    
    
    
//   )
// }

// export default Header


import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser ,faShoppingCart} from "@fortawesome/free-solid-svg-icons";




const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src="https://lms.achieversit.com/assets/images/logo.png" alt="logo"></img>
        
          <button className="navbar-toggler"type="button">
            
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2  ms-5 mb-lg-0 ">
              <li className="nav-item"> 
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item"> 
                <Link className="nav-link active" aria-current="page" to="/Shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/cart">
                  Cart
                </Link>
              </li>
              <Link to="/profile" className="nav-link">
                <FontAwesomeIcon icon={faUser} size="lg" />
              </Link>
              
              <Link to="/shopping" className="nav-link">
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              </Link>
              

            </ul>

           
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;



// import React from 'react';

// const Header = () => {
//   return (
//     <header>
//       <h1>Welcome to the Image Carousel</h1>
//     </header>
//   );
// };

// export default Header;
