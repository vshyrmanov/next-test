import React from 'react';
import {data} from "../../data/data";
import { useRouter } from 'next/router'

const ProductPage = () => {
	const {query} = useRouter();

	return (
		<div>
			{query.id ? data[query.id].map((e, index) =>
				<React.Fragment key={index}>{e}</React.Fragment>
			) : <h2>Loading ...</h2>}
		</div>
	);
};

	export default ProductPage;