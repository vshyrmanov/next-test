import React, { useState } from 'react';
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
	const [isMenu, setIsMenu] = useState(false);
	const {query, pathname} = useRouter();
	const menuHandler = () => setIsMenu(prev => !prev);

	return (
		<>
			<header className={style.header}>
				<nav>
					<div className={style.burger}>
						<RxHamburgerMenu onClick={menuHandler} />
					</div>
					<div className={style.title}>
						<Link href='/' className={style.link}>
							<Image src={img.mainlogo} alt="mainlogo" width={200} />
						</Link>
					</div>
					<div className={style.menu}>
						<div className={style.dropdownBtn}>
							<button onClick={menuHandler}>Продукция</button>
							<div className={!isMenu ? cn(style.dropdown_menu, styles.disable) : style.dropdown_menu}>
									{links.map(e =>
										<Link key={e.link} href={`/products/${e.link}`} className={styles.link}>
											<button
												className={query?.id === e.link ? cn(styles.btnLink, styles.activeLink) : styles.btnLink}
												onClick={menuHandler}
											>{e.label}</button>
										</Link>
									)}
									<div className={style.divider} />
									<Link href='/manufacturing' className={cn(style.link, style.response_navLink)}>
										<button
											onClick={menuHandler}
											className={pathname === "/manufacturing" ? cn(styles.btnLink, styles.activeLink) : styles.btnLink}
										>Производство гидрошпонки</button>
									</Link>
									<Link href='/delivery' className={cn(style.link, style.response_navLink)}>
										<button
											onClick={menuHandler}
											className={pathname === "/delivery" ? cn(styles.btnLink, styles.activeLink) : styles.btnLink}
										>Доставка</button>
									</Link>
									<Link href='/contacts' className={cn(style.link, style.response_navLink)}>
										<button
											onClick={menuHandler}
											className={pathname === "/contacts" ? cn(styles.btnLink, styles.activeLink) : styles.btnLink}
										>Контакты</button>
									</Link>
							</div>
						</div>
						<Link href='/manufacturing' className={cn(style.link, style.menu_link)}>
							<button className={pathname === "/manufacturing" ? styles.activeNavLink : ""}>Производство гидрошпонки</button>
						</Link>
						<Link href='/delivery' className={cn(style.link, style.menu_link)}>
							<button className={pathname === "/delivery" ? styles.activeNavLink : ""}>Доставка</button>
						</Link>
						<Link href='/contacts' className={cn(style.link, style.menu_link)}>
							<button className={pathname === "/contacts" ? styles.activeNavLink : ""}>Контакты</button>
						</Link>
					</div>
				</nav>
			</header>
		</>

	);
};

export default Header;