let quotes = [
  "\"You don't want no problems, want no problems with me\" <br> - Chance The Rapper",
  "\"I don’t make songs for free, I make ’em for freedom <br> Don’t believe in kings, believe in the Kingdom\" <br> - Chance The Rapper ",
  "\"My village raised ‘em a child, come through the crib and it’s bustin’<br> You meet anyone from my city, they gon' say that we cousins\" <br> - Chance The Rapper",
  "\"I’d rather die like a man, than live like a coward.\" <br> - 2Pac Shakur",
  "\"My dream girl’s is behind me, feel like I’m James Early <br> The type of worship make Jesus come back a day early.\" <br> - Chance The Rapper ",
  "\"Everyday hit every wave, like I’m Hawaiian. I don’t surf the net, no I’ve never been on MySpace, too busy letting my voice vibrate, carving out my space in this world.\" <br> – Jay-Z ",
  "\"Just when you thought it was safe to come out <br> Infamous all in your face, in your mouth.\" <br> - Prodigy",
  "\"I'm Slim Shady, yes I'm the real Shady <br> All you other Slim Shadys are just imitating <br> So won't the real Slim Shady please stand up <br> Please stand up, please stand up?\" -Eminem"
];

function displayQuote() {

  let index = Math.floor(Math.random() * quotes.length);
  let div = document.querySelector("#quote");

  let quoteArray = `<div class="card">
              <img src="icons/favicon.png">
              <p>${quotes[index]}</p>
              <img src="icons/favicon.png">
              </div>`;

  div.innerHTML = quoteArray;
};

