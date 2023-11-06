import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
	ButtonStyled,
	Container,
	Email,
	ErrorsStyled,
	Input,
	InputWraper,
	LabelWraper,
	TitleStyled,
} from "./FeedBackForm.styled";
import { Icon } from "../Icon";

const schema = yup.object({
	name: yup
		.string()
		.required("Це поле є обов’язковим")
		.min(2, "Має бути мінімум 2 символи")
		.max(50, "Має бути не більше 50 символів"),
	tel: yup
		.string()
		.required("Номер телефону обов'язковий")
		.matches(
			/^\([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/,
			"Введіть телефон в наступному форматі (066) 777-30-77",
		)
		.max(15, "Забагато символів"),
	question: yup
		.string()
		.required("Це поле є обов’язковим")
		.min(8, "Має бути мінімум 8 символів")
		.max(700, "Має бути не більше 700 символів"),
});
// rere ererer gg ffr gffg gb fdf bg
export const FeedBackForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid, isDirty },
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(schema),
	});

	const onSubmit = data => {
		alert(JSON.stringify(data));
		reset();

	};

	return (
		<section>
			<Container>
				<TitleStyled>{`Зв'яжіться з нами`}</TitleStyled>
				<Email>acstatus.mk@gmail.com</Email>


				<form
					autoComplete="off"
					onSubmit={handleSubmit(onSubmit)}
				>
					<InputWraper>
						<LabelWraper>
							<label>Ваше ім’я</label>
							<Input
								{...register("name")}
								type="text"
								placeholder="Введіть ім’я"
								valid={isValid}
								invalid={isDirty && !isValid}
							/>
							<ErrorsStyled>{errors.name?.message}</ErrorsStyled>
						</LabelWraper>

						<LabelWraper>
							<label>Ваш телефон</label>
							<Input
								{...register("tel")}
								type="tel"
								placeholder="Введіть телефон"
								valid={isValid}
								invalid={isDirty && !isValid}
								checkMessage="This is valid email"
							/>

							{errors.tel && isDirty ? (
								<ErrorsStyled style={{ color: "#c51f4b" }}>{errors.tel?.message}</ErrorsStyled>
							) : isValid && isDirty ? (
								<ErrorsStyled style={{ color: "#3cbc81" }}>
									Це правильний формат телефона
								</ErrorsStyled>
							) : (
								""
							)}
						</LabelWraper>
					</InputWraper>

					<LabelWraper>
						<label>Ваше питання</label>
						<Input
							{...register("question")}
							type="text"
							placeholder="Введіть питання"
							valid={isValid}
							invalid={isDirty && !isValid}
						/>
						<ErrorsStyled>{errors.question?.message}</ErrorsStyled>
					</LabelWraper>

					<ButtonStyled
						type="submit"
						disabled={!isValid || !isDirty}
					>
						Відправити

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
