


let users 

const fetchUsers = async ()=>{

     await fetch('https://jsonplaceholder.typicode.com/users')
    
        .then(response => response.json())
    
        .then(userArray => users = userArray )

        const userContainer = document.querySelector(".users")
        
        users.forEach((user, i)=>{
            userContainer.innerHTML += `
            
            <div class="card">
                <h1 class="name">${user.name}</h1>
                <h4>address: ${user.address.street}</h4>
                <h4>email: ${user.email}</h4>
                <h6>Phone: ${user.phone}</h6>
                <h6>Company Name: ${user.company.name}</h6>
            </div>`
        })
}

fetchUsers()


let posts

const fetchPosts = async ()=>{

    await fetch('https://jsonplaceholder.typicode.com/posts')

      .then(response => response.json())

      .then(postArray => posts = postArray)

      const postContainer = document.querySelector(".posts")

      posts.forEach((post, i)=>{
        postContainer.innerHTML +=`
        <div class="eachPost">
           <h1>${post.id}</h1>
           <h3 class="title">${post.title}</h3>
           <p>${post.body}</p>
           
        </div>`
      })
}

fetchPosts()
  


const myBody = document.querySelector("body")

const button = document.querySelector(".btn")

const toggleDarkTheme = ()=>{
    myBody.classList.toggle("darkTheme")
}

  
button.addEventListener("click", toggleDarkTheme)