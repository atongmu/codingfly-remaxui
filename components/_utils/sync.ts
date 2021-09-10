/*
 * @Author: codingfly
 * @Description:
 * @Date: 2021-08-04 14:54:17
 * @LastEditTime: 2021-08-26 15:12:45
 * @FilePath: \young\src\_utils\sync.ts
 */

const sync = (fn: Function, ...args: any[]): Promise<any> => {
  return new Promise((resolve, reject) => {
    const obj = { ...args[0] };
    const success = obj.success;
    obj.success = function (...params: any[]) {
      success && success.apply(this, ...params);
      const r = params.length > 1 ? params : params[0];
      resolve(r);
    };
    const fail = obj.fail;
    obj.fail = function (...params: any[]) {
      fail && fail.apply(this, ...params);
      const r = params.length > 1 ? params : params[0];
      reject(r);
    };
    fn(obj);
  });
};

export default sync;
