/*
    An object called salaries is used to store the salaries of
    team members. Create a function that sums the total salaries.
*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

function sumSalaries(salaries) {
    let totalSalaries = 0;
    for(let key in salaries) {
        totalSalaries += salaries[key];
    }
    return totalSalaries;
}