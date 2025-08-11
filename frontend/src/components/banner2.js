// banner2.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "animate.css";

const Banner2 = () => {
  const sectionStyle = {
    backgroundColor: "#fff",
    color: "#000",
    fontFamily: "'Roboto', sans-serif",
    padding: "40px 20px",
    lineHeight: "1.6",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "12px",
  };

  const subHeadingStyle = {
    fontSize: "1.4rem",
    fontWeight: "bold",
    marginTop: "25px",
  };

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    marginTop: "20px",
  };

  const thTdStyle = {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "center",
  };

  const noteStyle = {
    fontSize: "0.9rem",
    marginTop: "10px",
    fontStyle: "italic",
    color: "#555",
  };

  return (
    <div style={sectionStyle} className="container animate__animated animate__fadeIn">
      
      {/* Welcome Section */}
      <h2 style={headingStyle} className="animate__animated animate__fadeInDown">
        🌱 Welcome to Harmonds
      </h2>
      <p><strong>Trusted Fertilizer Solutions Backed by Innovation</strong></p>
      <p>
        Harmonds is a name growers trust. With vast experience in conventional fertilizers 
        and a specialized focus on liquid fertilizer technology, we help farmers achieve 
        healthier crops, faster growth, and better yields — season after season.
      </p>

      {/* Why Liquid Fertilizers */}
      <h3 style={subHeadingStyle} className="animate__animated animate__fadeInUp mt-4">
        💧 Why Liquid Fertilizers?
      </h3>
      <p>
        Liquid fertilizers offer unmatched benefits over granular or powdered options:
      </p>
      <ul className="list-unstyled">
        <li className="animate__animated animate__fadeInLeft">
          ✅ <strong>Easy Application</strong> — Applied effortlessly with sprayers for 
          uniform and efficient coverage.
        </li>
        <li className="animate__animated animate__fadeInLeft">
          ⚡ <strong>Fast-Acting Nutrition</strong> — Nutrients are immediately available 
          for plant uptake, ensuring faster growth and visible results.
        </li>
      </ul>

      {/* Benefits Section */}
      <h3 style={subHeadingStyle} className="animate__animated animate__fadeInUp mt-4">
        🌿 Benefits of Liquid Fertilizers
      </h3>
      <ul className="list-unstyled">
        <li className="animate__animated animate__fadeInRight">
          🌱 <strong>Better Absorption</strong> — Higher absorption rates mean plants get 
          more of what they need, when they need it.
        </li>
        <li className="animate__animated animate__fadeInRight">
          ❄️ <strong>Gentle on Roots</strong> — Lower salt content reduces the risk of root burn — ideal for sensitive crops.
        </li>
        <li className="animate__animated animate__fadeInRight">
          🔄 <strong>Consistent Formulation</strong> — Every drop contains the same precise 
          blend of nutrients, unlike variable-content granules.
        </li>
        <li className="animate__animated animate__fadeInRight">
          🚚 <strong>Lower Freight Costs</strong> — More efficient to ship and store, helping you save on logistics.
        </li>
      </ul>

      {/* Built for Modern Farming */}
      <h3 style={subHeadingStyle} className="animate__animated animate__fadeInUp">
        🚜 Built for Modern Farming
      </h3>
      <p>
        At Harmonds, we’re committed to delivering smarter, more efficient fertilizer 
        solutions tailored for the evolving needs of today’s agriculture.
      </p>
      <p><em>[Case Study : Comparison of Liquid NPK with Granular NPK]</em></p>

      {/* Table */}
      <table style={tableStyle} className="table table-bordered table-hover animate__animated animate__zoomIn">
        <thead className="table-light">
          <tr>
            <th style={thTdStyle}>Type</th>
            <th style={thTdStyle}>Cost of Material</th>
            <th style={thTdStyle}>Freight</th>
            <th style={thTdStyle}>Price per Unit</th>
            <th style={thTdStyle}>Cost per Acre Application</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={thTdStyle}>NPK Granules</td>
            <td style={thTdStyle}>375 USD / tonne</td>
            <td style={thTdStyle}>100 USD / tonne</td>
            <td style={thTdStyle}>475 USD / tonne</td>
            <td style={thTdStyle}>47.5 USD (100 Kg per acre)</td>
          </tr>
          <tr>
            <td style={thTdStyle}>NPK Liquid</td>
            <td style={thTdStyle}>20 USD / litre</td>
            <td style={thTdStyle}>0.125 USD / litre</td>
            <td style={thTdStyle}>20.125 USD / litre</td>
            <td style={thTdStyle}>10.0625 USD (500 ml per acre)</td>
          </tr>
        </tbody>
      </table>
      <p style={noteStyle}>
        Note: The above assumptions are based on current market trends.
      </p>

      {/* Price Note */}
      <p style={{ color: "#7b1fa2", fontWeight: "bold" }} className="animate__animated animate__fadeInUp">
        💡 Thus liquid fertilizer (NPK) landed price is approximately one fourth 
        of the price of granular fertilizer (NPK) for one acre of application.
      </p>

      {/* Contact */}
      <h3 className="mt-4">📞 Need Expert Advice?</h3>
      <p>
        Our agronomy specialists are here to help. <br />
        Contact Us → <a href="mailto:info@harmonds.com" style={{ color: "#0d6efd" }}>
          info@harmonds.com
        </a>
      </p>
    </div>
  );
};

export default Banner2;
