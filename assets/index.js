window.addEventListener("message", message => {
  window.ReactNativeWebView.postMessage(`${message.data}`);
});
