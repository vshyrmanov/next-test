import React from 'react';
import {data} from "../../data/data";
import { useRouter } from 'next/router'
import Head from "next/head";

const ProductPage = () => {
	const {query} = useRouter();

	return (
		<>
			<Head>
				<title>Техпластины МБС и техпластины ТМКЩ</title>
				<meta name="keywords" content="Уплотнители, Уплотнители киев, Уплотнители Украина, резинотехнические шнуры ТМКЩ, трубки МБС, соэкструзия, Техпластины предназначена для изготовления уплотнительных деталей в трансформаторных и электротехнических устройствах." />
				<meta name="description" content="Техпластины предназначена для изготовления уплотнительных деталей в трансформаторных и электротехнических устройствах."/>
				{/*<base href="https://next-test-54ch.vercel.app/products/gvr" />*/}
				<meta property="og:type" content="website" />
				{/*<meta property="og:url" content="https://next-test-54ch.vercel.app/products/gvr" />*/}
				<meta property="og:site_name" content="Техпластины МБС и техпластины ТМКЩ" />
				<meta property="og:title" content="Техпластины МБС и техпластины ТМКЩ" />

				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/*<link rel="icon" href="/favicon.ico" />*/}
			</Head>
			<div>
				{query.id ? data[query.id].map((e, index) =>
					<React.Fragment key={index}>{e}</React.Fragment>
				) : <h2>Loading ...</h2>}
			</div>
		</>

	);
};

	export default ProductPage;