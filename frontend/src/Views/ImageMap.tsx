import React, { useEffect, useState } from "react";
import Seasonings from "../../assets/Seasonings.jpg";

export function ImageMap() {
	const [didMount, setDidMount] = useState(false);
	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate);
	useEffect(componentDidUnmount, []);

	return (
		<main>
			<img
				width="100%"
				useMap="#my-image-map"
				src={Seasonings}
				alt="Cajun Seasoning Blends"
			/>
			<map name="my-image-map">
				<area
					shape="rect"
					title="Tony Chachere's Creole Seasoning"
					coords="46,151, 149,324"
					href="https://www.tonychachere.com/"
					target="_blank"
				/>
				<area
					shape="rect"
					title="Zatarain's Creole Seasoning"
					coords="290,123, 386,290"
					href="https://www.mccormick.com/zatarains/products/spices-and-seasonings/spices-and-extracts/creole-seasoning"
					target="_blank"
				/>
			</map>
		</main>
	);

	function componentDidMount() {
		setDidMount(true);
		console.log("The ImageMap component mounted.");
		imageMapResize();
	}
	function componentDidUpdate() {
		if (didMount === true) console.log("The ImageMap component updated.");
	}
	function componentDidUnmount() {
		console.log("The ImageMap component unmounted.");
	}
}
