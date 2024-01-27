let posterUrl = "img/poster.jpg";
let title = "Spirited Away";
let genres = ["Animation", "Adventure", "Fantasy"];
let rating = 8.6;
let releaseDate = new Date("July 20, 2001");
let directors = ["Hayao Miyazaki"];
let actors = ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki", "Takeshi Naito", "Yasuko Sawaguchi"];
let synopsis = "Chihiro, a young girl, gets trapped in a mysterious and magical world. To save her parents and herself, she must navigate through this strange realm and face various challenges.";
let runtime = 125; // in minutes
let languages = ["Japanese", "English (dubbed)"];
let country = "Japan";
let studio = "Studio Ghibli";
let director = "Hayao Miyazaki"
let formats = ["DVD", "Blu-ray", "Streaming"];
let watchlistStatus = true; // Added
let watchedStatus = false; // Not watched
let relatedMovies = ["My Neighbor Totoro", "Howl's Moving Castle", "Princess Mononoke"];
let ageRating = "PG";
let awardsWon = 4;
let awardsNominated = 14;

document.write(
    `
    <h1>${title} Info:</h1>
    <img src="${posterUrl}" alt="${title} Poster">
    <p><strong>Genres:</strong> ${genres.join(", ")}</p>
    <p><strong>Rating:</strong> ${rating}</p>
    <p><strong>Release Date:</strong> ${releaseDate.toDateString()}</p>
    <p><strong>Directors:</strong> ${directors.join(", ")}</p>
    <p><strong>Actors:</strong> ${actors.join(", ")}</p>
    <p><strong>Synopsis:</strong> ${synopsis}</p>
    <p><strong>Runtime:</strong> ${runtime} minutes</p>
    <p><strong>Languages:</strong> ${languages.join(", ")}</p>
    <p><strong>Country:</strong> ${country}</p>
    <p><strong>Studio:</strong> ${studio}</p>
    <p><strong>Director:</strong> ${director}</p>
    <p><strong>Formats:</strong> ${formats.join(", ")}</p>
    <p><strong>Watchlist Status:</strong> ${watchlistStatus ? 'Added' : 'Not added'}</p>
    <p><strong>Watched Status:</strong> ${watchedStatus ? 'Watched' : 'Not watched'}</p>
    <p><strong>Related Movies:</strong> ${relatedMovies.join(", ")}</p>
    <p><strong>Age Rating:</strong> ${ageRating}</p>
    <p><strong>Awards Won:</strong> ${awardsWon}</p>
    <p><strong>Awards Nominated:</strong> ${awardsNominated}</p>
    `
);
