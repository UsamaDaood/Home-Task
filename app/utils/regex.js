export const phoneNumberExp = /^[0-9]{1,13}$/;
export const passwordExp =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
export const formatCardNumber = value => {
  const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
  const onlyNumbers = value.replace(/[^\d]/g, '');

  return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
    [$1, $2, $3, $4].filter(group => !!group).join(' '),
  );
};
export const validateEmail = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
export const validateName = name => {
  const re = /^[a-zA-Z ]*$/;
  const spaceCheck = name.indexOf(' ') !== 0 && name.indexOf(' ') !== 1;
  return re.test(String(name)) && spaceCheck;
};

export const maskPhoneNo = phn => {
    return phn.replace(/\d(?=(?:\D*\d){4})/g, '*');
};

export const getExtensionOfFile = filePath => {
  return filePath.slice((Math.max(0, filePath.lastIndexOf(".")) || Infinity) + 1);
}
