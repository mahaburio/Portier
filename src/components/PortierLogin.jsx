import ornamentalImage from "../assets/ornamental.png";
import { useState } from "react";

export default function PortierLogin() {
  const [role, setRole] = useState("guest");

  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="header-action">
          <div className="logo">
            <div className="p">P</div>
            <span>PORTIER</span>
          </div>

          <div className={`btn-groups ${role === "valet" ? "is-valet" : "is-guest"}`}>
            <span className="btn-groups-track" aria-hidden />
            <button
              type="button"
              className={role === "guest" ? "active" : ""}
              onClick={() => setRole("guest")}
            >
              Guest
            </button>
            <button
              type="button"
              className={role === "valet" ? "active" : ""}
              onClick={() => setRole("valet")}
            >
              Valet
            </button>
          </div>
        </div>

        <div className="main">
          <div className="top-actions">
            <div>
              <div className="top-logo" aria-hidden>
                <span className="top-logo-letter">P</span>
              </div>
              <div className="ornamental-divider" aria-hidden>
                <span className="divider-line" />
                <span className="divider-dot" />
                <span className="divider-line divider-line-right" />
              </div>

              <h1 className="brand-title">PORTIER</h1>

              <img className="ornament-img" src={ornamentalImage} alt="" />

              <p>Private Valet Access</p>
            </div>
          </div>
          <div className="form-container">
            <div className="input-wrapper">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="input-wrapper">
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="input-wrapper">
              <input type="text" placeholder="Plate Number" />

              <span>(e.g.ABC1234)</span>
            </div>
            <p>Your arrival will be recongnized automatically</p>

            <div className="button-container">
              <div className="button-glow" aria-hidden />
              <button type="button" className="enter-btn">
                Enter Experience
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
