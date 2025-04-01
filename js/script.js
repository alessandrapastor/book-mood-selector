const recommendations = {
  adventurous: [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      description: "A hobbit's unexpected journey across Middle Earth.",
      cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg"
    },
    {
      title: "Into the Wild",
      author: "Jon Krakauer",
      genre: "Biography/Adventure",
      description: "The true story of a young man's journey into the Alaskan wilderness.",
      cover: "https://covers.openlibrary.org/b/id/8225266-L.jpg"
    },
    {
      title: "Life of Pi",
      author: "Yann Martel",
      genre: "Adventure/Fiction",
      description: "A boy stranded on a lifeboat with a Bengal tiger.",
      cover: "https://covers.openlibrary.org/b/id/8281992-L.jpg"
    }
  ],
  nostalgic: [
    {
      title: "Little Women",
      author: "Louisa May Alcott",
      genre: "Classic",
      description: "The lives and dreams of four sisters growing up during the Civil War.",
      cover: "https://covers.openlibrary.org/b/id/10523300-L.jpg"
    },
    {
      title: "Anne of Green Gables",
      author: "L.M. Montgomery",
      genre: "Classic/Coming-of-age",
      description: "An imaginative girl transforms life in a small town.",
      cover: "https://covers.openlibrary.org/b/id/10958395-L.jpg"
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Classic/Teen Fiction",
      description: "A teen's angsty reflections on growing up in New York.",
      cover: "https://covers.openlibrary.org/b/id/8226191-L.jpg"
    }
  ],
  romantic: [
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Classic Romance",
      description: "The witty and passionate love story of Elizabeth Bennet and Mr. Darcy.",
      cover: "https://covers.openlibrary.org/b/id/8319254-L.jpg"
    },
    {
      title: "The Notebook",
      author: "Nicholas Sparks",
      genre: "Romance",
      description: "A lifelong love story that endures through memory and time.",
      cover: "https://covers.openlibrary.org/b/id/7984916-L.jpg"
    },
    {
      title: "Me Before You",
      author: "Jojo Moyes",
      genre: "Contemporary Romance",
      description: "A heart-wrenching romance between opposites.",
      cover: "https://covers.openlibrary.org/b/id/8231995-L.jpg"
    }
  ],
  eerie: [
    {
      title: "Dracula",
      author: "Bram Stoker",
      genre: "Gothic Horror",
      description: "A chilling classic that introduced the vampire to literature.",
      cover: "https://covers.openlibrary.org/b/id/8231997-L.jpg"
    },
    {
      title: "Coraline",
      author: "Neil Gaiman",
      genre: "Fantasy/Horror",
      description: "A girl enters a dark alternate world with a creepy twist.",
      cover: "https://covers.openlibrary.org/b/id/8091016-L.jpg"
    },
    {
      title: "Mexican Gothic",
      author: "Silvia Moreno-Garcia",
      genre: "Gothic Fiction",
      description: "A glamorous socialite investigates a haunted house in 1950s Mexico.",
      cover: "https://covers.openlibrary.org/b/id/10762952-L.jpg"
    }
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
  bookDiv.classList.add('book-card');
  bookDiv.innerHTML = `
    <img src="${book.cover}" alt="${book.title} cover" class="book-cover">
    <h3>${book.title}</h3>
    <p><strong>Author:</strong> ${book.author}</p>
    <p><strong>Genre:</strong> ${book.genre}</p>
    <p>${book.description}</p>
  `;
  bookList.appendChild(bookDiv);
});

  moodTitle.textContent = "Mood not found!";
}
