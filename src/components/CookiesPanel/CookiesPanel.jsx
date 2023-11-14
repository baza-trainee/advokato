import { useState, useEffect } from "react";

import {
	getLocalStorage,
	setLocalStorage,
} from "../../helpers/localStorageHelper";

import { Modal } from "../Modal";
import { PdfViewer } from "../PdfViewer";

import pdfFile from "../../assets/documents/test_privacy_policy.pdf";

import {
	Panel,
	IconClose,
	ButtonOk,
	BannerWrap,
	PolicyLink,
} from "./CookiesPanel.styled";

const CookiesPanel = () => {
	const [showPanel, setShowPanel] = useState(false);
	const [modalActive, setModalActive] = useState(false);

	const handleAccept = () => {
		setLocalStorage("cookie_consent", "granted");
		setShowPanel(false);
	};

	const handleClose = () => {
		setShowPanel(false);
	};

	useEffect(() => {
		setTimeout(() => {
			if (getLocalStorage("cookie_consent") === undefined) {
				setShowPanel(true);
			}
		}, 4000);
	}, []);

	return (
		<>
			<Modal
				active={modalActive}
				setActive={setModalActive}
			>
				<PdfViewer pdfFile={pdfFile} />
			</Modal>
			{showPanel && (
				<Panel>
					<IconClose
						id={"close"}
						width={24}
						height={24}
						onClick={() => handleClose()}
						aria-label="Close"
					/>
					<BannerWrap>
						<p>
							Цей сайт використовує файли cookies для правильної роботи і
							покращення сервісу. Якщо ви погоджуєтесь з їхнім використанням,
							натисніть ОК. Більше інформації в{" "}
							<PolicyLink
								href="#"
								onClick={() => {
									setModalActive(true);
								}}
								aria-label="Open Cookie Policy"
							>
								Політика конфіденційності
							</PolicyLink>
						</p>
						<ButtonOk
							type="button"
							onClick={() => handleAccept()}
							aria-label="accept cookies"
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
