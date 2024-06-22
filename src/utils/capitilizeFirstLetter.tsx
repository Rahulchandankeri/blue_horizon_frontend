const capitilizeFirstLetter = (string: string) => {
  if (!string) return;

  const splittedString = String(string).split('');
  const capilizedString = splittedString?.[0]?.toUpperCase() + splittedString?.slice(1, string.length).join('');

  return capilizedString || string;
};
export default capitilizeFirstLetter;
