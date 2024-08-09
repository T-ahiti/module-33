
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data =>  displayPost(data))
}



function displayPost(posts){
    const postContainer = document.getElementById('post-container')
    for(const post of posts){
        const postdiv = document.createElement('div')
        postdiv.innerHTML = 
        `
        <h4>User-${post.userId}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Post Description: ${post.body}</p>
        `
        postContainer.appendChild(postdiv)
    }
}

loadPosts()

