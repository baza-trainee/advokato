import { Container, SectionStyled, TitleStyled } from "./Information.styled";

export const Information = () => {
	return (
		<SectionStyled>
			<Container>
				<TitleStyled>Ми самостійно здійснюємо представництво ваших інтересів </TitleStyled>
				<div>
					<img
						src=""
						alt=""
						loading="lazy"
					/>
					<p>
						Адвокатська компанія "Статус" пропонує найвищий рівень юридичних послуг і консультацій
						для наших клієнтів. Ми горді надавати широкий спектр юридичних послуг, спеціалізовані
						наші адвокати і завжди готові допомогти вам у вирішенні вашого правового питання.
					</p>
				</div>
			</Container>
		</SectionStyled>
	);
};
