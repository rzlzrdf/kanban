import React from "react";
import style from "./card.module.css";

const Header = () => {
	return (
		<div className={`d-flex text-center justify-content-between ${style.card_header}`}>
			<div className={``}>
				<h2 className={style.left_subHeader}>Not Started</h2>
			</div>
			<div className="">
				<p className={style.right_subHeader}>Expire on 24th jun</p>
			</div>
		</div>
	);
};

export default Header;
