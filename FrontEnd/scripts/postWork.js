export const postWork = async function(){
    let token = window.localStorage.getItem("token");
    const form = document.querySelector('.add--photo--form');
    const fileInput = document.querySelector('#file');
    const file = fileInput.files[0];

    const selectOptoin = document.getElementsByClassName('categoryWork');
  

    let selectedFile = null;
   
    
      fileInput.addEventListener("change", function(event) {
      selectedFile = event.target.files[0];

    const endpoint = "http://localhost:5678/api/works";
    const photoTitle = document.querySelector('#photo--title');
    console.log(selectOptoin);
    
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
    
    async function uploadImage(endpoint, token) {
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("title", photoTitle.value);
      formData.append("category", 2);
    
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: formData
      });
    
      return await response.json();
    };
    uploadImage(endpoint,token)
    });
    
    photoTitle.value='';
});
}
