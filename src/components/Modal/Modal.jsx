import { useEffect } from "react";
import { Overlay, ModalContainer, IconClose } from "./Modal.styled";

const Modal = ({ active, setActive, children }) => {
	useEffect(() => {
		if (active) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "auto";
		}
	}, [active]);

	const handleClose = () => {
		setActive(false);
	};

	useEffect(() => {
		const keyDownHandler = event => {
			if (event.key === "Escape") {
				event.preventDefault();
				handleClose();
			}
		};

		document.addEventListener("keydown", keyDownHandler);

		return () => {
			document.removeEventListener("keydown", keyDownHandler);
		};
	}, []);

	return (
		<Overlay
			onClick={() => handleClose()}
			active={active}
		>
			<ModalContainer onClick={e => e.stopPropagation()}>
				<IconClose
					id={"close"}
					width={24}
					height={24}
					onClick={() => handleClose()}
					aria-label="Close modal window"
				/>
				{children}
			</ModalContainer>
		</Overlay>
	);
};

export { Modal };
