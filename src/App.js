import "./App.css";
import adventureaiImage from "./assets/adventureai.png";
import kawaii from "./assets/kawaii.png";

function App() {
  return (
    <div className="App">
      <h1>Agis Companies</h1>
      <p>Building apps for the future</p>
      <a href="mailto:aifutureapps@gmail.com">Questions? Reach out</a>
      <div class="container">
        <div class="item">
          <a
            href="https://cool-sawine-1bfeee.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={adventureaiImage} alt="adventureai" />
          </a>
        </div>
        <div class="item">
          <a href="https://kawaiiapp.net/" target="_blank" rel="noreferrer">
            <img src={kawaii} alt="kawaii" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
