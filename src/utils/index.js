export const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

export const normalizeUserName = (credentials) => {
  return `${credentials.first_name} ${credentials.last_name}`;
};
