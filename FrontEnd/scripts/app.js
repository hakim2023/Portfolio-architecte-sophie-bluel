const gallery = document.querySelector('.gallery');
const categoriesEl = document.querySelector('.categories');
const categoryEl = document.getElementsByClassName('category');
//create an empty array that we'll psuh into category names from fetched works api 
const arrCategories = [];


// create an async function that fetch work api data from the url
const fetchWorks = async function (){ 

    const response = await fetch('http://localhost:5678/api/works');
    const works = await response.json();
   // create a function that generate display into the DOM
    const generateWork = function(works){

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
        }
    }
    // call the function to display the images on the gallery section
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
        (btn.id.slice(-1)==0) ? generateWork(works) : gallery.innerHTML='' ;
        generateWork(worksFiltered);

    }));

}

fetchWorks();





 
   