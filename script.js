var isDate = function (input) {
	if (input instanceof Date && !isNaN(input)) {
    // Check if the input is a valid Date object
    return true;
  }

  if (typeof input === "string" || typeof input === "number") {
    const parsedDate = new Date(input);
    // Check if the parsed date is valid
    return !isNaN(parsedDate);
  }

  // If the input is neither a valid Date object nor a parsable string/number
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
