export interface UiContext {
  window: Window;
}

// stuff below here just to test whether the types are working as we'd like
function testUiContext(uiContext: UiContext) {
  const window = uiContext.window

  console.log(window.location.hostname)
}

