import { Document, Page } from "react-pdf";

import styled from "@emotion/styled";

export const DocumentContainer = styled(Document)`
	padding: 10px;
	max-width: 100%;
`;

export const PageContainer = styled(Page)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 50px;
	border-radius: 2px;

	box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);

	& > canvas {
		max-width: 100%;
		height: auto !important;
	}
`;

export const PageNum = styled.p`
	margin-bottom: 20px;
	font-family: var(--Montserrat);
`;
