export const REGEX_EMAIL =
  /^[a-zA-Z\d._-]{2,}@[a-zA-Z\d.-]+(?!\.ru|\.by)\.[a-zA-Z]{2,}$|^\s*$/gm;
export const REGEX_PHONE = /\+380[3-9]\d{8}$/;
export const REGEX_NAME = /^[a-zA-ZА-ЩЬЮЯҐЄІЇа-щьюяґєії'`’ʼ" -]{2,}|^\s*$/gm;

export const APPOINTMENT_400 = 'Date not available for this lawyer';
export const APPOINTMENT_200 = 'Appointment created successfully';
