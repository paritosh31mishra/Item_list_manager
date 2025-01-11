


const Header = () => {

  return (
    <nav className="navbar bg-black text-white p-3">
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <span className="navbar-brand mb-0 h1 d-flex align-items-center">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAeFBMVEUNFB4A6mT///8NCx0LKyMA9GgAAAAIEBsNDh0AAA8A8WcNABhUV1vIyMkAAAgMKyEFuFIKdDkvLjQD4GEPDw7x8fGGh4i1tra+v8AuLi4cGx4TFRkqKi4gIiQMGx8MJiFBRElxcnQMISAHqU0A/GsKZDN/f4Dm5+d3kIgjAAABA0lEQVR4nO3byU4CQRSGUXBoWrBFBQUHwNn3f0MTJSR9XZAOqWjfnLP+N19qVZXUYAAAAAAAAAAAAAAAACQ3ivYOdov6uKu6cMvdddt9qBk9PIbFaruo19OTjjZFW86ejoLFvL2onm/CYln9tLy8vp12NHuflIw5jzHNvH001W2MaS6+F/X0cjzsZjy7yhMzFCNGjBgxYsSIESNGjBgxYsSIKRPTXvQ6ZlkFHz2O+VwEza+z60/MfmLEiBEjRowYMWLEiBHzP2NSXc5SXZtTPWgke2oSI0aMGDFixIgRI0aMGDFixIg5LKb0Z6BM37RSfaDL9bURAAAAAAAAAAAAAAD4S18MK2pVBNzbkgAAAABJRU5ErkJggg=="
          alt="HackerRank Logo"
          className="me-2"
          style={{ height: "40px" }}
        />
        <h2 className="text-success m-0">Item List Manager</h2>
      </span>
    </div>
  </nav>
  
  );
};

export default Header;
