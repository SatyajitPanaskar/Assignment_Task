const actorActressData = [
  {
    name: "Akshay Kumar",
    movies: [
      "Phir Hera Pheri",
      "Rowdy Rathore",
      "Holiday",
      "Sooryavanshi",
      "Kesari",
    ],
  },
  {
    name: "Ranbir Kapoor",
    movies: ["Brahmāstra", "Animal", "Ae Dil Hai Mushkil", "Sanju"],
  },
  {
    name: "Shah Rukh Khan",
    movies: [
      "Chennai Express",
      "Happy New Year",
      "Pathaan",
      "Jawan",
      "Baazigar",
    ],
  },
  {
    name: "Amitabh Bachchan",
    movies: ["Sholay", "Mohabbatein", "Shahenshah", "Mard"],
  },
  {
    name: "Hrithik Roshan",
    movies: ["Koi Mil Gaya", "Krrish", "Krrish 3", "War", "Fighter"],
  },
];

//This method will search for actor or actress names based on the given movie name.

function findActorByMoviesName(movieName) {
  const temp = [];
  if (!movieName || typeof movieName !== "string") {
    return "Invalid Movie Name Provided Valid Movie Name";
  }

  actorActressData.forEach((ele) => {
    if (ele.movies.includes(movieName)) {
      temp.push(ele.name);
    }
  });

  if (temp.length === 0) {
    return "No actors were found...";
  }
  return temp;
}

//  This method will search for movie names based on the given actor or actress name.
function findMoviesByActorName(actorName) {
  if (!actorName || typeof actorName !== "string") {
    return "Invalid Input.. Provided Valid Actor Name";
  }

  for (let i = 0; i < actorActressData.length; i++) {
    const element = actorActressData[i];

    if (element.name === actorName) {
      return element.movies.length > 0
        ? element.movies
        : "No Movies were found... ";
    }
  }

  return "Actor Not Found";
}

module.exports = { findActorByMoviesName, findMoviesByActorName };

// Search Actors by movie name
console.log(findActorByMoviesName("Koi Mil Gaya"));

// search movie by actor name
console.log(findMoviesByActorName("Akshay Kumar"));
console.log(findActorByMoviesName("Sholay"));
