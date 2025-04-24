// import React from 'react'
// import Hero from '../components/Hero/Hero'
// import Popular from '../components/Popular/Popular'
// import Offers from '../components/Offers/Offers'
// import NewCollections from '../components/NewCollections/NewCollections'
// import NewsLetter from '../components/NewsLetter/NewsLetter'

// function Shop() {
//   return (
//     <div>
//       <Hero/>
//       <Popular/>
//       <Offers/>
//       <NewCollections/>
//       <NewsLetter/>
//       <Context/>

//     </div>
//   )
// }

// export default Shop

import React from 'react';
import Hero from '../components/Hero/Hero';
import Popular from '../components/Popular/Popular';
import Offers from '../components/Offers/Offers';
import NewCollections from '../components/NewCollections/NewCollections';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import ShopContextProvider from "../components/Context/ShopContext.jsx";

function Shop() {
  return (
    <ShopContextProvider>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </ShopContextProvider>
  );
}

export default Shop;
