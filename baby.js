var sum = function(numbers) {
  return numbers.reduce(function(num1, num2) {
    return parseInt(num1) + parseInt(num2);
  });
};

console.log(sum(process.argv.slice(2)));
