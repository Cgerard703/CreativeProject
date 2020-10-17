var api_key = "AIzaSyDNaEJHNnPmjdiV3R0tT4fh_57iYSVW7hg"
var mountain = "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key="+`${api_key}`

function getUrl () {

  fetch( mountain )
            .then(res => res.json())
            .then(books => showBooks(books))
}

function showBooks (books) {
  var bookdiv = document.getElementById("books")
books.items.forEach(book => {
  const div = document.createElement('div')
      const title = document.createElement('h3')
      title.innerText = book.volumeInfo.title
      const author = document.createElement('p')
      author.innerText = book.volumeInfo.authors
      const space = document.createElement('br')
      div.append(title, author, space)
      bookdiv.append(div)
})

}

getUrl()
