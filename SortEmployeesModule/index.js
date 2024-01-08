function SortEmployees(inputData) {
  inputData.sort(function(a, b){
    return a.age - b.age;
  }).map(data => console.log(data))
}

module.exports = { SortEmployees };
