'use strict'

import { addPhotoGallery } from "./addPhotoGallery.js";
import { openCloseModel } from "./openCloseModal.js";
import { addCategoriesModal } from "./addCategoriesModal.js";
import { postWork } from "./postWork.js";



const gallery = document.querySelector('.gallery');
const categoriesEl = document.querySelector('.categories');
const categoryEl = document.getElementsByClassName('category');
const loginBtn = document.querySelector('#login');
const modifyProfilePicBtn = document.querySelector('.modify--profile');
const modifyProjectsBtn = document.querySelector('.modify--projects')
const modifiedCardsContainerEl =  document.querySelector('.modified--cards--container');
//create an empty array that we'll psuh into category names from fetched works api 
const arrCategories = [];

let token = window.localStorage.getItem("token");
// let userId = window.localStorage.getItem("userId");


// create an async function that fetch work api data from the url
const fetchWorks = async function (){ 

    const response = await fetch('http://localhost:5678/api/works');
    const works = await response.json();
   // create a function that generate display into the DOM
    const generateWork = async function(works){
    
            for( let work of works){
                const figure = document.createElement('figure');
                const imgElement = document.createElement('img');
                const figcaption = document.createElement('figcaption');
             
                imgElement.src=work.imageUrl;
                imgElement.crossOrigin='anonymous';
                figcaption.innerText=work.title;
                
                gallery.appendChild(figure);
                figure.appendChild(imgElement);
                figure.appendChild(figcaption);  

                //push category name of each object of works
                arrCategories.push(work.category.name);


             //add works to modified container
             const cardEl = document.createElement('div');
             cardEl.classList.add('card');
             const modImgEl = document.createElement('img');
             modImgEl.src=work.imageUrl;
             modImgEl.crossOrigin='anonymous';
             const editImgEl = document.createElement('h3');
             editImgEl.innerText='éditer';

            //add photos and elements to modal window 
            const deletePhotoBtn = document.createElement('button');
            deletePhotoBtn.classList.add('delete--photo')
            const trashBtn = document.createElement('i');
            trashBtn.classList.add('fa-sharp');
            trashBtn.classList.add('fa-solid');
            trashBtn.classList.add('fa-trash-can');
            trashBtn.classList.add('fa-xs');

            
             deletePhotoBtn.appendChild(trashBtn);

             modifiedCardsContainerEl.appendChild(cardEl);
             cardEl.appendChild(modImgEl);
             cardEl.appendChild(editImgEl);
             cardEl.appendChild(deletePhotoBtn);

             
             const deleteWork = async function(){
           
                  deletePhotoBtn.addEventListener('click', async (e)=>{
                   e.preventDefault()
          
                 async  function deleteData(event) {
                 
                    if (confirm("Are you sure you want to delete this data?")) {
                      await fetch(`http://localhost:5678/api/works/${work.id}`,{
          
                       method: "DELETE",
                       headers: {
                      
                       'Authorization': `Bearer ${token}`
                       },
                    
                           }).then((res) => console.log(res.json()))
                           .catch((error) => {
                               console.error('Error:', error);
                         });
                         return false;
                        }
                      }
                      deleteData();
                      return false;
                 })
   
          } 

      deleteWork();
  }

  
         }
    // call the function to display the images on the gallery section

    if (token) {
        console.log('user connected');
       
        generateWork(works)
        const categoryEl = document.querySelector('.category');
        categoryEl.classList.add('hide');
        loginBtn.innerText='logout'
        loginBtn.addEventListener('click',()=>  window.localStorage.removeItem("token"))
        modifyProfilePicBtn.classList.remove('hide');
        modifyProjectsBtn.classList.remove('hide')
        
      }else{
      
    generateWork(works)
    //Create an array of categories with no duplicates
    let arrCategoriesSet = [...new Set(arrCategories)]
    //Create a button from each unique category ( give it a className, an ID and innertext) and finally append it to the categories section
    for(let [key,category] of arrCategoriesSet.entries()){
        const categoryBtn = document.createElement('button');
        categoryBtn.classList.add('category');
        categoryBtn.innerText=category;
        categoryBtn.id=`category-id-${key+1}`;
        categoriesEl.appendChild(categoryBtn);
    }

    //Create an array of the HTMLcollection of ctageories buttons of the DOM   
    let arrCategoriesEl = Array.from(categoryEl);
    //for every click of the button change the active class and filter the categories in the gallery
    arrCategoriesEl.forEach(btn => btn.addEventListener('click', function(){
        
        //for every click on the category button (delete active class from all buttons and then add it to the button click)
        arrCategoriesEl.forEach(btn => btn.classList.remove('active')); 
        this.classList.add('active');
        
        //a function that filters works based on the category ID 
        const worksFiltered = works.filter(function(work){
            return work.categoryId === +btn.id.slice(-1);   
        });   
        //show the filtered data to the dom
        gallery.innerHTML='' ;
        generateWork(worksFiltered);
            
        if(btn.id.slice(-1)==0) generateWork(works);
        
    }));
}
}

fetchWorks();

openCloseModel();

addPhotoGallery();

addCategoriesModal();

postWork();