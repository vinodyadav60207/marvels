import React from 'react';
import productImg01 from './product01.jpg';
import productImg02 from './product02.jpg';
import productImg08 from './product08.jpg';
import productImg09 from './product09.jpg';
import phone03 from './phone03.jpg';
import phone04 from './phone04.jpg';




export const discountProducts = [
    {
      id: "01",
      productName: "Stone and Beam Westview",
      imgUrl: productImg01,
      category: "sofa",
      price: 193,
      discount: 30,
      shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      reviews: [
        {
          rating: 4.7,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.5,
    },
    {
      id: "02",
      productName: "Rivet Bigelow Modern",
      imgUrl: productImg02,
      category: "sofa",
      price: 253,
      discount: 20,
      shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.7,
    },
    {
      id: "08",
      productName: "Baltsar Chair",
      imgUrl: productImg08,
      category: "chair",
      price: 89,
      discount: 15,
      shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      reviews: [
        {
          rating: 4.6,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.7,
    },
    {
      id: "09",
      productName: "Helmar Chair",
      imgUrl: productImg09,
      category: "chair",
      price: 112,
      discount: 35,
      shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      reviews: [
        {
          rating: 4.6,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.7,
    },
    {
      id: "12",
      productName: "Realme 8",
      imgUrl: phone03,
      category: "mobile",
      price: 599,
      discount: 10,
      shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
    {
      id: "13",
      productName: "One Plus Nord",
      imgUrl: phone04,
      category: "mobile",
      price: 799,
      discount: 5,
      shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
  ];
  
  export default discountProducts;
  