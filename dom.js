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

// //get elemets by tag name 
// const items = document.getElementsByTagName('li');
// //task : Make the 3 rd element in the list have green background color
// items[2].style.background = 'green' ;
//  // Make all the elements in the list have bold color font
//  for(let i=0;i<items.length ; i++){
//     items[i].style.fontWeight = 'bold';
//  }

//querySelector - for one element   #id  .class
//querySelectorAll for multiple 

// const secounditem = document.querySelector('.list-group-item:nth-child(2)');
// // console.log(secounditem);
// secounditem.style.background = ' green ';


// const thirditem = document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.display = 'none';

const items = document.querySelectorAll('.list-group-item');

items[1].style.color = 'green';

const odd=  document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odd.length;i++){
    odd[i].style.background = 'green';
}

