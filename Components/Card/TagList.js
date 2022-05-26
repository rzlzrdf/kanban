import React from "react";
import style from "./card.module.css";

const TagList = () => {
	return (
		<>
			<div className={`d-flex mx-4 ${style.taglist}`}>
				<div className={`${style.website} text-center  mx-2`}>website</div>
				<div className={` ${style.ux} text-center mx-2`}>UX</div>
				<div className={` ${style.ui} text-center mx-2`}>UI</div>
				<div className={`${style.wireframe} text-center mx-2`}>Wireframe</div>
			</div>
		</>
	);
};

export default TagList;
