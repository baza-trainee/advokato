import { Link } from "react-router-dom";
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

const googleMapsLink =
	"https://www.google.com.ua/maps/place/%D0%90%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82%D1%81%D0%BA%D0%B0%D1%8F+%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F+%22%D0%A1%D0%A2%D0%90%D0%A2%D0%A3%D0%A1%22/@46.9771042,31.9821151,306m/data=!3m1!1e3!4m15!1m8!3m7!1s0x40c5c9736d5787e1:0x22995cbf959306a!2z0YPQuy4g0J3QuNC60L7Qu9GM0YHQutCw0Y8sIDE5LCDQndC40LrQvtC70LDQtdCyLCDQndC40LrQvtC70LDQtdCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDU0MDAw!3b1!8m2!3d46.9771042!4d31.9821151!16s%2Fg%2F1tf22ljf!3m5!1s0x40c5c9736d45554d:0xf623d7f2ab386bdb!8m2!3d46.9770991!4d31.9829098!16s%2Fg%2F11hd9rjdw5?entry=ttu";

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
								<LinkStyled to="/">Головна</LinkStyled>
							</li>
							<li>
								<LinkStyled to="/company">Компанія</LinkStyled>
							</li>
							<li>
								<LinkStyled to="/company">Практики</LinkStyled>
							</li>
							<li>
								<LinkStyled to="/company">Новини</LinkStyled>
							</li>
							<li>
								<LinkStyled to="/company">Контакти</LinkStyled>
							</li>
						</List>
					</nav>
					<div>
						<PolicyText to="/company">Політика конфіденційності</PolicyText>
						<PolicyText to="/company">Правила користування сайтом</PolicyText>
					</div>
					<div>
						<Text>ADVOCATE COMPANY «STATUS»</Text>
						<Link
							to={googleMapsLink}
							target="_blank"
							rel="noopener nofollow noreferrer"
							aria-label="company address"
						>
							<TextLink>
								Вул. Нікольська 19, м. Миколаїв, <br /> Україна
							</TextLink>
						</Link>
						<Link
							to="tel:+380512377373"
							aria-label="tel"
						>
							<TextLink style={{ marginBottom: 0 }}>+38 (0512) 37 73 73</TextLink>
						</Link>
						<Link
							to="tel:+380933737303"
							aria-label="tel"
						>
							<TextLink>+38 (093) 373 73 03</TextLink>
						</Link>
						<Link
							to="mailto:acstatus.mk@gmail.com"
							aria-label="mail"
						>
							<TextLink>acstatus.mk@gmail.com</TextLink>
						</Link>
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
											fill={"#fefefe"}
										/>
									</SocialLink>
								</li>
							))}
						</SocialList>
					</div>
				</FlexWraper>
				<Line />
				<Text>{`${currentYear} ADVOCATE COMPANY «STATUS». All rights reserved.`}</Text>
			</Container>
		</FooterStyled>
	);
};
