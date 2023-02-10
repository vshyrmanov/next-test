import React from 'react';
import styles from '../../../styles/products.module.scss';
import Card from "./Card";
import { products } from '../../../data/data';
import Breadcrumb from "../breadcrumb/Breadcrumb";

const ProductsPage = () => {

	return (
		<>
			<div className={styles.products}>
				{products.map((product, productIndex) =>
					<Card key={productIndex} product={product}/>
				)}
			</div>
		</>

	);
};

export default ProductsPage;