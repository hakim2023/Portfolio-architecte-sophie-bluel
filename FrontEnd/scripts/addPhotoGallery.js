export const addPhotoGallery =  function(){

const firstContainerInModal = document.querySelector('.modal .container');
const formContainerInModal = document.querySelector('.add--photo--container')
const backBtn = document.querySelector('.back--btn');
const addPhotoBtn = document.querySelector('.add--photo')


addPhotoBtn.addEventListener('click',function(){
    firstContainerInModal.classList.add('hide');
    formContainerInModal.classList.remove('hide');

})

 backBtn.addEventListener('click', function(){
          firstContainerInModal.classList.remove('hide');
          formContainerInModal.classList.add('hide');

 });

const photoInput = document.querySelector('#file');
const uploadedDescription = document.querySelector('.uploaded-photo-description');



    photoInput.addEventListener("change", async function (event) {  
        const fileSize = photoInput.files.item(0).size;


        if ( fileSize > 4000000) {
       uploadedDescription.innerText="La taille de la photo doit être inférieure à 4 Mo";
       uploadedDescription.style.color='red';
        }else{
            const uploadedImgSrc = URL.createObjectURL(event.target.files[0]);
            const uploadedPhotoPreview = document.querySelector('.uploaded--photo--preview');
            uploadedPhotoPreview.classList.remove('hide');
            const uploadedPhotoContainer = document.querySelector('.uploaded--photo--container');
            uploadedPhotoContainer.classList.add('hide');
            const uploadedPhoto = document.querySelector('.uploaded--photo--preview>img');
            uploadedPhoto.src=uploadedImgSrc;
            // console.log(uploadedImgSrc);
            const photoTitle = document.querySelector('#photo--title');

        }      
            const addProjectPhoto = document.querySelector('.submit--project--photo');
            addProjectPhoto.style.backgroundColor='#1D6154';
      
      });
}