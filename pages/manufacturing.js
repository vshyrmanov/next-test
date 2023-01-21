import React from 'react';
import ManufacturingPage from "../src/components/manufacturing/ManufacturingPage";
import Head from "next/head";
import Breadcrumb from "../src/components/breadcrumb/Breadcrumb";

const Manufacturing = () => {
	return (
		<>
			<Head>
				<title>{`Производство гидрошпонки | Гидрошпонки деформационных и рабочих швов`}</title>
				<meta name="keywords" content="Гидрошпонки, шнуры ТМКЩ, трубки МБС, соэкструзия, Киев, Доставка" />
				<meta name="description" content="Резинотехнические шнуры ТМКЩ, трубки МБС, соэкструзия" />
				{/*<base href="https://next-test-54ch.vercel.app/products/gvr" />*/}
				<meta property="og:type" content="website" />
				{/*<meta property="og:url" content="https://next-test-54ch.vercel.app/products/gvr" />*/}
				<meta property="og:site_name" content="Гидрошпонки деформационных и рабочих швов" />
				<meta property="og:title" content={`Производство гидрошпонки | Гидрошпонки деформационных и рабочих швов`} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/*<link rel="icon" href="/favicon.ico" />*/}
			</Head>
			<Breadcrumb />
			<ManufacturingPage />
		</>
	);
};

export default Manufacturing;