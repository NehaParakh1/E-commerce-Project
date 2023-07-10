import { useContext } from "react";

import classes from "./ProductDetails.module.css";
import ProductContext from "../Store/ProductContext";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const productCtx = useContext(ProductContext);
  const params=useParams();
console.log(params)
  return (
    <div className={classes.product}>
      <img src={productCtx.image} alt={productCtx.title} />
      <div className={classes.detail}>
        <h3>{productCtx.title}</h3>
        <h2>${productCtx.price.toFixed(2)}</h2>
        <span className={classes.rating}>
          Rating <span>{productCtx.rating}&#9733;</span>
        </span>
        <p>{productCtx.detail}</p>
      </div>
    </div>
  );
};

export default ProductDetails;