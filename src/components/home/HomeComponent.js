import React from 'react';
import Image from "next/image";
import {img} from "../../../assets";
import styles from '../../../styles/home.module.scss';
import HomeButton from "../buttons/HomeButton";
import { MdProductionQuantityLimits } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import ProductsPage from "../products/ProductsPage";



const HomeComponent = () => {
	return (
		<div className={styles.home}>
				<section className={styles.section1}>
					<div className={styles.title}>
						<h1>Гидрошпонки деформационных и рабочих швов</h1>
						<h3>Резинотехнические шнуры ТМКЩ, трубки МБС, соэкструзия</h3>
						<div className={styles.btns}>
							<HomeButton type="light" link="/contacts">
								Позвонить нам
								<IoIosArrowForward />
							</HomeButton>
						</div>
					</div>
					<div className={styles.imgs}>
						<Image src={img.home.homeHeader3} alt="home header" width={400} />
					</div>
				</section>
				<section className={styles.section2}>
					<ProductsPage />
				</section>
		</div>
	);
};

export default HomeComponent;