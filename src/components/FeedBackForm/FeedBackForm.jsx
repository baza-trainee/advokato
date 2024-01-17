import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { useEffect, useState } from "react";

import { postContent } from "../../api";
import { SchemaUa, SchemaEn } from "./validationSchema";
import { Input } from "./Input";
import { ModalFromRoot } from "../ModalFromRoot";
import { SuccessPage } from "./SuccessPage";
import { FailurePage } from "./FailurePage";
import {
	SectionStyled,
	StyledForm,
	ButtonStyled,
	TitleStyled,
} from "./FeedBackForm.styled";

const DEFAULT_VALUES = {
	name: "",
	phone: "+380",
	email: "",
	question: "",
};

export const FeedBackForm = () => {
	const [t, i18n] = useTranslation("global");
	const [modalActive, setModalActive] = useState(false);
	const [sendStatus, setSendStatus] = useState(true);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid, isDirty, touchedFields },
	} = useForm({
		mode: "onChange",
		defaultValues: DEFAULT_VALUES,
		resolver: yupResolver(i18n.language === "en" ? SchemaEn : SchemaUa),
	});

	useEffect(() => {
		if (!modalActive) {
			document.body.style.overflowY = "auto";
		}
	}, [modalActive]);

	const toggleModal = () => {
		document.body.style.overflowY = "hidden";
		setModalActive(prev => !prev);
	};

	const onSubmit = async formData => {
		Loading.dots();

		const data = {
			email: formData?.email || null,
			message: formData?.question,
			name: formData?.name || null,
			phone_number: formData?.phone || null,
		};

		const result = await postContent("feedback", data);

		if (result?.success) {
			Loading.remove();
			reset();
			setSendStatus(() => true);
			setModalActive(prev => !prev);
			return;
		}

		Loading.remove();
		setSendStatus(() => false);
		setModalActive(prev => !prev);
	};

	const onErrors = data => {
		console.log("form onErrors", data);
	};

	return (
		<>
			{modalActive && (
				<ModalFromRoot toggleModal={toggleModal}>
					{sendStatus ? <SuccessPage /> : <FailurePage />}
				</ModalFromRoot>
			)}

			<SectionStyled>
				<TitleStyled>
					{t("feedBackForm.title")}
				</TitleStyled>

				<StyledForm
					autoComplete="off"
					onSubmit={handleSubmit(onSubmit, onErrors)}
				>

					<Input
						register={register}
						name="name"
						type="text"
						label={t("feedBackForm.labelName")}
						placeholder={t("feedBackForm.placeholderName")}
						errors={errors}
						isValid={isValid}
						touchedFields={touchedFields}
					/>

					<Input
						register={register}
						name="phone"
						type="text"
						label={t("feedBackForm.labelPhone")}
						placeholder={"+3 80 ХХ ХХХ ХХ ХХ"}
						errors={errors}
						isValid={isValid}
						touchedFields={touchedFields}
					/>

					<Input
						register={register}
						name="email"
						type="text"
						label={t("feedBackForm.labelEmail")}
						placeholder={"xxx@xxx"}
						errors={errors}
						isValid={isValid}
						touchedFields={touchedFields}
					/>


					<Input className="message"
								 register={register}
								 name="question"
								 type="text"
								 label={t("feedBackForm.labelQuestion")}
								 placeholder={t("feedBackForm.placeholderQuestion")}
								 errors={errors}
								 isValid={isValid}
								 touchedFields={touchedFields}
								 width={"100%"}

					/>

					<ButtonStyled
						type="submit"
						disabled={!isValid || !isDirty}
						aria-label="Відправити данні форми"
					>
						{t("feedBackForm.submitButton")}
					</ButtonStyled>
				</StyledForm>
			</SectionStyled>
		</>
	);
};
