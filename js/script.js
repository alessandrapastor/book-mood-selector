document.addEventListener("DOMContentLoaded", () => {
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


  // Only run on surprise.html
  if (window.location.pathname.includes("surprise.html")) {
    const allBooks = Object.values(recommendations).flat();
    const spinBtn = document.getElementById("spin-btn");
    const spinner = document.getElementById("spinner");
    const resultDiv = document.getElementById("result");

    spinBtn.addEventListener("click", () => {
      spinner.style.display = "block";
      spinner.textContent = "Spinning... 🎲";
      resultDiv.style.display = "none";

      setTimeout(() => {
        const book = allBooks[Math.floor(Math.random() * allBooks.length)];

        spinner.textContent = "🎉 Here's your pick!";
        resultDiv.innerHTML = `
          <h3>${book.title}</h3>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Genre:</strong> ${book.genre}</p>
          <p>${book.description}</p>
        `;
        resultDiv.style.display = "block";
      }, 1500);
    });
  }
});
