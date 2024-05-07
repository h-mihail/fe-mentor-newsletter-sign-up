import { useState } from "preact/hooks";
import { useLocation } from "preact-iso";
import "./style.css";

export const Home = () => {
  const basePath =
    process.env.NODE_ENV === "production"
      ? "/fe-mentor-newsletter-sign-up"
      : "";
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { route } = useLocation();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value && e.target.validity.valid) {
      setError("");
    } else {
      setError("Valid email required");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && !error) {
      route(`${basePath}/success?email=${email}`);
    } else {
      setError("Valid email required");
    }
  };

  return (
    <div class="page-wrapper">
      <section className="card signup-card">
        <figure>
          <img id="illustration" alt="illustration image" />
        </figure>
        <form noValidate className="signup-form" onSubmit={handleSubmit}>
          <h1>Stay updated!</h1>
          <div>
            <p>Join 60,000+ product managers receiving monthly</p>
            <p>updates on:</p>
          </div>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <div class="input-group">
            <div>
              <label for="email">Email address</label>
              {error && <label className="errorLabel">{error}</label>}
            </div>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="email@company.com"
            />
          </div>
          <button type="submit">Subscribe to monthly newsletter</button>
        </form>
      </section>
    </div>
  );
};
