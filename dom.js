// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);

// const headertitle = document.getElementById('header-title');
// console.log(headertitle);
// headertitle.textContent = 'hello';
// headertitle.innerText = 'hello2'  // pays attenion to sytling wont show if hidden
// headertitle.innerHTML='<h3>Hello</h3>';
// headertitle.style.borderBottom = 'solid 3px #000';

const header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';
const additems = document.getElementById('add-items');
additems.style.color = ' green ';
additems.style.fontWeight = 'bold';
 

// const items = document.getElementsByClassName('list-group-item');
// //task : Make the 3 rd element in the list have green background color
// items[2].style.background = 'green' ;
//  // Make all the elements in the list have bold color font
//  for(let i=0;i<items.length ; i++){
//     items[i].style.fontWeight = 'bold';
//  }

//get elemets by tag name 
const items = document.getElementsByTagName('li');
//task : Make the 3 rd element in the list have green background color
items[2].style.background = 'green' ;
 // Make all the elements in the list have bold color font
 for(let i=0;i<items.length ; i++){
    items[i].style.fontWeight = 'bold';
 }