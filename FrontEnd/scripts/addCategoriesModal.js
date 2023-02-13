export const addCategoriesModal = async function (){ 
    
    const response = await fetch('http://localhost:5678/api/categories');
    const categoriesModal = await response.json();
    // create a function that generate display into the DOM
    
    const generateCategories = function(categories){
  
        for( let category of categoriesModal){
            
                const selectOptionsModal = document.querySelector('.input--container>select');
                selectOptionsModal.innerHTML += `<option  class ='categoryWork category-${category.id}'value="category-${category.id}">${category.name}</option>`
                  
            }
        }
        generateCategories();
    }