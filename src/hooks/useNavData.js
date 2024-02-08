import { useTranslation } from "react-i18next";

export const useNavData = () => {
	const [t] = useTranslation('global');

	const navData = [
		{
			id: 1,
			path: '/',
			label: 'посилання на головну сторінку',
			name: 'home',
			title: t('header.nav.home'),
		},
		{
			id: 2,
			path: '/company',
			label: 'посилання на сторінку компанії',
			name: 'company',
			title: t('header.nav.company'),
		},
		{
			id: 3,
			path: '/#practice',
			label: 'посилання на сторінку практики',
			name: 'practice',
			title: t('header.nav.practice'),
		},
		{
			id: 4,
			path: '/#news',
			label: 'посилання на сторінку новин',
			name: 'news',
			title: t('header.nav.news'),
		},
		{
			id: 5,
			path: '/contacts',
			label: 'посилання на сторінку контактів',
			name: 'contacts',
			title: t('header.nav.contacts'),
		},
	];

	return navData
}