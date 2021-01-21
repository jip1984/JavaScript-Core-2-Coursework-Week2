function readingList(books) {
  // Write your code here...
  let content = document.getElementById('content');
  let h1 = document.createElement('h1');
  h1.innerHTML = `Booklist`;
  content.appendChild(h1);


  let unordered = document.createElement('ul');
  unordered.style.display = 'flex';
  unordered.style.flexWrap = 'wrap';
  unordered.style.padding = '30px';
  unordered.style.width = '100%';


  for (let i = 0; i < books.length; i ++) {
    let list = document.createElement('li');
    list.style.listStyleType = 'none';
    list.style.margin = '30px';
    list.style.width = '25%';

    if (books[i].alreadyRead === true) {
      list.style.backgroundColor = 'green';
    } else {
      list.style.backgroundColor = 'red';
    }

    let paragraph = document.createElement('p');
    paragraph.style.fontSize = '10px';
    paragraph.innerHTML = `${books[i].title} - ${books[i].author}`;

    let image = document.createElement('img');
    image.style.width = '50%';
  
    image.src = books[i].imageCover;
    // image.appendChild(paragraph);
    list.appendChild(paragraph);
    list.appendChild(image);
    unordered.appendChild(list);
    h1.appendChild(unordered);
  }
}

/*Render the list of books on the page. Each book should have a title, author and image and a background colour that is set dependent on whether we have read the book or not.

## Exercise

- Iterate through the list of books.
- For each book, create a `<p>` element with the book title and author and append it to the page.
- Use a `<ul>` and `<li>` to display the books.
- Add an `<img>` to each book that links to a URL of the book cover.
- Change the style of the book depending on whether you have read it (green) or not (red).
- All of your HTML should go inside the `<div>` with the id **"content"**.

The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/*/

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    imageCover: 'https://m.media-amazon.com/images/I/51Dl6lXXesL._SL500_.jpg'
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    imageCover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg'
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    imageCover: 'https://m.media-amazon.com/images/I/51A8l+FxFNL._SL500_.jpg'
  }
];

readingList(books);