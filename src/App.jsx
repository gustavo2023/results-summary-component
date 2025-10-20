import "./index.css";
import data from "./data.json";
import reactionIcon from "../public/assets/images/icon-reaction.svg";
import memoryIcon from "../public/assets/images/icon-memory.svg";
import verbalIcon from "../public/assets/images/icon-verbal.svg";
import visualIcon from "../public/assets/images/icon-visual.svg";

const iconMap = {
  Reaction: reactionIcon,
  Memory: memoryIcon,
  Verbal: verbalIcon,
  Visual: visualIcon,
};

function ResultCard() {
  return (
    <div className="card__result">
      <h1 className="card__result-title">Your Result</h1>
      <div className="card__result-score">
        <span className="card__result-score-number">76</span>
        <span>of 100</span>
      </div>
      <h2 className="card__result-grade">Great</h2>
      <p className="card__result-description">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

function Summary() {
  return (
    <div className="card__summary">
      <h2 className="card__summary-title">Summary</h2>
      <div className="card__summary-items">
        {data.map((item, index) => (
          <div
            key={index}
            className={`summary-item summary-item--${item.category.toLowerCase()}`}
          >
            <div className="summary-item__category">
              <img src={iconMap[item.category]} alt={`${item.category} icon`} />
              <span>{item.category}</span>
            </div>
            <div className="summary-item__score">
              <span>{item.score}</span> / 100
            </div>
          </div>
        ))}
      </div>
      <button className="card__summary-button">Continue</button>
    </div>
  );
}

function App() {
  return (
    <main>
      <article className="results-container">
        <ResultCard />
        <Summary />
      </article>
    </main>
  );
}

export default App;
