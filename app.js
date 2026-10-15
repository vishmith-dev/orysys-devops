
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>ORYSYS IT Service Portal</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f4f6fa;
            text-align: center;
            padding: 80px 20px;
          }
          .card {
            background: white;
            max-width: 650px;
            margin: auto;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 5px 25px #ddd;
          }
          h1 { color: #153a66; }
          .status { color: green; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>ORYSYS LIMITED</h1>
          <h2>IT Service Management Portal</h2>
          <p>DevOps Automation Demonstration</p>
          <h3 class="status">System Status: Online</h3>
          <p>Application Version: 1.0</p>
          <p>Deployed using Jenkins, Docker,
          Ansible and AWS</p>
        </div>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    application: "ORYSYS IT Service Portal",
    version: "1.0"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`ORYSYS Portal running on port ${PORT}`);
});
