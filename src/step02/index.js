/**
 * 郵便番号の形式かどうかをチェックする
 * @param val: string
 * @returns {boolean}
 */
export function isValidPostalCode(val) {
  return /[0-9]{3}-[0-9]/.test(val)
}

/**
 * 電話番号の形式かどうかをチェックする(ハイフン区切りあり)
 * @param val: string
 * @returns {booelan}
 */
export function isValidPhoneNumber(val) {
  return /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/.test(val)
}

/**
 * オブジェクトを含む配列の中から指定したkey,valueが一致したインデックスと値を返す
 * @param arr: {[key: string]: any}[]
 * @param value: any
 * @returns {{index: number, key: string | number, value: any} | null}
 */
export function findAndIndex(arr, key, value) {
  for (let i = 0, len = arr.length - 1; i < len; i++) {
    if (arr[i][key] == value) {
      return {
        index: i,
        value: arr[i]
      }
    }
  }
  return null
}

/**
 * 文字列に含まれるすべての-（ハイフン）を取り除く
 * @param str: string
 * @returns {string}
 */
export function removeHyphen(str) {
  return str.replace(/-/, '')
}

/**
 * 文字列の先頭と末尾のスペースをすべて取り除く
 * @returns {string}
 */
export function trimSpace(str) {
  return str.replace(/(^\s)|(\s$)/g, '')
}

/**
 * 配列の指定された２つのインデックスの値を入れ替える
 * @param arr: any[]
 * @param a: number
 * @param b: number
 * @returns {any[]}
 */
export function swap(arr, a, b) {
  const tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
  return arr
}

/**
 * fromに指定されたインデックスのアイテムをtoに指定されたインデックスに入れ直す
 * @param arr: any[]
 * @param from: number
 * @param to: number
 * @returns {any[]}
 */
export function reorder(arr, from, to) {
  const [item] = arr.splice(from, 1)
  arr.splice(to + 1, 0, item)
  return arr
}
