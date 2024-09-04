const container = document.querySelector('.blogs')
const searchForm = document.querySelector('.search')

const renderPosts = async () =>{
  let url = 'http://localhost:3000/posts';
   
  // if(term){
  //   url += `&q=${term}`
  // }

  const res = await fetch(url);
  const posts = await res.json();

  let template = '';
  posts.forEach(post =>{
    template+= `
   <div class = "post">
   <h2>${post.title}</h2>
   <p>${post.likes} likes</p>
   <p>${post.body.slice(0,200)}
   <a href= "./details.html?id=${post.id}">read more..</a>
   </div> `
  })

  container.innerHTML = template;
}

// searchForm.addEventListener('submit', (e)=>{
//   e.preventDefault();
//   renderPosts(searchForm.term.value.trim())
// })


window.addEventListener('DOMContentLoaded', ()=> renderPosts());





