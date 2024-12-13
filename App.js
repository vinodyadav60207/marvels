// import './Products/App.css';
// import Navbar from './Products/navbar';
// import { Route,Routes } from 'react-router-dom';
// import data from './Products/data';
// import Mobile from './Products/Mobile';
// import Tv from './Products/Tv';
// import Laptop from './Products/Laptop';
// import Printer from './Products/Printer';
// import Tablets from './Products/Tablets';
// import Home from './Home';
// import AllProducts from './Products/AllProducts';
// import ProductDetail from './Products/ProductDetail';


// function App() {

//   return (
//     <>
//     <Navbar />
//     <Routes>
   
//     <Route path='/' element={<Home/>}/>
//     <Route path='/Mobile' element={<Mobile/>}/>
//     <Route path='/Tv' element={<Tv/>}/>
//     <Route path='/Laptop' element={<Laptop/>}/>
//     <Route path='/Tablets' element={<Tablets/>}/>
//     <Route path='/Printer' element={<Printer/>}/>
//     <Route path='/all-products' element={<AllProducts />} />
//     <Route path='/products/:id' element={<ProductDetail/>} />
    
//     </Routes>
    
//     </>
//   );
// }

// export default App;

    
      
   



// export default Appss;


// import React from 'react';
// import Home from './Home';
// import './App.css';
// import Login from './login';
// import Signup from './signup';
// import { Routes,Route, Router} from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

// function App() {
//   return (

    
    
//     <div className='App '>
//       <h1>welcome to react</h1>
      

   
//      <Login /> 
//    {/* <Signup/>  */} 
       
//     <Routes> 

//     <Route path='/signup' element={<Signup/>}/> 
       
//          <Route path='/login' element={<Login/>}/> 
//         <Route path='/' element={<Home/>}/> 
//         {/* <Route path='/'element={<home/>}/> */}
       

//      </Routes>  
     
     
//      </div>
   
   

//   );
// }

// export default App;

// import React, { Component } from 'react'
// import { useState } from 'react'
// import  './App.css';


// const ThemeToggle = () => {
//     const[DarkTheme,setDarkTheme]=useState();
//     const ToggleTheme=()=> {setDarkTheme(!DarkTheme);}
//     return (
//       <div className={DarkTheme? 'dark-Theme':'light-Theme'}>

//         <button onClick={ToggleTheme}>{DarkTheme?'switch to light theme':'switch to dark theme'}</button>
//         <h1>{DarkTheme?'DarkTheme':'lightTheme'}</h1>
//         {/* <p>This is ToggleTheme</p> */}
        
//       </div>

//     )
//   }
 

// export default ThemeToggle






// import React, { useEffect, useState } from 'react';
// import './App.css'

// function App() {
//   const [Data, setData] = useState(null);

//   useEffect(() => {
//     // Fetch data from the API
//     fetch('https://fakestoreapi.com/products')
//       .then((response) => response.json())
//       .then((data) => setData(data)) // Set the fetched data
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []); // Run only once when component mounts

//   return (
//     <div>
//       {Data ? (
//         <div className='products'>

//           {Data.map((item) => (

//             <div key={item.id} >
//               <img src={item.image} alt={item.title} />
//               {/* <h5>Id: {item.id}</h5> */}
//               <h5>Price: ${item.price}</h5>
//               {/* <h6>Title: {item.title}</h6> */}
//               <p>Category: {item.category}</p>
             
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default App;






// import React, { useState } from 'react'



// const App = () => {
//     const[count,setcount] = useState(0)


//     const handleincrease = () =>{
//         setcount(count+1)

//     };
//     const handledecrease = () =>{
//         setcount(count -1)
//     };
//     const handlereset =()=>{
//         setcount(0)
//     };

//   return (
//     <>
//     <h1>Count: {count}</h1>
//       <button className='btn btn-success' onClick={handleincrease}>+</button>
//       <button className='btn btn-danger'onClick={handledecrease}>-</button>
//       <button className='btn btn-primary'onClick={handlereset}>reset</button>

//     </>
//   )
// }

// export default App




// import React, { useEffect, useState } from 'react';

// const App = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // Fetch data from the API
//     fetch('https://fakestoreapi.com/products')
//       .then((response) => response.json())
//       .then((data) => setData(data)) // Set the fetched data
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div>
//       {data ? (
//         <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid black' }}>
//           <thead>
//             <tr>
//               <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
//               <th style={{ border: '1px solid black', padding: '8px' }}>Title</th>
//               <th style={{ border: '1px solid black', padding: '8px' }}>Price</th>
//               <th style={{ border: '1px solid black', padding: '8px' }}>Category</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item) => (
//               <tr key={item.id}>
//                 <td style={{ border: '1px solid black', padding: '8px' }}>{item.id}</td>
//                 <td style={{ border: '1px solid black', padding: '8px' }}>{item.title}</td>
//                 <td style={{ border: '1px solid black', padding: '8px' }}>${item.price}</td>
//                 <td style={{ border: '1px solid black', padding: '8px' }}>{item.category}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default App;


// import React, { useReducer } from 'react'

// const useReduce = () => {
//   const maxCount=1;
//   const minCount=0;
//   const reducer = (currentstate,action)=>{
//     switch(action){
//       case "INCREMENT":
//         return currentstate+1;
//       case "DECREMENT":
//         return currentstate-1;  
//     }
//   }
//     const[counter,dispatch]=useReducer(reducer,0);

//   return (
//     <>
//     <h1>Count: {counter}</h1>
//     <button className='btn btn-success' onClick={()=>dispatch("INCREMENT")}> &gt; </button>

//     <button className='btn btn-success' onClick={()=>dispatch("INCREMENT")}>INCREMENT</button>
//     <button className='btn btn-success' onClick={()=>dispatch("DECREMENT")}>DECREMENT</button>
//     <button className='btn btn-success' onClick={()=>dispatch("DECREMENT")}> &lt; </button>

//     {counter === maxCount && <p>Reached the maximum count. Page is ended.</p>}
//     {counter === minCount && <p>Reached the minimum count. Page is ended.</p>}



      
//     </>
//   )
// }

// export default useReduce
    


// import React from 'react'
// import userContext from './CompA';
// import CompA from './CompA'

//  function App() {
//   return (
    
//       <CompA />
    
//   )
// }
// export default App

 // App.js
// import React from 'react';
// import UseRef from "./UseRef";

// function App() {
//   return (
//     <>
//       <UseRef />
//     </>
//   );
// }

// export default App;



import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Dumm from './Dumm.jsx';
import Apps from './Apps.css';
import Discount from './Discount';
import ProductDetails from './ProductDetails';



function App() {
  return (
    <>
       <Header /> 
       <ProductList />
       <Dumm />
       <Discount />
       <ProductDetails />
     
     
    </>
  );
}

export default App;


