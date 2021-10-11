var fetch=require('node-fetch')
// async function
async function fetchAsync() {
 // await response of fetch call
 let response = await
fetch('https://pollysnips.s3.amazonaws.com/bostonEmployeeSalaries.json');
 // only proceed once promise is resolved
 let data = await response.json();
 // only proceed once second promise is resolved
 return data;
}
// trigger async function
// log response or catch error of fetch promise
function findMaxSalary(data) {
// data.data[0] is the entry for the first person in the database.
// If we look at this array from the data, we see entry 18 (starting
// from 0) is the salary
 let maxSalary = 0;
 let indexOfMax = 0;
 for (var i=0; i < data.data.length; i++) {
 if (Number(data.data[i][11]) > maxSalary) {
 maxSalary=Number(data.data[i][11]);
 indexOfMax=i;
 }
 }
console.log('Salario Máximo Encontrado:',maxSalary,indexOfMax)
}
fetchAsync().then(data=>findMaxSalary(data)).catch(reason=>console.log(reason.message));
