// 循环数组，通过指定key生成新的object,通过object.values获得values
export const objectKeyValue = (arrays, prop) => {
  const object = {};
  arrays.forEach((item,key) => {
    object[key] = item[prop]
  });
  return Object.values(object);
}