
function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsrs2(data))
}

function displayUsrs2(data){
    // console.log(data)
    // for(const user of data){
    //     console.log(user)
    // }
    const ul = document.getElementById('usersList')
    for(const user of data){
            console.log(user.name)
            const li = document.createElement('li')
            li.innerText= user.name
            ul.appendChild(li)
    }        
}