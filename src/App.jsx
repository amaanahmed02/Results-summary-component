import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="result-chart">
        <div>
          <h1>Your Result</h1>
          <div className="circle">
            <span className="score">76</span> <span>of 100</span>
          </div>
          <h2>Great</h2>
          <p>
            You scored higher than 65% of <br />
            the people who have taken <br />
            these tests.
          </p>
        </div>
      </div>
      <div className="marks-chart">
        <h2>Summary</h2>
        <div className="reaction param">
          <div>
            <img src="/images/icon-reaction.svg" alt="reaction" />
            Reaction{" "}
          </div>
          <span>
            <span>80</span> / 100
          </span>
        </div>
        <div className="memory param">
          <div>
            <img src="/images/icon-memory.svg" alt="memory" />
            Memory{" "}
          </div>
          <span>
            <span>92</span> / 100
          </span>
        </div>
        <div className="verbal param">
          <div>
            <img src="/images/icon-verbal.svg" alt="verbal" /> Verbal
          </div>

          <span>
            <span>61</span> / 100
          </span>
        </div>
        <div className="visual param">
          <div>
            <img src="/images/icon-visual.svg" alt="visual" /> Visual
          </div>

          <span>
            <span>72</span> / 100
          </span>
        </div>
        <div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
