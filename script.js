var isDate = function (input) {
  // Check if the input is a valid Date object
  if (input instanceof Date && !isNaN(input.getTime())) {
    return true;
  }

  // Check if the input is a string or a number that can be parsed into a valid date
  if (typeof input === "string" || typeof input === "number") {
    const parsedDate = new Date(input);
    return parsedDate.toString() !== "Invalid Date";
  }

  // Return false for all other cases
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
