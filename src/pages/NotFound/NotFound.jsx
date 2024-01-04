import {
	TopBackground,
	Container,
	Title,
	Text,
	Button,
} from "./NotFound.styled";

const NotFound = () => {
	return (
		<Container>
			<TopBackground />
			<Title>404</Title>
			<Text>На жаль, сторінка, яку ви шукаєте, видалена або не існує</Text>
			<Button to="/">Повернутись на головну</Button>
		</Container>
	);
};

export default NotFound;
