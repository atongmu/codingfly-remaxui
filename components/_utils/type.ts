/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-04 14:55:03
 * @LastEditTime: 2021-08-04 14:55:04
 * @FilePath: \young\src\_utils\type.ts
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
export const tuple = <T extends string[]>(...args: T) => args;

export const tupleNum = <T extends number[]>(...args: T) => args;
