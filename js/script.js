const recommendations = {
  adventurous: [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      description: "A hobbit's unexpected journey across Middle Earth."
    },
    {
      title: "Into the Wild",
      author: "Jon Krakauer",
      genre: "Biography/Adventure",
      description: "The true story of a young man's journey into the Alaskan wilderness."
    },
    {
      title: "Life of Pi",
      author: "Yann Martel",
      genre: "Adventure/Fiction",
      description: "A boy stranded on a lifeboat with a Bengal tiger."
    }
  ],
  nostalgic: [
    {
      title: "Little Women",
      author: "Louisa May Alcott",
      genre: "Classic",
      description: "The lives and dreams of four sisters growing up during the Civil War."
    },
    {
      title: "Anne of Green Gables",
      author: "L.M. Montgomery",
      genre: "Classic/Coming-of-age",
      description: "An imaginative girl transforms life in a small town."
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Classic/Teen Fiction",
      description: "A teen's angsty reflections on growing up in New York."
    }
  ],
  romantic: [
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Classic Romance",
      description: "The witty and passionate love story of Elizabeth Bennet and Mr. Darcy."
    },
    {
      title: "The Notebook",
      author: "Nicholas Sparks",
      genre: "Romance",
      description: "A lifelong love story that endures through memory and time."
    },
    {
      title: "Me Before You",
      author: "Jojo Moyes",
      genre: "Contemporary Romance",
      description: "A heart-wrenching romance between opposites."
    }
  ],
  eerie: [
    {
      title: "Dracula",
      author: "Bram Stoker",
      genre: "Gothic Horror",
      description: "A chilling classic that introduced the vampire to literature."
    },
    {
      title: "Coraline",
      author: "Neil Gaiman",
      genre: "Fantasy/Horror",
      description: "A girl enters a dark alternate world with a creepy twist."
    },
    {
      title: "Mexican Gothic",
      author: "Silvia Moreno-Garcia",
      genre: "Gothic Fiction",
      description: "A glamorous socialite investigates a haunted house in 1950s Mexico."
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  const moodTitle = document.getElementById("mood-title");
  const bookList = document.getElementById("book-list");
  const surpriseDiv = document.getElementById("surprise-book");

  // Mood page logic
if (mood && recommendations[mood]) {
  // Mood-based styling
  document.body.classList.add(`theme-${mood}`);

  moodTitle.textContent = {
    adventurous: "🌍 You're feeling adventurous!",
    nostalgic: "📖 You're feeling nostalgic!",
    romantic: "💘 You're feeling romantic!",
    eerie: "👻 You're feeling eerie!"
  }[mood] || `You're feeling ${mood}!`;

  recommendations[mood].forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book-card");
    bookDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Genre:</strong> ${book.genre}</p>
      <p>${book.description}</p>
    `;
    bookList.appendChild(bookDiv);
  });
}

  // Surprise page logic
  if (surpriseDiv) {
    const allBooks = Object.values(recommendations).flat();
    const randomBook = allBooks[Math.floor(Math.random() * allBooks.length)];

    surpriseDiv.innerHTML = `
      <h3>${randomBook.title}</h3>
      <p><strong>Author:</strong> ${randomBook.author}</p>
      <p><strong>Genre:</strong> ${randomBook.genre}</p>
      <p>${randomBook.description}</p>
    `;
  }
});

