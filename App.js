import React, { useState } from 'react';
import styles from './App.module.css';

const mockMovies = [
  { id: 1, title: "Iron Man", year: 2008, poster: "https://picsum.photos/200/300?random=1" },
  { id: 2, title: "Iron Man 3", year: 2013, poster: "https://picsum.photos/200/300?random=2" },
  { id: 3, title: "Spider-Man: Homecoming", year: 2017, poster: "https://picsum.photos/200/300?random=3" },
  { id: 4, title: "Man of Steel", year: 2013, poster: "https://picsum.photos/200/300?random=4" },
  { id: 5, title: "Spider-Man", year: 2002, poster: "https://picsum.photos/200/300?random=5" },
  { id: 6, title: "Ant-Man", year: 2015, poster: "https://picsum.photos/200/300?random=6" },
  { id: 7, title: "The Amazing Spider-Man", year: 2012, poster: "https://picsum.photos/200/300?random=7" },
  { id: 8, title: "Spider-Man 2", year: 2004, poster: "https://picsum.photos/200/300?random=8" },
  { id: 9, title: "Spider-Man: Into the Spider-Verse", year: 2018, poster: "https://picsum.photos/200/300?random=9" },
  { id: 10, title: "Spider-Man 3", year: 2007, poster: "https://picsum.photos/200/300?random=10" },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMovies = mockMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>Movie Search</header>
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={handleSearch}
        className={styles.searchBar}
      />
      <div className={styles.movieGrid}>
        {filteredMovies.map((movie) => (
          <div key={movie.id} className={styles.movieCard}>
            <img src={movie.poster} alt={movie.title} className={styles.moviePoster} />
            <div className={styles.movieInfo}>
              <h3 className={styles.movieTitle}>{movie.title}</h3>
              <p className={styles.movieYear}>{movie.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;