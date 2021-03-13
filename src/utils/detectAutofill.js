export const detectAutofill = (element) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(window.getComputedStyle(element, null).getPropertyValue('appearance') === 'menulist-button')
    }, 750)
  })
}
