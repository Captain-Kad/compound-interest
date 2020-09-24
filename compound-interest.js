function calcCompoundInterest() {
  var p = document.getElementById("principal").value;
  var r = document.getElementById("rate").value;
  var n = document.getElementById("numberOfTimes").value;
  var t = document.getElementById("years").value;

  if (!p) {
    alert("Please enter a number in each of the following fields");
    return;
  } else if (!r) {
    alert("Please enter a number in each of the following fields");
    return;
  } else if (!n) {
    alert("Please enter a number in each of the following fields");
    return;
  } else if (!t) {
    alert("Please enter a number in each of the following fields");
    return;
  }

  var rSimplified = r / 100;
  var rOverN = rSimplified / n;
  var x = 1 + rOverN;
  var nt = n * t;
  var xExponentNT = Math.pow(x, nt);
  var compoundInterest = p * xExponentNT;
  var compoundInterestRounded = compoundInterest.toFixed(2);
  document.getElementById("result").innerHTML = [
    "The Compound Interest is, " + compoundInterestRounded,
  ];
}
