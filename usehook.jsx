// import React from 'react'

// const usehook = () => {
//     const [Data, setData] = useState(null);

//     useEffect(() => {
//       // Fetch data from the API
//       fetch('https://fakestoreapi.com/products')
//         .then((response) => response.json())
//         .then((data) => setData(data)) // Set the fetched data
//         .catch((error) => console.error('Error fetching data:', error));
//     }, []);
//   return (
//     <div>
//        {Data ? (
//         <div className='products'>

//           {Data.map((item) => (

//             <div key={item.id} >
//               {/* <img src={item.image} alt={item.title} /> */}
//               <h5>Id: {item.id}</h5>
//               <h5>Price: ${item.price}</h5>
//               <h5>Title: {item.title}</h5>
//               <p>Category: {item.category}</p>
//               <hr />
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}

//     </div>
//   )
// }

// export default usehook
