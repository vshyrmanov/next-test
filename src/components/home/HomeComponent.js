import React from 'react';
import Image from "next/image";
import {img} from "../../../assets";
import styles from '../../../styles/home.module.scss';
import HomeButton from "../buttons/HomeButton";
import { MdProductionQuantityLimits } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';



const HomeComponent = () => {
	return (
		<div className={styles.home}>
				<section className={styles.section1}>
					<div className={styles.title}>
						<h1>Гидрошпонки деформационных и рабочих швов</h1>
						<h3>Резинотехнические шнуры ТМКЩ, трубки МБС, соэкструзия</h3>
						<div className={styles.btns}>
							<HomeButton type="light" link="/products">
								Продукция
								<MdProductionQuantityLimits />
							</HomeButton>
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
					<div className={styles.title}>
						<h2>Изготовление уплотнителей</h2>
						<p>
							производится на автоматической линии методом экструдирования.
							<br/>Наши технологии  производства уплотнителей постоянно развиваются и совершенствуются. Появляются новые конструкции профилей и улучшается формулы рецептуры сырья.
						<br/>	Материалом для резинотехнических изделий служит термоэластопласт ТЭП - полимерный материал, сочетающий в себе высокоэластичные свойства резины и технологические преимущества термопластов. Он отличается упругостью и эластичностью. Наши уплотнители не склонны к усадке, не растрескиваются, не изменяют линейных размеров в процессе монтажа и эксплуатации.
						</p>
						<div className={styles.btns}>
							<HomeButton type="dark" link="/products">
								Продукция
								<MdProductionQuantityLimits />
							</HomeButton>
							<HomeButton type="dark" link="/contacts">
								Позвонить нам
								<IoIosArrowForward />
							</HomeButton>
						</div>
					</div>
					<div className={styles.imgs}>
						<Image src={img.home.homeManufacturing} alt="home header manufacturing" />
					</div>
				</section>
		</div>
	);
};

export default HomeComponent;