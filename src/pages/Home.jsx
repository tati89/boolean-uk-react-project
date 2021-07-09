import "../css/home.css";

function Home() {
  return (
    <section className="home-section">
      <div
        className="hero-img"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/5792323/pexels-photo-5792323.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")`,
        }}
      >
        <div className="text-wrapper">
          <h1 className="hero-text">
            This menu is a fusion of our heritage and knowledge of Spanish and
            Italian cuisines. Perfect combination between traditional pastas,
            tapas & Neapoletan pizzas to take you in a culinary tour of our
            beloved Spain & Italy.
          </h1>
        </div>
      </div>

      <footer>
        <div class="left-footer">
          <h6>&copy; Bella Pizzalia 2021</h6>
        </div>
      </footer>
    </section>
  );
}

export default Home;
