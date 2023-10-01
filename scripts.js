const handleClick = () => {
  // document.getElementsByClassName("resume-panel").innerHTML = "Button clicked!";
  alert("hi");
};

const myButton = document.getElementsByClassName("resume-panel");

myButton.onclick = () => {
  handleClick();
};
