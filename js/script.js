document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("entrybutton");
  const input = document.getElementById("entryinput");
  const output = document.getElementById("textoutput");

  button.addEventListener("click", function() {
    const userInput = input.value;

    
    alert("Huzaifa Anis: " + userInput);

    output.textContent = userInput;
  });
});
