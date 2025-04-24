import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../components/Context/ShopContext.jsx';
import dropdown_icon from '../components/Assets/dropdown_icon.png';
import Items from '../components/Items/Items.jsx';


const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext); // Default to empty array to prevent errors

  // Optional console for debugging data
  console.log("All Products from Context:", all_product);
  console.log("Category from Props:", props.category);

  return (
    <div className='shop-category'>
      {props.banner && (
        <img className='shopcategory-banner' src={props.banner} alt="Shop Category Banner" />
      )}

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Sort Icon" />
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else {
            return null;
          }
        })}
      </div>

      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;

