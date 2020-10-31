// Работа с типами
function concat(firstStr: string, secondStr: string) : string {
  return firstStr + secondStr;
}
console.log(concat('Hello ', 'World')); // -> Hello World;


// Работа с интерфейсами
type SimeArrayType = string | number;

interface IWithData {
  howIDoIt: string,
  simeArray: SimeArrayType[],
}

interface IMyHometask {
  howIDoIt: string,
  simeArray: SimeArrayType[],
  withData: IWithData[],
};

const MyHometask: IMyHometask = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [
    { 
      howIDoIt: "I Do It Wel",
      simeArray: ["string one", 23]
    }
  ],
}

// Типизация функций, используя Generic
interface MyArray<T> {
  [N: number]: T;
	reduce<T>(fn: (prevElem: T, curElem: T, index: number, array: T[]) => T) : T;
}

const euros: MyArray<number> = [29.76, 41.85, 46.5];
const eurosStr: MyArray<string> = ['29.76', ', ', '41.85', ', ', '46.5'];

console.log(euros.reduce((prevElem, curElem) => prevElem + curElem));
console.log(eurosStr.reduce((prevElem, curElem) => prevElem + curElem));


