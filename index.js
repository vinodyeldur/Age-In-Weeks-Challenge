function lifeInWeeks(age) {
    
  var yearsRemaining = 90 - age;
  var x = yearsRemaining * 365;
  var y = yearsRemaining * 52;
  var z = yearsRemaining * 12;
  
    console.log("You have" + x + "days" + y + "weeks and" + z + "months in a year.")
  
}

lifeInWeeks(12);