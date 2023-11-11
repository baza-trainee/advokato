import { useState, useEffect } from "react";

import {
	getLocalStorage,
	setLocalStorage,
} from "../../helpers/localStorageHelper";

import {
	Panel,
	IconClose,
	ButtonOk,
	BannerWrap,
	PolicyLink,
} from "./CookiesPanel.styled";

const CookiesPanel = () => {
	const [showPanel, setShowPanel] = useState(false);

	function handleAccept() {
		setLocalStorage("cookie_consent", "granted");
		setShowPanel(false);
	}

	function handleClose() {
		setShowPanel(false);
	}

	function openModal() {
		handleClose();
	}

	useEffect(() => {
		setTimeout(() => {
			if (getLocalStorage("cookie_consent") === undefined) {
				setShowPanel(true);
			}
		}, 4000);
	}, []);

	return (
		<>
			{showPanel && (
				<Panel>
					<IconClose
						id={"close"}
						width={24}
						height={24}
						onClick={() => handleClose()}
					/>
					<BannerWrap>
						<p>
							Цей сайт використовує файли cookies для правильної роботи і
							покращення сервісу. Якщо ви погоджуєтесь з їхнім використанням,
							натисніть ОК. Більше інформації в{" "}
							<PolicyLink
								href="#"
								onClick={() => openModal()}
							>
								Політика конфіденційності
							</PolicyLink>
						</p>
						<ButtonOk
							type="button"
							onClick={() => handleAccept()}
						>
							Ok
						</ButtonOk>
					</BannerWrap>
				</Panel>
			)}
		</>
	);
};

export { CookiesPanel };
