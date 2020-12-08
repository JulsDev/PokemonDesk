export default function toCapitalizeFirstLetter(str: string) {
  const arrStr = str.split('');

  const firstLetter = arrStr[0].toUpperCase();
  const allLetter = str.substring(1, str.length).toLowerCase();

  const result = firstLetter + allLetter;

  return result;
}
