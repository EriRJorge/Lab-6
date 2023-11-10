function greetAndGrill()
{
   let name = prompt("What is your name?")
   console.log("Good afternoon,"+" " + name +"!")
   const age = prompt("How many years old are you?")
   const daysInYear = 365.2422
   const daysInAge = Math.round(age * daysInYear)
   console.log("On your birthday this year, you'll have lived "+daysInAge+"±1 days.")
}