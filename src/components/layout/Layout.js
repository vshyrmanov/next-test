import React from 'react';
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import styles from '../../../styles/general.module.scss';

const Layout = ({children}) => {
	return (
		<>
			<Header />
			<div className={styles.wrapper}>
				{children}
			</div>

			{/*<Sidebar />*/}
			<Footer />
		</>
	);
};

export default Layout;