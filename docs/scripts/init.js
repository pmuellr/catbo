/** @typedef { import("./types").UiContext } UiContext */

/** @type { () => void } */
export function init () {
  const uiContext = createUiContext()
  const window = uiContext.window

  window.addEventListener('load', (event) => {
    loaded(uiContext)
  })

  window.addEventListener('resize', (event) => {
    resize(uiContext)
  })
}

/** @type { (UiContext) => void } */
function loaded (uiContext) {
  console.log(`loaded!`)
}

/** @type { (UiContext) => void } */
function resize (uiContext) {
  console.log(`window.innerWidth x window.innerHeight: ${window.innerWidth} x ${window.innerHeight}`)
}

/** @type { () => UiContext } */
function createUiContext () {
  return {
    window: window
  }
}
