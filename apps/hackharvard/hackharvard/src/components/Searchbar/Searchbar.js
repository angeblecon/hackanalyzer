// import React, { useState } from "react";

// const SearchBar = ({ onInputChange }) => {
// 	const [isValidLink, setIsValidLink] = useState(true);

// 	const handleInputChange = (e) => {
// 		const inputValue = e.target.value;
// 		const devpostPattern = /^https:\/\/devpost\.com\/software\//;
// 		if (devpostPattern.test(inputValue) || inputValue === "") {
// 			setIsValidLink(true);
// 		} else {
// 			setIsValidLink(false);
// 		}

// 		onInputChange(inputValue, isValidLink);
// 	};

// 	return (
// 		<div className="search-container">
// 			<div className="input-button-container">
// 				<p className="project-unique-question">Is this project unique?</p>
// 				<input
// 					type="text"
// 					className={`url-input ${!isValidLink && "invalid-input"}`}
// 					placeholder="Enter Devpost Project URL..."
// 					onChange={handleInputChange}
// 				/>
// 				<button className={`analyze-button ${!isValidLink ? "disabled" : "active"}`}>
// 					<svg
// 						width="1rem"
// 						height="1rem"
// 						viewBox="0 0 33 33"
// 						fill="none"
// 						xmlns="http://www.w3.org/2000/svg"
// 						aria-label="Search Icon"
// 						style={{ marginRight: "7px" }}
// 					>
// 						<path
// 							fill-rule="evenodd"
// 							clip-rule="evenodd"
// 							d="M14.9711 0.491135C12.6996 0.491385 10.4611 1.04516 8.44309 2.10611C6.4251 3.16705 4.68634 4.7043 3.37235 6.58915C2.05837 8.474 1.2074 10.6516 0.890677 12.9397C0.573956 15.2278 0.800702 17.5597 1.55193 19.7404C2.30317 21.921 3.55702 23.8869 5.20854 25.4734C6.86006 27.0599 8.86118 28.2209 11.0444 28.8591C13.2276 29.4974 15.5294 29.5944 17.757 29.142C19.9846 28.6896 22.0733 27.701 23.8482 26.2589L29.655 32.1656C29.953 32.4584 30.3522 32.6204 30.7665 32.6167C31.1808 32.6131 31.5771 32.444 31.87 32.146C32.163 31.848 32.3292 31.4449 32.3328 31.0235C32.3364 30.6021 32.1771 30.1961 31.8893 29.8929L26.0824 23.9862C27.7542 21.858 28.8011 19.2928 29.1028 16.586C29.4045 13.8791 28.9486 11.1407 27.7876 8.68579C26.6266 6.2309 24.8078 4.15937 22.5404 2.70964C20.273 1.25991 17.6493 0.490899 14.9711 0.491135ZM5.49054 14.9566C5.49054 13.6901 5.73576 12.4361 6.21221 11.2661C6.68865 10.0961 7.38699 9.03299 8.26734 8.13749C9.1477 7.242 10.1928 6.53166 11.3431 6.04702C12.4933 5.56238 13.7261 5.31294 14.9711 5.31294C16.2162 5.31294 17.449 5.56238 18.5992 6.04702C19.7495 6.53166 20.7946 7.242 21.675 8.13749C22.5553 9.03299 23.2536 10.0961 23.7301 11.2661C24.2065 12.4361 24.4518 13.6901 24.4518 14.9566C24.4518 17.5142 23.4529 19.9671 21.675 21.7756C19.897 23.5842 17.4856 24.6002 14.9711 24.6002C12.4567 24.6002 10.0453 23.5842 8.26734 21.7756C6.48938 19.9671 5.49054 17.5142 5.49054 14.9566Z"
// 							fill="white"
// 						/>
// 					</svg>
// 					Analyze
// 				</button>
// 			</div>
// 			{!isValidLink && <p className="error-message">⚠️ Please enter a valid Devpost link ⚠️</p>}
// 			<style jsx>{`
// 				@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");
// 				@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap");

// 				.search-container {
// 					display: flex;
// 					flex-direction: column;
// 					align-items: center;
// 					gap: 20px;
// 					margin-bottom: 60px;
// 					position: relative;
// 					max-width: 50%;
// 					min-height: 20%;
// 					margin-left: auto;
// 					margin-right: auto;
// 					top: 5vh;
// 				}

// 				.input-button-container {
// 					position: relative;
// 					width: 100%;
// 					display: flex;
// 					align-items: center;
// 					gap: 10px;
// 					box-sizing: border-box;
// 				}

// 				.project-unique-question {
// 					position: absolute;
// 					top: -40px;
// 					left: 5px;
// 					font-family: "Inter";
// 					font-style: normal;
// 					font-weight: 400;
// 					color: #dedddd;
// 					font-size: 11px;
// 				}

// 				.url-input {
// 					flex: 7; /* Takes more space compared to the button */
// 					padding: 10px;
// 					border-radius: 10px;
// 					border: 2px solid #292222;
// 					border-right: none;
// 					background: linear-gradient(90deg, rgba(237, 231, 231, 0) -26.85%, rgba(207, 54, 89, 0.5) 94.72%);
// 					color: white;
// 					font-family: "Inter";
// 					box-sizing: border-box;
// 					box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
// 				}

// 				.analyze-button {
// 					flex: 1;
// 					padding: 10px 25px;
// 					border: none;
// 					border-radius: 5px;
// 					background-color: #000000;
// 					border: 2px solid #292222;
// 					border-left: none;
// 					box-shadow: 0px 4px 10px rgba(177, 177, 177, 0.25);
// 					color: #ffffff;
// 					font-family: "Inter";
// 					cursor: pointer;
// 					display: flex;
// 					align-items: center;
// 					justify-content: center;
// 				}

// 				.analyze-button:hover {
// 					box-shadow: 0px 4px 15px rgba(177, 177, 177, 0.35); /* A slightly pronounced shadow on hover */
// 					transform: scale(1.05);
// 				}

// 				.analyze-button.disabled {
// 					background-color: #a9a9a9; /* A grey color when disabled */
// 					cursor: not-allowed; /* Change the cursor to indicate it's not clickable */
// 				}

// 				@keyframes shake {
// 					0% {
// 						transform: translateX(0);
// 					}
// 					25% {
// 						transform: translateX(-5px);
// 					}
// 					50% {
// 						transform: translateX(5px);
// 					}
// 					75% {
// 						transform: translateX(-5px);
// 					}
// 					100% {
// 						transform: translateX(0);
// 					}
// 				}

// 				.analyze-button.active {
// 					animation: shake 0.3s;
// 				}

// 				.invalid-input {
// 					border-color: red;
// 				}

// 				.error-message {
// 					color: orange;
// 					font-size: 0.8rem;
// 					margin-top: 0.5rem;
// 				}
// 			`}</style>
// 		</div>
// 	);
// };

// export default SearchBar;
