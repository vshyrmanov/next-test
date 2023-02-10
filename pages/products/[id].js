import React from 'react';
import {data} from "../../data/data";
import { useRouter } from 'next/router'
import Head from "next/head";
import Breadcrumb from "../../src/components/breadcrumb/Breadcrumb";

const ProductPage = () => {
	const {query} = useRouter();
	const { title, keywords, description } = data[`${query.id || "default"}_head`];

	return (
		<>
			<Head>
				<title>{`${title || ""} | Гидрошпонки деформационных и рабочих швов`}</title>
				<meta name="keywords" content={keywords} />
				<meta name="description" content={description} />
				{/*<base href="https://next-test-54ch.vercel.app/products/gvr" />*/}
				<meta property="og:type" content="website" />
				{/*<meta property="og:url" content="https://next-test-54ch.vercel.app/products/gvr" />*/}
				<meta property="og:site_name" content="Гидрошпонки деформационных и рабочих швов" />
				<meta property="og:title" content={`${title || ""} | Гидрошпонки деформационных и рабочих швов`} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/*<link rel="icon" href="/favicon.ico" />*/}
			</Head>
			<div>
				<Breadcrumb />
				{query.id ? data[query.id].map((e, index) =>
					<React.Fragment key={index}>{e}</React.Fragment>
				) : <h2>Loading ...</h2>}
			</div>
		</>

	);
};

	export default ProductPage;