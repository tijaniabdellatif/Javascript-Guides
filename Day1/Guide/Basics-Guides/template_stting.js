const title = 'best reads in 2019';
const author = 'Jung';
const likes = 30;

//concatenation way 



//template string 
let result = `the blog called ${title} by ${author} has ${likes} likes `;
console.log(result);

//creating html templates 

let create = `

<h1> ${title}  </h1>
<p> By ${author} </p>
<span> this blog ${likes} likes </span>

`;

console.log(create);