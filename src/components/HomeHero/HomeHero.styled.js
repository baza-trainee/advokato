import styled from "@emotion/styled";
import { container, mainButton, secondaryButton } from "../../styles/mixins";

export const SectionStyled = styled.section`
	height: 100vh;
	background-color: grey;
`;

export const Container = styled.div`
	${container};
`;

export const ButtonMain = styled.button`
	${mainButton};
	margin: 20px 20px 0 0;
`;

export const ButtonSecondary = styled.button`
	${secondaryButton};
`;
