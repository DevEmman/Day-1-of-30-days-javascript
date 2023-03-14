// EXERCISE: LEVEL 1

/*
(Question 1)
Explain the difference between forEach, map, filter, and reduce.
 */

/* 

- forEach is use to iterate an array elements and also takes a callback
function with elements, index parameter and array itself. the index and the array is optional.
 
- map iterate an array elements and modify the array elements. it takes a callback function
with elements, index, array parameter and return a new array.

- filter is use to filter out items which full fill filtering conditions and return a new array.

- reduce takes ac callback function.the call back takes accomodation,current and initial value as
a parameter and returns a single value.

*/

/*
(Question 2)
Define a callback function before you use it in forEach, map,
 filter or reduce.
*/

// - Callback function is use to passed function as a parameter to other builtin function.



const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

/*
(Question 3)
Use forEach to console.log each country in the countries array.
 */

countries.forEach((countriest) => console.log(countries))

/*
(Question 4)
Use forEach to console.log each name in the names array.
*/
names.forEach((names) => console.log(names))

/*
(Question 5)
Use forEach to console.log each name in the names array.
*/
numbers.forEach((numbers) => console.log(numbers))

/*
(Question 6)
Use map to create a new array by changing each country to uppercase in the countries array.
*/

const toUpperCase = countries.map((countries) => countries.toUpperCase())
console.log(toUpperCase)

/*
(Qestion 7)
Use map to create an array of countries length from countries array.
*/

const length = countries.map((countries) => countries.length)
console.log(length)

/*
(Question 8)
Use map to create a new array by changing each number to
square in the numbers array
*/

const squre = numbers.map((numbers) => numbers * numbers)
console.log(squre)

/*
(Question 9)
Use map to change to each name to uppercase in the names array
*/

const nameToUprCase = names.map((names) => names.toUpperCase())
console.log(nameToUprCase)

/*
(Question 10)
Use map to map the products array to its corresponding prices.
*/

const correspond = products.map((product) => `${product.product}: ${product.price}`)
console.log(correspond)

/*
(Question 11)
Use filter to filter out countries containing land.
*/

const containLand = countries.filter((countries) => countries.includes('land'))
console.log(containland)

/*
(Question 12)
Use filter to filter out countries having six character.
*/

const sixcharact = countries.filter((countries) => countries.length <= 6);
console.log(containLand)

/*
(Question 13)
Use filter to filter out countries containing six letters and more in the country array.
*/

const sixletter = countries.filter((countries) => countries.length >= 6);
console.log(containLand)


/*
(Question 14)
Use filter to filter out country start with 'E';
*/

const endwith= countries.filter((countries) => countries.startsWith('E'))
console.log(endwith)

/*
(Question 15)
Use filter to filter out only prices with values.
*/

const price = products.filter(({price}) => Number(price));
console.log(price)

/*
(Question 16)
Declare a function called getStringLists which takes an array as a parameter 
and then returns an array only with string items.
*/

function getStringLists (arr) {
    const stringList = arr.filter((name) => typeof name === 'string');
    return stringList
}
console.log(getStringLists(['man','man']))


/*
(Question 17)
Use reduce to sum all the numbers in the numbers array.
*/


const reduceSum = numbers.reduce((acc,numbers) => acc + numbers,0);
console.log(reduceSum)


/*
(Question 18)
Use reduce to concatenate all the countries and to produce 
this sentence: Estonia, Finland, Sweden, Denmark, Norway, 
and IceLand are north European countries
*/

const allcountries = countries.reduce((acc, curr) => acc, countries);
console.log('Estonia,' + allcountries + ' ' + 'are' + ' ' + 'north' + ' ' + 'European' + ' ' + 'countries')

/*
(Question 19)
Explain the diffence between some and every
*/

// some check if some of the element are similar in 0ne SVGPreserveAspectRatio.it returns boolean
 
     while

// every check if all the items are similar in one SVGPreserveAspectRatio. it return boolen

/*
(Question 20)
Use some to check if some names' length greater than seven in names array
*/

const check = names.some((names) => names.length > 7)
console.log(check)