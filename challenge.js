/*

Create a function that takes in:
an integer that represents a number of years,
a 2 dimensional matrix filled with 0s and 1s that describes a garden. 1s represent hedges, and 0s represent empty spaces. 
The function should simulate the growth of hedges over the given number of years, according to the following rules:
An empty square which is adjacent to a hedge (including diagonally) will be filled in the next year. 
A square which is filled with a hedge will be empty the following year if it is surrounded on all eight sides by other hedges, which prevents it from getting enough sun. Note that hedges on the edge squares will always get enough sun.
Any other squares will be left intact.


*/

function fun(num, mat) {
  ///we can implement it using recursive approach
  //if num==0 return the mat  [base case]
  ///else
  /// apply the rules
  ///create function to search for empty cells which is adjacent to a hedge and replace it with '1' call it [fillFun] function
  ///create function to search for a hedge cell that is surrounded from all direction and replace it with '0'  call it [emptyFun]
  ///num--;
  ///call the function
  ///[fillFun]
  ///create an empty Set
  ///scan the matrix
  ///when hitting '1' look in eight directions and store the coordinates of any '0' cell and add it to the set
  ///when finish scanning fill all the cells stored in the Set with '1'
}

test1Mat1 = [
  [0, 0, 1],
  [0, 0, 0],
];
years1 = 1;
/*

the final matrix will be:
[[0, 1, 1],
 [0, 1, 1]]
and the function should output 6. Here are the six pairs of adjacent hedges in this garden:
[[0, 1, 1],    [[0, 1, 1],    [[0, 1, 1],    [[0, 1, 1],    [[0, 1, 1],    [[0, 1, 1],
 [0, 1, 1]]     [0, 1, 1]]     [0, 1, 1]]     [0, 1, 1]]     [0, 1, 1]]     [0, 1, 1]]

*/

test2 = [
  [1, 0, 0, 0],
  [1, 1, 0, 0],
  [1, 0, 0, 1],
];
years2 = 2;

/*
the final matrix will be:
[[1, 1, 1, 1],
 [1, 0, 1, 1],
 [1, 1, 1, 1]]

 */
