document.addEventListener("DOMContentLoaded", function() {});


document.addEventListener("DOMContentLoaded", function() {});

const bookUl=document.querySelector("#list")

const showPanelDiv=document.querySelector("#show-panel")
const detailsImg=document.createElement("img")
const title=document.createElement("p")
const subTitle=document.createElement("p")
const author=document.createElement("p")
const description=document.createElement("p")
const userUl= document.createElement("ul")
const userLi= document.createElement("li")


showPanelDiv.appendChild(detailsImg) //, title, subTitle, author, description, userUl, userLi)
showPanelDiv.appendChild(title)
showPanelDiv.appendChild(subTitle)
showPanelDiv.appendChild(author)
showPanelDiv.appendChild(description)
showPanelDiv.appendChild(userUl)
//showPanelDiv.appendChild(userLi)

const likeBtn= document.createElement("button")


// const showLi=document.createElement("li")
// showUl.appendChild(showLi)


fetch("http://localhost:3000/books")
.then((response) => response.json())
.then(books => {
    books.map(books => {
        let bookLi= document.createElement("li")
        bookLi.textContent=books.title
        bookUl.appendChild(bookLi)
        
        //book's thumbnail
        //description and a 
        //list of users who have liked the book
    
        bookLi.addEventListener("click", (e) => {
            e.preventDefault()
            detailsImg.src=books.img_url
            title.textContent = books.title
            subTitle.textContent = books.subtitle
            author.textContent = books.author
            description.textContent = books.description

                let userArray=books.users
                userArray.map(users => {
                    let userLi= document.createElement("li")
                    userLi.textContent=users.username
                    showPanelDiv.appendChild(userLi)
                })
        })
    })
    
})
//showDetails()

//})


// function showDetails(books){
//     let thumbnail = books.img_url
//     let description = books.description
//     let listOfUsers = Object.values(books)
//     //console.log(Object.values(books))
// }