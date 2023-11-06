import { Container, FooterStyled, Link, List } from "./Footer.styled";

export const Footer = () => {
	return (
		<FooterStyled>
			<Container>
				<nav>
					<List>
						<li>
							<Link
								to="/"
								
							>
								Головна
							</Link>
						</li>
						<li>
							<Link to="/company">Компанія</Link>
						</li>
						<li>
							<Link to="/company">Практики</Link>
						</li>
						<li>
							<Link to="/company">Новини</Link>
						</li>
						<li>
							<Link to="/company">Контакти</Link>
						</li>
					</List>
				</nav>
			</Container>
		</FooterStyled>
	);
};
