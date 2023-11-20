import {
	TopBackground,
	Container,
	Title,
	Text,
	Button,
} from "./NotFound.styled";
import { Icon } from "../../components/Icon";

const NotFound = () => {
	return (
		<Container>
			<TopBackground></TopBackground>
			<Title>404</Title>
			<Text>На жаль, сторінка, яку ви шукаєте, видалена або не існує</Text>
			<Button to="/">
				Повернутись на головну{" "}
				<Icon
					id={"icon-header-arrow-right"}
					width={16}
					height={12}
					aria-label="повернутись на головну сторінку"
				/>
			</Button>
		</Container>
	);
};

export default NotFound;
