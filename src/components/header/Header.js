import React, {useState} from 'react';
import Link from 'next/link';
import style from '../../../styles/general.module.scss';
import styles from "../../../styles/general.module.scss";
import {links} from "../../../data/data";
import { RxHamburgerMenu } from 'react-icons/rx';
import cn from 'classnames';

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<header className={style.header}>
				<nav>
					<div className={style.burger}>
						<RxHamburgerMenu onClick={() => setOpen(prev => !prev)} />
					</div>
					<div className={style.title}>
						<Link href='/' className={style.link}>
							<h3>Termo Elasto Plast</h3>
						</Link>
					</div>
					<div className={style.menu}>
						<Link href='/manufacturing' className={style.link}>
							<button>Manufacturing</button>
						</Link>
						<Link href='/delivery' className={style.link}>
							<button>Delivery</button>
						</Link>
						<Link href='/contacts' className={style.link}>
							<button>Contacts</button>
						</Link>
					</div>
				</nav>
			</header>

			<aside className={open ? cn(styles.sidebar, styles.open) : styles.sidebar}>
				<div className={styles.sidebarInner}>
					<nav className={styles.sidebarNav}>
						{links.map(e =>
							<Link key={e.link} href={`/products/${e.link}`} className={styles.link}>
								<button
									className={styles.btnLink}
									onClick={() => setOpen(false)}
								>{e.label}</button>
							</Link>
						)}
					</nav>
				</div>
			</aside>
		</>

	);
};

export default Header;