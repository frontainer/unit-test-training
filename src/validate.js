const PATTERN = /^[0-9]{3}-[0-9]{4}$/
export default val => PATTERN.test(val)

export function existsPostalCode(code) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.zipaddress.net/?zipcode=${code}`, {
      mode: 'cors'
    }).catch(e => {
      reject()
    }).then((res) => {
      return res.json()
    }).then(res => {
      if (res && res.data) {
        resolve(res.data)
      } else {
        reject()
      }
    })
  })
}