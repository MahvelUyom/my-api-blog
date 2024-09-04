const id = new URLSearchParams(window.location.search).get('id');
const detailsContainer = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete-btn');
const renderDetails = async () => {
  const res = await fetch('http://localhost:3000/posts/' + id)
  const post = await res.json();
  console.log(post)

const template= `
<h1>${post.title}</h1>
<p>${post.body}</p>
`

detailsContainer.innerHTML= template;

}

deleteBtn.addEventListener('click', async(e) =>{
  e.preventDefault();
  const res =await fetch('http://localhost:3000/posts/' + id, {
    method: 'DELETE'
  })
  window.location.replace('./index.html')
})

window.addEventListener('DOMContentLoaded', () => renderDetails()) 