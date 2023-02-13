// 'USE STRICT';

// let gallery= document.querySelector('.gallery');
// let categories = document.querySelector('.categories');
// let category = document.getElementsByClassName('category');
 
// /////////////start addProject function /////////////// 

// const addProjects = function(value){


//   for(let i=0; i< value.length;i++){
   
//     gallery.innerHTML+=
//     `<figure class='category-id-${value[i].categoryId}'>
//           <img crossorigin="anonymous" src="${value[i].imageUrl}" alt="${value[i].title}">
//           <figcaption>${value[i].title}</figcaption>
//      </figure>`  
   
//    }

// }
//  /////////////end add project function /////////////// 
  
//  /////////////Start filterCategories function /////////////// 
//  const filterCategories = function(value,arrCategories){

//   arrCategories.forEach(element => element.addEventListener('click', function(){
  
//     arrCategories.forEach(btn => btn.classList.remove('active'));
//     this.classList.add('active');

//       let figure= document.querySelectorAll('.gallery>figure');

//         for(let i=0; i< value.length;i++){

//               figure[i].classList.remove('hide');
//               if(element.id == 'category-id-0'){
//                   figure[i].classList.remove('hide');
//               }else if(figure[i].className != element.id ){
//                   figure[i].classList.add('hide');
//               }
//          }

//   }));

// }
//  /////////////END filterCategories function /////////////// 


//   ////////////// Fetch Categories ////////////////// 

//    fetch('http://localhost:5678/api/categories')
//   .then((response) => response.json())
//   .then(function(value) {
    
//       for(i=0; i< value.length;i++){
      
//             categories.innerHTML+=
//             `<div class="category" id='category-id-${value[i].id}'>${value[i].name}</div>`;

//         }
//          ////////////// Fetch works ////////////////// 
//         const fetchWorks = async function (){
  
//           const res = await fetch('http://localhost:5678/api/works');
//           const data = await res.json(); 

//           addProjects(data);
          
//           let arrCategories = Array.prototype.slice.call(category);
//           console.log(arrCategories);
         
//           filterCategories(data,arrCategories);      
//         }
//           fetchWorks();
      
//       }).catch(function(err) {
//         // console.log('err');
//       });
     
//       /////////////END Fetch Categories /////////////// 
      





