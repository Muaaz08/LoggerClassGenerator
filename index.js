const inputBox = document.querySelector("#inputLoggerClass");
const outputBox = document.querySelector("#outputLoggerClass");
const btnGenerate = document.querySelector("#btnGenerate");
const btnCopyToClipboard = document.querySelector("#btnCopyToClipboard");
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

let loggerList = [];

inputBox.addEventListener("focusout", () => {
  const logger = inputBox.value;

  loggerList = logger.split("\n");
  console.log(loggerList);
});

btnGenerate.addEventListener("click", () => {
  outputBox.value = "";
  loggerList.forEach((logger) => {
    if (logger.trim() === "") return;

    outputBox.value += generateLogStatement(logger);
    console.log(outputBox.value);
  });
});

btnCopyToClipboard.addEventListener("click", () => {
  outputBox.select(); // Select the textarea content

  navigator.clipboard
    .writeText(outputBox.value) // Write the selected content to clipboard
    .then(() => {
      console.log("Content copied to clipboard");
    })
    .catch((error) => {
      console.error("Failed to copy content to clipboard:", error);
    });
});

toggleSwitch.addEventListener("change", switchTheme, false);

function generateLogStatement(logger) {
  return `<logger name="${logger}">
    <level value="Debug"/>
</logger>\n`;
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}
