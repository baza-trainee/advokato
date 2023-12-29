import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import PropTypes from "prop-types";

import { getContent, postContent } from "../../../api";
import { SchemaEn, SchemaUa } from "./validationSchema";
import * as Constants from "../../../constants";
import { Input } from "./Input";
import { Checkbox } from "./Checkbox";
import { Select } from "./Select";
import { Calendar } from "../Calendar";
import { ModalFromRoot } from "../../ModalFromRoot";
import { PdfViewer } from "../../PdfViewer";
import { SuccessPage } from "./SuccessPage";
import { FailurePage } from "./FailurePage";
import {
	FormWrp,
	FormStyled,
	FirstPageTitle,
	SecondPageTitle,
	ButtonWrp,
	UpperButton,
	LowerButton,
} from "./AppointmentForm.styled";
import privacyPolicy from "../../../assets/documents/privacy-policy.pdf";

const DEFAULT_VALUES = {
	firstName: "",
	lastName: "",
	phone: "+380",
	email: "",
	isAccept: false,
	specialization_id: 0,
	lawyer_id: 0,
	appointment_date: "",
	appointment_time: "",
};

export const AppointmentForm = ({ setModalActive }) => {
	const [t, i18n] = useTranslation("global");

	const {
		register,
		handleSubmit,
		getValues,
		setValue,
		trigger,
		formState: { errors, isValid, touchedFields },
	} = useForm({
		mode: "onChange",
		defaultValues: DEFAULT_VALUES,
		resolver: yupResolver(i18n.language === "en" ? SchemaEn : SchemaUa),
	});

	const [isChecked, setIsChecked] = useState(getValues("isAccept"));
	const [isOpenDoc, setIsOpenDoc] = useState(false);
	const [currentPartForm, setCurrentPartForm] = useState(1);
	const [specialization, setSpecialization] = useState([]);
	const [currentSpec, setCurrentSpec] = useState("");
	const [lawyers, setLawyers] = useState([]);
	const [schedule, setSchedule] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const dataSpec = await getContent("lawyer-specs");

			if (dataSpec) {
				setSpecialization(prev => [
					...dataSpec,
					{
						id: dataSpec.length + 1,
						specialization_name: "Інше",
					},
				]);
			}

			const dataLaw = await getContent("lawyers");
			if (dataLaw) {
				setLawyers(prev => dataLaw);
			}
		};

		getData();
	}, []);

	useEffect(() => {
		const getData = async () => {
			const dataLaw = await getContent(
				`lawyers?specialization_id=${currentSpec}`,
			);
			if (dataLaw) {
				setLawyers(prev => dataLaw);
			}
		};

		getData();
	}, [currentSpec]);

	useEffect(() => {
		const getData = async () => {
			if (currentPartForm != 3) {
				return;
			}

			const lawyerId = getValues("lawyer_id");
			const data = await getContent(`schedule?lawyer_id=${lawyerId}`);

			if (data) {
				setSchedule(prev => data);
			}
		};

		getData();
	}, [currentPartForm, getValues]);

	const toggleModal = () => {
		setIsOpenDoc(prev => !prev);
	};

	const onChangeSelectSpec = id => {
		setCurrentSpec(prev => id);

		setValue("specialization_id", id, {
			shouldValidate: true,
		});
	};

	const onChangeSelectLaw = id => {
		setValue("lawyer_id", id, {
			shouldValidate: true,
		});
	};

	const onNextButton = () => {
		trigger();

		if (isValid) {
			setCurrentPartForm(prev => prev + 1);
		}
	};

	const onSubmit = async formData => {
		Loading.dots();

		const {
			appointment_date,
			appointment_time,
			lawyer_id,
			specialization_id,
			email,
			firstName,
			lastName,
			phone,
		} = formData;

		const clientName = `${firstName} ${lastName}`;

		const data = {
			appointment: {
				appointment_date,
				appointment_time,
				lawyer_id,
				specialization_id,
			},
			visitor: {
				email: email || null,
				name: clientName !== " " ? clientName : null,
				phone_number: phone,
			},
		};

		const result = await postContent("appointment", data);

		if (result?.message === Constants.APPOINTMENT_200) {
			Loading.remove();
			return setCurrentPartForm(4);
		}

		Loading.remove();
		setCurrentPartForm(5);
	};

	const onSkipAllSteps = async () => {
		Loading.dots();

		const clientName = `${getValues("firstName")} ${getValues("lastName")}`;

		const data = {
			email: getValues("email") || null,
			message: null,
			name: clientName !== " " ? clientName : null,
			phone_number: getValues("phone"),
		};

		const result = await postContent("feedback", data);

		if (result?.success) {
			Loading.remove();
			return setCurrentPartForm(4);
		}

		Loading.remove();
		setCurrentPartForm(5);
	};

	const onErrors = data => {
		console.log("form onErrors", data);
	};

	return (
		<>
			{isOpenDoc && (
				<ModalFromRoot
					toggleModal={toggleModal}
					root="root-docs"
					overlayId=""
					padding="20px"
					align="flex-start"
				>
					<PdfViewer pdfFile={privacyPolicy} />
				</ModalFromRoot>
			)}

			<FormWrp>
				<FormStyled
					onSubmit={handleSubmit(onSubmit, onErrors)}
					autoComplete="off"
				>
					{currentPartForm === 1 && (
						<>
							<FirstPageTitle>{t("appointmentForm.firstTitle")}</FirstPageTitle>

							<Input
								register={register}
								name="firstName"
								type="text"
								label={t("appointmentForm.inputFirstName")}
								placeholder={t("appointmentForm.inputFirstName")}
								errors={errors}
								isValid={isValid}
								touchedFields={touchedFields}
							/>

							<Input
								register={register}
								name="lastName"
								type="text"
								label={t("appointmentForm.inputLastName")}
								placeholder={t("appointmentForm.inputLastName")}
								errors={errors}
								isValid={isValid}
								touchedFields={touchedFields}
							/>

							<Input
								register={register}
								name="phone"
								type="text"
								label={t("appointmentForm.inputPhone")}
								placeholder={"+3 80 ХХ ХХХ ХХ ХХ"}
								errors={errors}
								isValid={isValid}
								touchedFields={touchedFields}
							/>

							<Input
								register={register}
								name="email"
								type="text"
								label={t("appointmentForm.inputEmail")}
								placeholder={"xxx@xxx"}
								errors={errors}
								isValid={isValid}
								touchedFields={touchedFields}
							/>

							<Checkbox
								register={register}
								setIsChecked={setIsChecked}
								isChecked={isChecked}
								toggleModal={toggleModal}
								errors={errors}
							/>
						</>
					)}

					{currentPartForm === 2 && (
						<>
							<SecondPageTitle>
								{t("appointmentForm.secondTitle")}
							</SecondPageTitle>

							<Select
								onChangeSelect={onChangeSelectSpec}
								label={t("appointmentForm.specializationSelectTitle")}
								defaultValue={t("appointmentForm.specializationSelectDefault")}
								options={specialization}
							/>

							<Select
								onChangeSelect={onChangeSelectLaw}
								label={t("appointmentForm.lawyerSelectTitle")}
								defaultValue={t("appointmentForm.lawyerSelectDefault")}
								options={lawyers}
							/>
						</>
					)}

					{currentPartForm === 3 && (
						<>
							<Calendar
								schedule={schedule}
								setValue={setValue}
							/>
						</>
					)}

					{currentPartForm === 4 && <SuccessPage />}

					{currentPartForm === 5 && (
						<FailurePage
							OnClickFunction={setCurrentPartForm}
							lawyer={getValues("lawyer_id")}
						/>
					)}

					<ButtonWrp>
						{(currentPartForm === 1 || currentPartForm === 2) && (
							<UpperButton
								onClick={onNextButton}
								type="button"
								aria-label="наступний крок"
								disabled={currentPartForm === 2 && getValues("lawyer_id") === 0}
							>
								{t("appointmentForm.nextButton")}
							</UpperButton>
						)}

						{currentPartForm === 2 && (
							<LowerButton
								onClick={onSkipAllSteps}
								type="button"
								aria-label="пропустити"
							>
								{t("appointmentForm.skipButton")}
							</LowerButton>
						)}

						{currentPartForm === 3 && (
							<UpperButton
								type="submit"
								aria-label="записатись на консультацію"
								disabled={getValues("appointment_time") === ""}
							>
								{t("appointmentForm.submitButton")}
							</UpperButton>
						)}

						{(currentPartForm === 1 || currentPartForm === 3) && (
							<LowerButton
								onClick={() => setModalActive(false)}
								type="button"
								aria-label="відмінити"
							>
								{t("appointmentForm.cancelButton")}
							</LowerButton>
						)}
					</ButtonWrp>
				</FormStyled>
			</FormWrp>
		</>
	);
};

AppointmentForm.propTypes = {
	setModalActive: PropTypes.func.isRequired,
};
