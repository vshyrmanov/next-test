import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from '../../../styles/products.module.scss';
import { IoIosArrowForward } from 'react-icons/io';

import HomeButton from "../buttons/HomeButton";

const Card = ({ product }) => {
	return (
			<div className={styles.card}>
				<div className={styles.img}>
					<Image src={product.img} alt={product.title}/>
				</div>
				<div className={styles.textContent}>
					<h3>{product.title}</h3>
					<p>{product.text}</p>
				</div>
				<div className={styles.btn}>
					<HomeButton type="dark" link={`products/${product.link}`}>
						Подробней
						<IoIosArrowForward />
					</HomeButton>
				</div>
			</div>
	);
};

export default Card;