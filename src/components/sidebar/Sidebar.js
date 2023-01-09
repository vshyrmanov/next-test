import React, {useState} from 'react';
import styles from '../../../styles/general.module.scss';

const Sidebar = () => {
	const [open, setOpen] = useState(false);
	return (
		<aside className={styles[`${open ? "open" : "sidebar"}`]}>
			<div className={styles.sidebarInner}>
				<nav className={styles.sidebarNav}>
					<button onClick={() => setOpen(prev => !prev)}>
						Hello button
					</button>
				</nav>

			</div>

		</aside>
	);
};

export default Sidebar;