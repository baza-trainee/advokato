import { ArticleStyled, Text, TitleStyled } from "./Column.styled";

export const Column = ({ left, title, text, width }) => {
	return (
		<ArticleStyled
			width={width}
			left={left}
		>
			<TitleStyled>{title}</TitleStyled>
			<Text>{text}</Text>
		</ArticleStyled>
	);
};
