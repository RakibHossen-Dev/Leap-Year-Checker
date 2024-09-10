function isLeapYear() {
  let year = document.getElementById("year").value;
  year = Number(year);

  if (isNaN(year) || year <= 0) {
    document.getElementById("output").innerHTML =
      "Please input a valid number 📝❗";
  } else if (year % 100 !== 0 && year % 4 === 0) {
    document.getElementById("output").innerHTML = "Leap Year 🐸";
  } else if (year % 100 === 0 && year % 400 === 0) {
    document.getElementById("output").innerHTML = "Leap Year 🐸";
  } else {
    document.getElementById("output").innerHTML = "Not Leap Year ❌";
  }
}
