// https://gist.github.com/espavoru/3dd3d261501701a22b6cead6c82f319f
// https://gist.github.com/espavoru?direction=asc&page=7&sort=created

function setup() {
  let textInput;

  textInput = document.createElement("input");
  textInput.className = "message";
  document.querySelector("#app").appendChild(textInput);

  textInput.focus();
}

window.addEventListener("DOMContentLoaded", setup);

window.addEventListener("beforeunload", e => {
  let message = "Data will not save. Proceed?";
  e.returnValue = message;

  return message;
});
