
import {
	MainStyled,
} from "./Layout.styled";
// import { Outlet} from "react-router-dom";
import React, { Suspense} from "react";
import { LoadingAnimated } from "../LoadingAnimated";
import { ScrollUpButton } from "../ScrollUpButton/index.js";
import Header from "../Header/Header.jsx";


const Footer = React.lazy(() => import('../Footer/Footer.jsx'));
const Outlet = React.lazy(() => import('react-router-dom').then(module => ({ default: module.Outlet })));

export const Layout = ({ activeLang, toggleLanguage }) => {
	return (
		<div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
			<Header activeLang={activeLang} toggleLanguage={toggleLanguage}/>

			<MainStyled>
				<Suspense fallback={<LoadingAnimated />}>
					<Outlet />
				</Suspense>
			</MainStyled>

			<Suspense fallback={<LoadingAnimated />}>
				<Footer />
			</Suspense>

			<ScrollUpButton />

			{/* <CookiesPanel /> */}
		</div>
	);
};
