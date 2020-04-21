//work4


const msg = prompt( "enter ton age "),
  X = Number(msg);

  if( X<18){
      alert(`sorry, i don't let you drive me`);

  }
else if (X===18){
    alert(`yes ,i can let you drive me Carefully`);
}
else{
    alert(`yes,i can let you drive me`);
}

// switch(X) {
//     case X < 18 :
//         alert(`sorry, i don't let you drive me`)
//      break;
    
//      case X === 18 :
//         alert(`yes ,i can let you drive me Carefully`)
//      break;

//      default :
//      alert(`yes,i can let you drive me`)
//      break
     
// }
