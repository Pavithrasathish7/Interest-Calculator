export default function UserInput({ onChangeinput, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment </label>
          <input
            type="number"
            required
            value={userInput.Initialinvestment}
            onChange={(event) =>
              onChangeinput("Initialinvestment ", event.target.value)
            }
          />
        </p>
        <p>
          <label>Anunal Investment </label>
          <input
            type="number"
            required
            value={userInput.Anunalinvestment}
            onChange={(event) =>
              onChangeinput("Anunalinvestment ", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedreturn}
            onChange={(event) =>
              onChangeinput("expectedreturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Durtion </label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChangeinput("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
