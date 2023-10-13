import React from "react";
import "../style/Packages.css";
import { FaCheck } from "react-icons/fa";
const Packages = () => {
  return (
    <div className="Packages container">
      <div className="PackagesContent">
        <p>Pricing</p>
        <h4>Pricing for all production needs</h4>
        <p>
          Cancel at any time. 100% no questions asked refunds. Message us for
          high volume custom pricing.
        </p>
      </div>

      <div className="row d-flex flex-row justify-content-center w-100">
        <div className="col-12 col-md-6 col-lg-4 ">
          <div
            class="card"
            style={{
              textAlign: "left",
            }}
          >
            <h4>Starter Package</h4>
            <p style={{ color: "#6B7280" }}>To help you grow</p>
            <h2>
              $49 <span style={{ color: "#6B7280" }}>/mo</span>
            </h2>

            <p style={{ color: "#6B7280" }}>
              $39 / month if you sign up for a year
            </p>
            <button href="#" className="btn btn-primary plan">
              Choose Plan
            </button>
            <hr />
            <div className="card-body">
              <h5>What's included</h5>
              <div
                className="CheckSection"
                style={{ display: "flex", alignItems: "baseline" }}
              >
                <span>
                  <FaCheck className="check" size={20} />
                </span>
                <p style={{ margin: "0", color: "#6B7280" }}>30 posts</p>
              </div>

              <div
                className="CheckSection"
                style={{ display: "flex", alignItems: "baseline" }}
              >
                <span>
                  <FaCheck className="check" size={20} />
                </span>
                <p style={{ margin: "0", color: "#6B7280" }}>
                  Sources & Destinations
                </p>
              </div>

              <div
                className="CheckSection"
                style={{ display: "flex", alignItems: "baseline" }}
              >
                <span>
                  <FaCheck className="check" size={20} />
                </span>
                <p style={{ margin: "0", color: "#6B7280" }}>
                  Generative titles, summaries, shownotes, speaker bio's,
                  keywords, entities and blog posts
                </p>
              </div>
              <div
                className="CheckSection"
                style={{ display: "flex", alignItems: "baseline" }}
              >
                <span>
                  <FaCheck className="check" size={20} />
                </span>
                <p style={{ margin: "0", color: "#6B7280" }}>
                  Less than 50 supported languages
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 ">
          <div
            class="card"
            style={{
              textAlign: "left",
            }}
          >
            <h4>Pro Package</h4>
            <p style={{ color: "#6B7280" }}>To help you grow</p>
            <h2>
              $99 <span style={{ color: "#6B7280" }}>/mo</span>
            </h2>

            <p style={{ color: "#6B7280" }}>
              $88 / month if you sign up for a year
            </p>
            <button href="#" className="btn btn-primary plan">
              Choose Plan
            </button>
            <hr />
            <div className="card-body">
              <h5>What's included</h5>
              <div
                className="CheckSection"
                style={{ display: "flex", alignItems: "baseline" }}
              >
                <span>
                  <FaCheck className="check" size={20} />
                </span>
                <p style={{ margin: "0", color: "#6B7280" }}>Unlimited posts</p>
              </div>

              <div
                className="CheckSection"
                style={{ display: "flex", alignItems: "baseline" }}
              >
                <span>
                  <FaCheck className="check" size={20} />
                </span>
                <p style={{ margin: "0", color: "#6B7280" }}>
                  Block builder & Templates
                </p>
              </div>
              <div
                className="CheckSection"
                style={{ display: "flex", alignItems: "baseline" }}
              >
                <span>
                  <FaCheck className="check" size={20} />
                </span>
                <p style={{ margin: "0", color: "#6B7280" }}>
                  Generative titles, summaries, shownotes, speaker bio's,
                  keywords, entities and blog posts
                </p>
              </div>
              <div
                className="CheckSection"
                style={{ display: "flex", alignItems: "baseline" }}
              >
                <span>
                  <FaCheck className="check" size={20} />
                </span>
                <p style={{ margin: "0", color: "#6B7280" }}>
                  Over 100 supported languages
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 ">
          <div
            class="card"
            style={{
              textAlign: "left",
            }}
          >
            <h4>Enterprise Package</h4>
            <p style={{ color: "#6B7280" }}>To help you grow</p>
            <h2>
              $49 <span style={{ color: "#6B7280" }}>/mo</span>
            </h2>

            <p style={{ color: "#6B7280" }}>5 hours ($0.097/(min))</p>
            <button href="#" className="btn btn-primary plan">
              Choose Plan
            </button>
            <hr />
            <div className="card-body">
              <h5>What's included</h5>
              <div
                className="CheckSection"
                style={{ display: "flex", alignItems: "baseline" }}
              >
                <span>
                  <FaCheck className="check" size={20} />
                </span>
                <p style={{ margin: "0", color: "#6B7280" }}>5 hours a month</p>
              </div>

              <div
                className="CheckSection"
                style={{ display: "flex", alignItems: "baseline" }}
              >
                <span>
                  <FaCheck className="check" size={20} />
                </span>
                <p style={{ margin: "0", color: "#6B7280" }}>
                  Block builder & Templates
                </p>
              </div>
              <div
                className="CheckSection"
                style={{ display: "flex", alignItems: "baseline" }}
              >
                <span>
                  <FaCheck className="check" size={20} />
                </span>
                <p style={{ margin: "0", color: "#6B7280" }}>
                  Generative titles, summaries, shownotes, speaker bio's,
                  keywords, entities and blog posts
                </p>
              </div>
              <div
                className="CheckSection"
                style={{ display: "flex", alignItems: "baseline" }}
              >
                <span>
                  <FaCheck className="check" size={20} />
                </span>
                <p style={{ margin: "0", color: "#6B7280" }}>
                  Over 100 supported languages
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;