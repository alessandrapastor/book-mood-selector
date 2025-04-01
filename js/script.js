// Simple data structure for demonstration
const recommendations = {
  adventurous: [
    { title: "Into the Wild", author: "Jon Krakauer" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" }
  ],
  nostalgic: [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Little Women", author: "Louisa May Alcott" }
  ],
  romantic: [
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "The Notebook", author: "Nicholas Sparks" }
  ],
  eerie: [
    { title: "Dracula", author: "Bram Stoker" },
    { title: "Coraline", author: "Neil Gaiman" }
  ]
};

// Get mood from URL
const params = new URLSearchParams(window.location.search);
const mood = params.get('mood');
const moodTitle = document.getElementById('mood-title');
const bookList = document.getElementById('book-list');

if (mood && recommendations[mood]) {
  moodTitle.textContent = `You're feeling ${mood}!`;

  recommendations[mood].forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.innerHTML = `<h3>${book.title}</h3><p>by ${book.author}</p>`;
    bookList.appendChild(bookDiv);
  });
} else {
  moodTitle.textContent = "Mood not found!";
}
