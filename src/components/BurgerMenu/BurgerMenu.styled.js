import styled from "@emotion/styled";

export const SectionStyled = styled.section`
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	height:100vh;
	width: 216px;
	background:var(--darkGrey); 
	border: none;
	border-radius: 24px 0 0 24px;
	z-index: 30;
	transition: 1s;
	animation:.7s ease-in-out appearMenu forwards;
	svg {
		margin: 120px 0 0 24px;
		cursor: pointer;
	}
	&.close {
		display: none;
	}
	@keyframes appearMenu {
	from{opacity:0};
	to{opacity:1}
}
`;
