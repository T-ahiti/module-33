
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data =>  displayPost(data))
}



function displayPost(posts){
    for(const post of posts){
        console.log(post)
    }
}

loadPosts()