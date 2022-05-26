import React from "react";
import style from "./card.module.css";

const Avatar = () => {
	return (
		<div className={style.bg_avatar}>
			<img src="/images/avatar-default.png" className={style.avatar} />
		</div>
	);
};

export default Avatar;
