import React from 'react';
import styles from "../styles/general.module.scss";
import Head from "next/head";
import Breadcrumb from "../src/components/breadcrumb/Breadcrumb";

const Delivery = () => {
	return (
		<>
			<Head>
				<title>{`Доставка | Гидрошпонки деформационных и рабочих швов`}</title>
				<meta name="keywords" content="Гидрошпонки, шнуры ТМКЩ, трубки МБС, соэкструзия, Киев, Доставка" />
				<meta name="description" content="Резинотехнические шнуры ТМКЩ, трубки МБС, соэкструзия" />
				{/*<base href="https://next-test-54ch.vercel.app/products/gvr" />*/}
				<meta property="og:type" content="website" />
				{/*<meta property="og:url" content="https://next-test-54ch.vercel.app/products/gvr" />*/}
				<meta property="og:site_name" content="Гидрошпонки деформационных и рабочих швов" />
				<meta property="og:title" content={`Доставка | Гидрошпонки деформационных и рабочих швов`} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/*<link rel="icon" href="/favicon.ico" />*/}
			</Head>
			<Breadcrumb />
			<div className={styles.product_main}>
				<h1>Доставка заказов</h1>
			</div>
			<div className={styles.product_settings}>
				<div className={styles.description}>
					<p>Доставка заказов в регионы Украины осуществляется транспортными компаниями : "Новая почта", "Ночной экспресс", "Интайм" и "Гюнсел". Стоимость доставки не входит в цену товара и формируется компанией-перевозчиком, исходя из габаритов, веса и места назначения. Оплата услуг по перевозке осуществляется клиентом при получении в офисе транспортной компании.</p>
				</div>
			</div>
		</>
	);
};

export default Delivery;