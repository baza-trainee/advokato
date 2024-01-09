import DOMPurify from "dompurify";
import parse from "html-react-parser";

import {
	CardWrap,
	PersonPhoto,
	Name,
	Position,
	PersonInfo,
	MobileCardWrap,
} from "./TeamCard.styled";

const TeamCard = ({ teamMember, index }) => {
	const { name, position, photo_path, description } = teamMember;
	const sanitizedInfoMarkup = DOMPurify.sanitize(description);

	return (
		<>
			<CardWrap index={index}>
				<PersonPhoto
					src={photo_path}
					alt={`photo of ${name}, ${position}`}
				/>
				<div>
					<Name>{name}</Name>
					<Position>{position}</Position>
					<PersonInfo>{parse(sanitizedInfoMarkup)}</PersonInfo>
				</div>
			</CardWrap>

			<MobileCardWrap index={index}>
				<Name>{name}</Name>
				<Position>{position}</Position>
				<PersonPhoto
					src={photo_path}
					alt={`photo of ${name}, ${position}`}
				/>
				<PersonInfo>{parse(sanitizedInfoMarkup)}</PersonInfo>
			</MobileCardWrap>
		</>
	);
};

export { TeamCard };
