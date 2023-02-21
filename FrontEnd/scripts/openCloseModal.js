export const  closeModal = function (){
    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector('.modal');
    const modifyProjectsBtn = document.querySelector('.modify--projects')     
    const closeModelBtn = document.querySelector('.close--model');


    const addProjectPhoto = document.querySelector('.submit--project--photo');
    addProjectPhoto.style.backgroundColor='#A7A7A7';
    const photoTitle = document.querySelector('#photo--title');
    photoTitle.value='';
    const uploadedPhotoPreview = document.querySelector('.uploaded--photo--preview');
    uploadedPhotoPreview.classList.add('hide');
    const uploadedPhotoContainer = document.querySelector('.uploaded--photo--container');
    uploadedPhotoContainer.classList.remove('hide');
    const uploadedDescription = document.querySelector('.uploaded-photo-description');
    uploadedDescription.innerText="jpg, png : 4mo max";
    uploadedDescription.style.color='#444444';
   
    modal.classList.add('hide');
   
    overlay.classList.add('hide');
    const firstContainerInModal = document.querySelector('.modal .container');
    firstContainerInModal.classList.remove('hide');
    const formContainerInModal = document.querySelector('.add--photo--container')
    formContainerInModal.classList.add('hide');
    const form = document.querySelector('.add--photo--form');
    const fileInput = document.querySelector('#file');

    fileInput.addEventListener("change", function(event) {
       let selectedFile = event.target.files[0];

        form.reset();
        selectedFile = null;
    });


  
}


export function openCloseModel(){

    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector('.modal');
    const modifyProjectsBtn = document.querySelector('.modify--projects')     
    const closeModelBtn = document.querySelector('.close--model');


   

closeModelBtn.addEventListener('click', (e)=>{

closeModal();
})
 
modifyProjectsBtn.addEventListener('click', (e)=>{
    modal.classList.remove('hide');
    overlay.classList.remove('hide');
    modal.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
})

overlay.addEventListener('click', function(){

    closeModal();
    });
        document.addEventListener('keydown', (e) => {
            if(e.key === 'Escape' && (!modal.classList.contains('hide'))){
                closeModal();
                }
            });
}


