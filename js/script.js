function init() {
  var button = document.getElementById('entrybutton');

  function showMeText() {
    var textbox = document.getElementById('entryinput');
    var textValue = textbox.value;

    document.getElementById('textoutput').innerHTML = textValue;

    alert("Huzaifa Anis: " + textValue);
  }

  button.addEventListener('click', showMeText);
}

window.addEventListener('load', init);
