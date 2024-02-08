import { useEffect, useState } from "react";
import { getContent } from "../api/index.js";
import { isObjectEmpty } from "../helpers/index.js";

export const useGetContacts = () => {
	const [cities, setCities] = useState([]);
	const [contacts, setContacts] = useState([]);


	useEffect(() => {
		const getData = async () => {
			const data = await getContent('contacts');

			if (!isObjectEmpty(data)) {
				setCities(() => data.cities);
				setContacts(() => data.contacts);
			}
		};

		getData();
	}, []);

	return {cities, contacts}


}