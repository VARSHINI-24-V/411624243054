import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="card">

        <h1>📚 Online Book Store</h1>

        <h2>Discover Your Next Favorite Book</h2>

        <p>
          Welcome to our bookstore. Browse books, explore authors,
          and learn about our collection.
        </p>

        <ul>
          <li><Link to="/books">📖 Books</Link></li>
          <li><Link to="/authors">✍ Authors</Link></li>
          <li><Link to="/about">ℹ About</Link></li>
        </ul>


      </div>
    </div>
  );
}

export default Home;