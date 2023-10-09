// const url = `https://api.thecatapi.com/v1/breeds`;
// const api_key = "live_WOdcQUfLmhdwfkxIj4PXqU41tRJRS8UV6pb3MN483olXfZgUnMJO5h1iuaFZIfvP"
// let storedBreeds = []

// fetch (url, {headers: {
//       'x-api-key': api_key
//     }})

// .then((response) => {
//   return response.json();
// })

// .then((data) => {
//       //filter to only include those with an `image` object
//       storedBreeds = data;
//       data = data.filter(img=> img.image?.url!=null)
      
//       for (let i = 0; i < storedBreeds.length; i++) {
//         const breed = storedBreeds[i];
//         let option = document.createElement('option');
        
//         //skip any breeds that don't have an image
//         if(!breed.image)continue
        
//         //use the current array index
//         option.value = i;
//         option.innerHTML = `${breed.name}`;
//     document.getElementById('breed_selector').appendChild(option);
//     }
//    //show the first breed by default
//   showBreedImage(0)
// })

// .catch(function(error) {
//   console.log(error);
// });

// function showBreedImage(index)
// { 
//   document.getElementById("breed_image").src= storedBreeds[index].image.url;
  
//   document.getElementById("breed_json").textContent= storedBreeds[index].temperament
  
  
//   document.getElementById("wiki_link").href= storedBreeds[index].wikipedia_url
//   document.getElementById("wiki_link").innerHTML= storedBreeds[index].wikipedia_url
// }




const button = document.querySelector("button");
const img = document.querySelector("img");

button.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
        return response.json();
    })

    .then((jsonData) => {
      img.src = jsonData.message;
      img.alt = "A random ...";
      console.log(jsonData.status);
    })

    .catch((error) => {
      console.error("Error fetching blah blah...", error);
    })

    .finally (() => {
      console.log("Done fetching blah blah...")
    }); 
});





// const getPhotos = async () => {
//   const response = await fetch('https://dog.ceo/api/breeds/image/random');
//   const photos = await response.json();
//   return photos;
// }

//   async function displayPhotos() {
//     const photos = await getPhotos();
//     photos.forEach(photo => {
//       const img = document.createElement('img');
//       img.src = photo.thumbnailUrl;
//       document.body.appendChild(img);
//   })
// }

// displayPhotos;
