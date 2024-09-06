 

/** TypeScriptの基本の型 */

// boolean
const bool: boolean = true;

// number 数値
const num: number = 0;

// string 文字列
const str: string = 'A';

// Array 配列
const arr1: Array<number> = [0, 1, 2];
const arr2: number[] = [0, 1, 2];

// tuple 特定の要素の配列
const tuple: [number, string] = [0, 'A'];

// any なんでも入る
const any1: any = false;

// void 関数の戻り値がない
const funcA = (): void => {
  const test = 'TEST';
};

// null 何もない
const null1: null = null;

// undefined 未定義
const undefined1: undefined = undefined;

// object
const obj1: object = {};
const obj2: { id: number; name: string } = { id: 0, name: 'AAA' };

