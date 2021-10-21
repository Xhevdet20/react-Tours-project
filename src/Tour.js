import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
	const [readMore, setReadMore] = useState(false);
	const [readState, setReadState] = useState("read more");

	const toggleReadMore = () => {
		setReadMore(!readMore);
		if (readState == "read more") {
			setReadState("read less");
		} else {
			setReadState("read more");
		}
	};

	return (
		<article className="single-tour">
			<img src={image} alt={name} />
			<footer>
				<div className="tour-info">
					<h4>{name}</h4>
					<h4 className="tour-price">${price}</h4>
				</div>
				<p>
					{readMore
						? info
						: `${info.substring(0, 200)}...
        `}
					<button onClick={() => toggleReadMore()}>{readState}</button>
				</p>
				<button className="delete-btn" onClick={() => removeTour(id)}>
					not interested
				</button>
			</footer>
		</article>
	);
};

export default Tour;
