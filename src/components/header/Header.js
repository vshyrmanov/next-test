import React, {useState} from 'react';
import Link from 'next/link';
import Image from "next/image";
import style from '../../../styles/general.module.scss';
import styles from "../../../styles/general.module.scss";
import {links} from "../../../data/data";
import { RxHamburgerMenu } from 'react-icons/rx';
import cn from 'classnames';
import {img} from "../../../assets";
import {useRouter} from "next/router";

const Header = () => {
	const [open, setOpen] = useState(false);
	const {query, pathname} = useRouter();

	return (
		<>
			<header className={style.header}>
				<nav>
					<div className={style.burger}>
						<RxHamburgerMenu onClick={() => setOpen(prev => !prev)} />
					</div>
					<div className={style.title}>
						<Link href='/' className={style.link}>
							<Image src={img.mainlogo} alt="mainlogo" width={200} />
						</Link>
					</div>
					<div className={style.menu}>
						<Link href='/manufacturing' className={style.link}>
							<button className={pathname === "/manufacturing" ? styles.activeNavLink : ""}>Производство гидрошпонки</button>
						</Link>
						<Link href='/delivery' className={style.link}>
							<button className={pathname === "/delivery" ? styles.activeNavLink : ""}>Доставка</button>
						</Link>
						<Link href='/contacts' className={style.link}>
							<button className={pathname === "/contacts" ? styles.activeNavLink : ""}>Контакты</button>
						</Link>
					</div>
				</nav>
			</header>
			<div className={open ? cn(styles.sidebar, styles.sidebarOpen) : styles.sidebar}>
				<nav className={styles.sidebarNav}>
								{links.map(e =>
									<Link key={e.link} href={`/products/${e.link}`} className={styles.link}>
										<button
											className={query?.id === e.link ? cn(styles.btnLink, styles.activeLink) : styles.btnLink}
											onClick={() => setOpen(false)}
										>{e.label}</button>
									</Link>
								)}
					<div className={style.divider} />
					<Link href='/manufacturing' className={cn(style.link, style.response_navLink)}>
						<button
							onClick={() => setOpen(false)}
							className={pathname === "/manufacturing" ? cn(styles.btnLink, styles.activeLink) : styles.btnLink}
						>Производство гидрошпонки</button>
					</Link>
					<Link href='/delivery' className={cn(style.link, style.response_navLink)}>
						<button
							onClick={() => setOpen(false)}
							className={pathname === "/delivery" ? cn(styles.btnLink, styles.activeLink) : styles.btnLink}
						>Доставка</button>
					</Link>
					<Link href='/contacts' className={cn(style.link, style.response_navLink)}>
						<button
							onClick={() => setOpen(false)}
							className={pathname === "/contacts" ? cn(styles.btnLink, styles.activeLink) : styles.btnLink}
						>Контакты</button>
					</Link>
				</nav>
			</div>
		</>

	);
};

export default Header;