import {
	CardWraper,
	Container,
	ImgWraper,
	SectionStyled,
	Text,
	TitleStyled,
} from "./Information.styled";

import ImgFstDefault from "../../assets/images/info-section/info-img1@1x.jpg";
import ImgFst2x from "../../assets/images/info-section/info-img1@2x.jpg";
import ImgFstWp from "../../assets/images/info-section/info-img1@1x.webp";
import ImgFst2Wp from "../../assets/images/info-section/info-img1@2x.webp";
import ImgScnDefault from "../../assets/images/info-section/info-img2@1x.jpg";
import ImgScn2x from "../../assets/images/info-section/info-img2@2x.jpg";
import ImgScnWp from "../../assets/images/info-section/info-img2@1x.webp";
import ImgScn2Wp from "../../assets/images/info-section/info-img2@2x.webp";
import ImgThdDefault from "../../assets/images/info-section/info-img3@1x.jpg";
import ImgThd2x from "../../assets/images/info-section/info-img3@2x.jpg";
import ImgThdWp from "../../assets/images/info-section/info-img3@1x.webp";
import ImgThd2Wp from "../../assets/images/info-section/info-img3@2x.webp";

export const Information = () => {
	return (
		<SectionStyled>
			<Container>
				<TitleStyled>Ми самостійно здійснюємо представництво ваших інтересів </TitleStyled>
				<CardWraper>
					<ImgWraper>
						<picture>
							<source
								srcSet={`${ImgFstWp}, ${ImgFst2Wp} 2x`}
								type="image/webp"
							/>
							<source
								srcSet={`${ImgFstDefault}, ${ImgFst2x} 2x`}
								type="image/jpeg"
							/>
							<img
								src={ImgFstDefault}
								alt="business conversation at the table"
							/>
						</picture>
					</ImgWraper>
					<Text>
						Адвокатська компанія "Статус" пропонує найвищий рівень юридичних послуг і консультацій
						для наших клієнтів. Ми горді надавати широкий спектр юридичних послуг, спеціалізовані
						наші адвокати і завжди готові допомогти вам у вирішенні вашого правового питання.
					</Text>
				</CardWraper>

				<CardWraper>
					<Text>
						Наша команда володіє унікальними можливостями, щоб допомогти нашим клієнтам вирішувати
						їх найскладніші юридичні проблеми, незалежно від їх місця виникнення та знаходження
						клієнтів. <br /> <br /> Ми — команда молодих, амбітних і цілеспрямованих юристів, для
						яких головним пріоритетом є час наших клієнтів, порядність, відповідальність і
						досягнення поставлених цілей.
					</Text>
					<ImgWraper>
						<picture>
							<source
								srcSet={`${ImgScnWp}, ${ImgScn2Wp} 2x`}
								type="image/webp"
							/>
							<source
								srcSet={`${ImgScnDefault}, ${ImgScn2x} 2x`}
								type="image/jpeg"
							/>
							<img
								src={ImgScnDefault}
								alt="business conversation at the table"
							/>
						</picture>
					</ImgWraper>
				</CardWraper>

				<CardWraper>
					<ImgWraper>
						<picture>
							<source
								srcSet={`${ImgThdWp}, ${ImgThd2Wp} 2x`}
								type="image/webp"
							/>
							<source
								srcSet={`${ImgThdDefault}, ${ImgThd2x} 2x`}
								type="image/jpeg"
							/>
							<img
								src={ImgThdDefault}
								alt="business conversation at the table"
							/>
						</picture>
					</ImgWraper>
					<Text>
						Ми прагнемо досягти позитивних результатів для наших клієнтів якнайшвидше і
						найефективніше. Наша компанія славиться своєю здатністю до досягнення високих стандартів
						і вирішення навіть найскладніших справ.
					</Text>
				</CardWraper>
			</Container>
		</SectionStyled>
	);
};
