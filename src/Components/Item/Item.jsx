import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './Item.module.css';
import ItemImgs from './ItemImgs';

function Item() {
  const { products } = useSelector(state => state.persistedProducts);

  const params = useParams();

  const selectedProduct = products.find(p => p.id === +params.id);

  console.log(selectedProduct);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0 });
  });

  return (
    <article className={styles.product_item}>
      <ItemImgs {...selectedProduct} />
    </article>
  );
}

export default Item;
