import { lazy, Suspense, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Loading as NotiflixLoading } from "notiflix/build/notiflix-loading-aio";
import { LoadingAnimated } from "../LoadingAnimated/index.jsx";

const Layout = lazy(() => import("../Layout"));
const HomePage = lazy(() => import("../../pages/HomePage"));
const CompanyPage = lazy(() => import("../../pages/CompanyPage/CompanyPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage"));
const NotFound = lazy(() => import("../../pages/NotFound/NotFound"));

export const App = () => {
	const [t, i18n] = useTranslation("global");
	const [activeLang, setActiveLang] = useState("ua");

	useEffect(() => {
		NotiflixLoading.init({
			svgSize: "110px",
			svgColor: "#0b0c0c",
			clickToClose: false,
		});
	}, []);

	const toggleLanguage = async lang => {
		i18n.changeLanguage(lang);
		setActiveLang( () => lang);
	};

	return (
			<Routes>
				<Route
					path="/"
					element={
						<Suspense fallback={<LoadingAnimated />}>
						<Layout
							activeLang={activeLang}
							toggleLanguage={toggleLanguage}
						/>
						</Suspense>
					}
				>
					<Route
						index
						element={<Suspense fallback={<LoadingAnimated />}><HomePage /></Suspense>}
					/>
					<Route
						path="company"
						element={<Suspense fallback={<LoadingAnimated />}><CompanyPage /></Suspense>}
					/>
					<Route
						path="contacts"
						element={<Suspense fallback={<LoadingAnimated />}><ContactsPage /></Suspense>}
					/>

					<Route
						path="*"
						element={<NotFound />}
					/>
				</Route>
			</Routes>

	);
};
