# Javascript-Guides
It's a bunch of Javascript guides



//Workshop "1" day3
Create a function that takes an array with objects and returns the sum of people's Money

don't Forget to use Array methods to do the exercice otherwise feel free to do it by the way you feel right, Data Structures is the main goal of the exercice

hints

getMoney([
  { name: "amine", age: 21, budget: 15000 },
  { name: "hamid",  age: 32, budget: 40000 },
  { name: "soufiane",  age: 16, budget: 3500 }
]) ➞ return(Some of money)

/////////////////////////////////////////////////////////////////////////

//workshop "2" day3 
Create a function that determines whether an order is eligible for free shipping.
the condition is :
if(total > 50)
{
  feel free to shop
}
hints

free(
  { "tomate": 5.99, "thon": 15.99 }
  ) ➞ false

free(
  { "Monopoly": 11.99, "parshi": 35.99, "dadossa": 13.99 }
  ) ➞ true

try to use the loop for(const key in array)

///////////////////////////////////////////////////////////////////////////////////

workshop "3" day3 

with a given Object containing the name and age as proprety

Make a function that return the teenager person Among them.

hints

people({
  amine: 71,
  hamid: 45,
  salim: 15,
  karim: 29
}) ➞ "salim"

//'chick same links in GITHUB'

/////////////////////////////////////////////////////////////////////////////////////

//workshop "4" day3

Create a function that takes an array of objects like { name: 'amine', notes: [3, 5, 4]} and returns an array of objects like { name: "John", topNote: 5 }.

If the person has no notes (an empty array) so the topNote: 0.

hints

[
  { name: "amine", notes: [3, 5, 4]}
]
 ➞ return 
[
  { name: "amine", topNote: 5}
]


/////////////////////////////////////////////////////////////////////////////////////////

{$day/'4'}:


Workshop 1:
Making a simple to Do list :
__in this workshop we will aprehend what we have seen in DOM and simple events handling

Steps to create the project are:

Using the Given HTML template :
__Create an Event on the input('keypress') and on the button('click') allowing us to add list of Todos

__add an Event that delete the items from the list of item.

__when Adding a new Item, a delete icon is added automatically and control the delete.

__Use refactoring to make the code clean and dry