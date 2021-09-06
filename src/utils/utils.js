export const formatDate = (date) => {
  const strToDate = new Date(date);

  let formattedDate = strToDate.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return formattedDate;
};

export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
