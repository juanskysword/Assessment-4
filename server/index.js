const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];
   // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortune = ['A truly rich life contains love and art in abundance.',
  'A lifetime of happiness lies ahead of you.',
  'A lifetime friend shall soon be made.',
  'A lifetime of happiness lies ahead of you.',
	'A faithful friend is a strong defense.',
  ];
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get("/api/dogs", (req, res) => {
  const dog = "Who let the Dog out"
  res.status(200).send(dog);
  });
app.get("/api/Cats", (req, res) => {
    const cat = "Cats are Sleeping Right Now Come back Later"
    res.status(200).send(cat);
    });
app.get("/api/25", (req, res) => {
      const dexEntry = "Pikachu, the Mouse Pokémon. An Electric type. Pikachu have pouches on their cheeks that can store electricity, which they release if threatened. Male and female Pikachu have differently shaped tails."
      res.status(200).send(dexEntry);
      });

app.listen(4000, () => console.log("Server running on 4000"));
