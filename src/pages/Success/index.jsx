import { useLocation } from "preact-iso";

import iconSuccess from "/src/assets/icon-success.svg";
import "./style.css";

export const Success = () => {
  const { query } = useLocation();
  const { email } = query;
  return (
    <div class="page-wrapper">
      <section className="card success-card">
        <div class="success-message">
          <figure>
            <img src={iconSuccess} id="check" alt="check image" />
          </figure>
          <h1>Thanks for subscribing!</h1>
          <div>
            A confirmation email has been sent to <b>{email}</b>. Please open it
            and click the button inside to confirm your subscription
          </div>
        </div>
        <button>Dismiss message</button>
      </section>
    </div>
  );
};
