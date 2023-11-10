import { Icon } from "../Icon";
import {
	Container,
	FlexWraper,
	FooterStyled,
	Line,
	LinkStyled,
	List,
	PolicyText,
	SocialLink,
	SocialList,
	Text,
	TextLink,
} from "./Footer.styled";

const address =
	"https://www.google.com.ua/maps/place/%D0%90%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82%D1%81%D0%BA%D0%B0%D1%8F+%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F+%22%D0%A1%D0%A2%D0%90%D0%A2%D0%A3%D0%A1%22/@46.9771042,31.9821151,306m/data=!3m1!1e3!4m15!1m8!3m7!1s0x40c5c9736d5787e1:0x22995cbf959306a!2z0YPQuy4g0J3QuNC60L7Qu9GM0YHQutCw0Y8sIDE5LCDQndC40LrQvtC70LDQtdCyLCDQndC40LrQvtC70LDQtdCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDU0MDAw!3b1!8m2!3d46.9771042!4d31.9821151!16s%2Fg%2F1tf22ljf!3m5!1s0x40c5c9736d45554d:0xf623d7f2ab386bdb!8m2!3d46.9770991!4d31.9829098!16s%2Fg%2F11hd9rjdw5?entry=ttu";

const policyLink =
	"https://zbutenergo.kharkov.ua/sites/default/files/pdf/protokol_21-2023_vid_07.09.2023.pdf";
const termsLink =
	"https://zbutenergo.kharkov.ua/sites/default/files/pdf/protokol_21-2023_vid_07.09.2023.pdf";

const currentYear = new Date().getFullYear();

const socialLinks = [
	{
		url: "https://www.linkedin.com/",
		iconId: "linkedin",
	},
	{
		url: "https://www.facebook.com/",
		iconId: "facebook",
	},
	{
		url: "https://www.instagram.com/",
		iconId: "instagram",
	},
	{
		url: "https://www.telegram.com/",
		iconId: "telegram",
	},
];

export const Footer = () => {
	return (
		<FooterStyled>
			<Container>
				<FlexWraper>
					<nav>
						<List>
							<li>
								<LinkStyled
									to="/"
									aria-label="link to main page"
								>
									Головна
								</LinkStyled>
							</li>
							<li>
								<LinkStyled
									to="/company"
									aria-label="link to company page"
								>
									Компанія
								</LinkStyled>
							</li>
							<li>
								<LinkStyled
									to="/company"
									aria-label="link to practices page"
								>
									Практики
								</LinkStyled>
							</li>
							<li>
								<LinkStyled
									to="/company"
									aria-label="link to news page"
								>
									Новини
								</LinkStyled>
							</li>
							<li>
								<LinkStyled
									to="/company"
									aria-label="link to contacts page"
								>
									Контакти
								</LinkStyled>
							</li>
						</List>
					</nav>

					<div>
						<PolicyText
							to={policyLink}
							target="_blank"
							aria-label="link to privacy policy"
						>
							Політика конфіденційності
						</PolicyText>
						<PolicyText
							to={termsLink}
							target="_blank"
							aria-label="link to terms of use of the site"
						>
							Правила користування сайтом
						</PolicyText>
					</div>
					<FlexWraper
						flexDirection="column"
						gap="0"
					>
						<Text>ADVOCATE COMPANY «STATUS»</Text>
						<TextLink
							to={address}
							target="_blank"
							rel="noopener nofollow noreferrer"
							aria-label="address"
						>
							Вул. Нікольська 19, м. Миколаїв, <br /> Україна
						</TextLink>
						<TextLink
							to="tel:+380512377373"
							aria-label="tel"
							marginbottom="0"
						>
							+38 (0512) 37 73 73
						</TextLink>
						<TextLink
							to="tel:+380933737303"
							aria-label="tel"
						>
							+38 (093) 373 73 03
						</TextLink>
						<TextLink
							to="mailto:acstatus.mk@gmail.com"
							aria-label="mail"
						>
							acstatus.mk@gmail.com
						</TextLink>
						<SocialList>
							{socialLinks.map((link, index) => (
								<li key={index}>
									<SocialLink
										to={link.url}
										target="_blank"
										aria-label={link.iconId}
										rel="noopener nofollow noreferrer"
									>
										<Icon
											id={link.iconId}
											width={30}
											height={30}
										/>
									</SocialLink>
								</li>
							))}
						</SocialList>
					</FlexWraper>
				</FlexWraper>
				<Line />
				<Text>{`${currentYear} ADVOCATE COMPANY «STATUS». All rights reserved.`}</Text>
			</Container>
		</FooterStyled>
	);
};
