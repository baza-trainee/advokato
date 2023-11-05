import { useForm } from "react-hook-form";
import { ButtonStyled, Container, Email, TitleStyled } from "./FeedBackForm.styled";
import { Icon } from "../Icon";

export const FeedBackForm = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = data => {
		alert(JSON.stringify(data));
	};

	return (
		<section>
			<Container>
				<TitleStyled>{`Зв'яжіться з нами`}</TitleStyled>
				<Email>acstatus.mk@gmail.com</Email>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div>
						<div>
							<label>Ваше ім’я</label>
							<input />
						</div>

						<div>
							<label>Ваш телефон</label>
							<input />
						</div>
					</div>

					<div>
						<label>Ваше питання</label>
						<input />
					</div>

					<ButtonStyled type="submit">
						Відправити{" "}
						<Icon
							id={"icon-arrow-right"}
							width={16}
							height={12}
							fill={"#fefefe"}
						/>
					</ButtonStyled>
				</form>
			</Container>
		</section>
	);
};
