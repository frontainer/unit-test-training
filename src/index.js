import validate, { existsPostalCode } from './validate'
const form = document.getElementById('js-form')
const postal1 = document.getElementById('js-postal-1')
const postal2 = document.getElementById('js-postal-2')

let checking = false
form.addEventListener('submit',  (e) => {
  e.preventDefault()
  if (checking) return
  checking = true

  const val = `${postal1.value}-${postal2.value}`
  const result = validate(val)
  if (!result) {
    checking = false
    return alert('NG')
  }

  existsPostalCode(`${postal1.value}${postal2.value}`).then(address => {
    checking = false
    alert(`OK: ${val}`)
  }, () => {
    checking = false
    alert('NG')
  })
})