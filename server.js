const express = require('express');
const promBundle = require('express-prom-bundle');
const app = express();

// Add Prometheus middleware to automatically track request latency and count
const metricsMiddleware = promBundle({ includeMethod: true, includePath: true });
app.use(metricsMiddleware);

// Basic Health Check Endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    uptime: process.uptime(),
    timestamp: new Date()
  });
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});