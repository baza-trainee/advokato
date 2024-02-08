import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export const useActiveLink = () => {
	const [active, setActive] = useState('home');
	const { pathname, hash } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (pathname === '/' && hash === '') {
			return setActive(() => 'home');
		}
		if (pathname === '/company') {
			return setActive(() => 'company');
		}
		if (hash === '#practice') {
			return setActive(() => 'practice');
		}
		if (hash === '#news') {
			return setActive(() => 'news');
		}
		if (pathname === '/contacts') {
			return setActive(() => 'contacts');
		}
		if (hash !== '#practice' || hash !== '#news') {
			navigate('*');
		}
	}, [pathname, hash]);


	return active
}