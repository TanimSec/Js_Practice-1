function giveSalaam(name, salary) {
    return `Assalamu Alaikum ${name}. Apnara Shobai Kemon Achen? Apnader Salary amount dharjo kora hoyeche jothakrome ${salary}`
}
/* console.log(giveSalaam(`Tanim, Shuvo, Fahim, Joy, Nabil`, [50000, 60000, 70000, 80000, 90000])) */

// Arrow function syntax
/* const sayGreet = (name) => {
    return `Hello ${name}. How are you?`
}
 */

//Implicit return
const sayGreet = (name) => `Hello ${name}. How are you?`


console.log(sayGreet("Tanim"))