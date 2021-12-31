// Show the entered text in the input field
function showResult(num) {
  let value = document.getElementById("result").value;
  let append = value + num;
  document.getElementById("result").value = append;
}

function computeResult() {
  let value = document.getElementById("result").value;
//   Use built in eval function to evaluate expression
  let result = eval(value);
  document.getElementById("result").value = result;
}
// Reset the result field 
function reset() {
  document.getElementById("result").value = "";
}
