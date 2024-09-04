const form = document.querySelector('form');

const createPost = async (e) =>{
  e.preventDefault();

  const randomLikes = Math.floor(Math.random() * 40);
  // console.log(randomLikes);

  const doc = {
    title: form.title.value,
    body: form.body.value,
    likes:randomLikes
  }
  await fetch('http://localhost:3000/posts',{
    method:'POST',
    body: JSON.stringify(doc),
    headers: { 'Content-Type':'application/json'}
  });

  window.location.replace('../dummy blog with APIs/index.html');
}

form.addEventListener("submit", createPost) 