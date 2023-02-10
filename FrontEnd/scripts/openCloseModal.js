export function openCloseModel(){
const modifyProjectsBtn = document.querySelector('.modify--projects')     
const closeModelBtn = document.querySelector('.close--model');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

closeModelBtn.addEventListener('click', function(){

modal.classList.add('hide');
overlay.classList.add('hide');
})
 

modifyProjectsBtn.addEventListener('click', function(){
    modal.classList.remove('hide');
    overlay.classList.remove('hide');
    modal.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
})

overlay.addEventListener('click', function(){

    modal.classList.add('hide');
    overlay.classList.add('hide');
    })
}