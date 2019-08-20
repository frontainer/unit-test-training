import validate from './validate'
const form = document.getElementById('js-form')
const postal1 = document.getElementById('js-postal-1')
const postal2 = document.getElementById('js-postal-2')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const val = `${postal1.value}-${postal2.value}`
  const result = validate(val)
  if (result.error) {
    alert(result.message)
    return
  }
  alert(`OK: ${val}`)
})