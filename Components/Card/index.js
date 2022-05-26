import React from "react";
import Avatar from "./Avatar";
import Header from "./Header";
import Tag from "./Tag";
import style from "./card.module.css";

const Card = ({ children }) => {
	//const children = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,";

	return (
		<div className={`container ${style.card_bg}`}>
			<Header />
			{children}
			<Tag />
			<Avatar />
		</div>
	);
};

export default Card;
