import { device, flexBox, fontSectionTitle } from "../../../styles/mixins";

import styled from "@emotion/styled";

export const DivStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	/* margin-bottom: -4px; */

	.react-calendar {
		border: 1px solid #969395;
		width: 250px;

		@media screen and (${device.mobileL}) {
			width: 450px;
		}

		@media screen and (${device.desktop}) {
			width: 450px;
		}
	}

	.react-calendar__navigation {
		margin-bottom: 0;

		border: 1px solid #969395;
		background-color: var(--headerBackground);

		/* @media screen and (${device.mobileL}) {
      height: 52px;
    } */

		/* @media screen and (${device.desktop}) {
      height: 76px;
    } */
	}

	.react-calendar__month-view__weekdays {
		border: 1px solid #969395;
		background-color: var(--headerBackground);

		/* @media screen and (${device.mobileL}) {
      height: 52px;
    }

    @media screen and (${device.desktop}) {
      height: 76px;
    } */
	}

	.react-calendar__month-view__days {
		@media screen and (${device.mobileL}) {
			height: calc(40px * 6);
		}

		@media screen and (${device.desktop}) {
			/* height: calc(76px * 6); */
			height: calc(40px * 6);
		}
	}

	.react-calendar__navigation__label__labelText.react-calendar__navigation__label__labelText--from {
		display: inline-block;

		font-family: var(--Raleway);
		font-weight: 400;
		/* letter-spacing: 0em; */
		color: var(--mainText);

		&:first-letter {
			text-transform: uppercase;
		}

		@media screen and (${device.mobileL}) {
			/* font-size: 24px;
      line-height: 36px; */
			font-size: 20px;
		}

		@media screen and (${device.desktop}) {
			/* font-size: 28px;
      line-height: 42px; */
			font-size: 24px;
		}
	}

	.react-calendar__tile.react-calendar__tile--hasActive.react-calendar__year-view__months__month {
		background-color: #e6e6e6;
	}

	.react-calendar__month-view__weekdays__weekday,
	.react-calendar__month-view__weekdays__weekday.react-calendar__month-view__weekdays__weekday--weekend {
		${flexBox};

		font-family: var(--Raleway);
		font-weight: 400;
		/* letter-spacing: 0em; */
		text-transform: uppercase;
		color: var(--mainText);

		abbr[title] {
			text-decoration: none;
		}

		@media screen and (${device.mobileL}) {
			font-size: 18px;
			/* line-height: 36px; */
		}

		@media screen and (${device.desktop}) {
			/* font-size: 24px;
      line-height: 42px; */
			font-size: 20px;
		}
	}

	.react-calendar__tile.react-calendar__month-view__days__day,
	.react-calendar__tile.react-calendar__month-view__days__day.react-calendar__month-view__days__day--neighboringMonth {
		font-family: var(--Raleway);
		font-weight: 600;
		/* letter-spacing: 0em; */
		color: var(--mainText);
		cursor: pointer;

		@media screen and (${device.mobileL}) {
			font-size: 18px;
			/* line-height: 36px; */
		}

		@media screen and (${device.desktop}) {
			font-size: 22px;
			/* line-height: 42px; */
		}

		&[disabled] {
			font-weight: 400;
			background-color: var(--lightText);
			color: var(--greyText);

			&:hover,
			&:focus {
				cursor: auto;
				background-color: var(--lightText);
			}
		}

		&.current {
			font-weight: 600;
			color: var(--accentText);
			background-color: var(--lightText);

			&:hover,
			&:focus {
				cursor: pointer;
				transition-property: background-color;
				transition-duration: var(--animation-duration);
				transition-timing-function: var(--timing-function);

				background-color: #e6e6e6;
			}
		}

		&.react-calendar__tile--now {
			border: 1px solid #969395;
			background-color: inherit;

			&[disabled] {
				font-weight: 400;
				background-color: var(--lightText);
				color: var(--greyText);

				&:hover,
				&:focus {
					cursor: auto;
					background-color: var(--lightText);
				}
			}

			&:hover,
			&:focus {
				cursor: pointer;
				transition-property: background-color;
				transition-duration: var(--animation-duration);
				transition-timing-function: var(--timing-function);

				background-color: #e6e6e6;
			}
		}

		&.react-calendar__tile--rangeStart {
			background-color: var(--lightText);

			&:hover,
			&:focus {
				cursor: pointer;
				transition-property: background-color;
				transition-duration: var(--animation-duration);
				transition-timing-function: var(--timing-function);

				background-color: #e6e6e6;
			}
		}
	}

	.react-calendar__navigation__arrow.react-calendar__navigation__next-button,
	.react-calendar__navigation__arrow.react-calendar__navigation__next2-button,
	.react-calendar__navigation__arrow.react-calendar__navigation__prev-button,
	.react-calendar__navigation__arrow.react-calendar__navigation__prev2-button {
		svg {
			height: 14px;
			width: 14px;

			@media screen and (${device.mobileL}) {
				height: 20px;
				width: 20px;
			}

			@media screen and (${device.desktop}) {
				/* height: 32px;
        width: 32px; */
				height: 24px;
				width: 24px;
			}
		}
	}
`;

export const MainTitle = styled.h2`
	${fontSectionTitle};
	text-align: center;
	color: var(--mainText);
	font-size: 20px;
	margin-bottom: 15px;

	@media screen and (${device.mobileL}) {
		margin-bottom: 20px;
		/* height: 40px; */
		/* min-width: 188px; */
		font-size: 24px;
		/* line-height: calc(39 / 28); */
	}

	@media screen and (${device.desktop}) {
		/* height: 48px; */
		/* min-width: 264px; */
		font-size: 32px;
		/* line-height: calc(56 / 40); */
	}
`;

export const SecondaryTitle = styled.h2`
	${fontSectionTitle};
	text-align: center;
	color: var(--mainText);
	font-size: 22px;
	margin-top: 16px;

	@media screen and (${device.mobileL}) {
		margin-top: 16px;
		/* margin-bottom: 20px;
    height: 40px;
    min-width: 180px; */
		font-size: 22px;
		/* line-height: calc(39 / 28); */
	}

	@media screen and (${device.desktop}) {
		margin-top: 20px;
		/* height: 48px;
    min-width: 244px; */
		font-size: 32px;
		/* line-height: calc(56 / 40); */
	}
`;

export const TimeList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	column-gap: 20px;
	row-gap: 10px;

	@media screen and (${device.mobileL}) {
		column-gap: 30px;
		row-gap: 10px;
		/* width: 450px; */
	}

	@media screen and (${device.desktop}) {
		/* gap: 40px;
    width: 520px;
    margin-bottom: calc(72px - 52px); */
	}

	li {
		${flexBox};
		/* width: 100px;
    height: 36px; */
		/* width: calc(100% / 5);
    margin: auto; */

		font-family: var(--Raleway);
		font-weight: 400;
		/* letter-spacing: 0em; */
		color: var(--mainText);

		&:hover,
		&:focus {
			cursor: pointer;
			transition-property: background-color;
			transition-duration: var(--animation-duration);
			transition-timing-function: var(--timing-function);

			background-color: #e6e6e6;
		}

		@media screen and (${device.mobileL}) {
			font-size: 18px;
			/* line-height: 33.6px; */
		}

		@media screen and (${device.desktop}) {
			font-size: 24px;
			/* line-height: 44.8px; */
		}
	}

	li.currentTime {
		font-weight: 600;
		color: var(--accentText);
	}
`;
