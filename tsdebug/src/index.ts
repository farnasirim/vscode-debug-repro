async function main() {
  const button = document.createElement("button") as HTMLButtonElement;
  button.onclick = () => {
    console.log("one");
    debugger;
    console.log("two");
    console.log("three");
  };
  button.innerText = "debug";
  document.getElementById("root")!.appendChild(button);
}

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    main();
  }
};
