import css from "./MainComponent.scss";
import LandingPage from "../LandingPage/LandingPage";

export default function MainComponent() {
	return (
		<div>
			<span></span>
			<div id="gradient" />
			<LandingPage />
			<style jsx>{css}</style>
		</div>
	);
}
