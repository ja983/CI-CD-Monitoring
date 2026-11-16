# DevOps, CI/CD & Monitoring Pipeline

A complete end-to-end DevOps demonstration project featuring version control workflows, automated CI/CD pipelines, containerization, and container monitoring with Prometheus and Grafana.

---

## 🚀 Key Objectives

### 1. DevOps Culture, Git & CI/CD Fundamentals (Theory)
* **DevOps Philosophy:** Bridging development and operations through shared ownership, automation, and rapid feedback loops.
* **Git & GitHub Workflows:** Feature branching, pull requests, and trunk-based development.
* **CI vs. CD:** Understanding the transition from automated code integration and testing to continuous delivery and deployment.

### 2. Automated CI/CD Pipelines (Practical Guide)
* **Automated Testing:** Triggering dependency installs (`npm ci`) and automated tests on every push to `main` via GitHub Actions.
* **Build & Containerization:** Packaging a Node.js Express application into a secure, lightweight container using Docker.
* **Deployment Automation:** Authenticating with Docker Hub, building container images, and pushing them automatically.

### 3. Monitoring & Observability (Practical Guide)
* **Health Check Endpoints:** Exposing application uptime and status via `/health`.
* **Prometheus Metrics:** Tracking request latency and system counters using `prom-client` and `express-prom-bundle`.
* **Grafana Dashboards:** Visualizing real-time container performance, resource usage, and application metrics using Docker Compose.

---

## 🛠️ Project Structure

```text
CI-CD-Monitoring/
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # GitHub Actions CI/CD Pipeline
├── server.js                  # Node.js Express app with Health & Prometheus endpoints
├── Dockerfile                 # Container build instructions
├── docker-compose.monitoring.yml # Prometheus & Grafana stack configuration
├── prometheus.yml             # Prometheus scrape target configuration
├── package.json               # Project dependencies and npm scripts
└── README.md                  # Project documentation

🚀 Getting Started & Local Setup
1. Clone the Repository
Bash
git clone https://github.com/ja983/CI-CD-Monitoring.git
cd CI-CD-Monitoring
2. Install Dependencies
Bash
npm install
3. Run the Application Locally
Bash
npm start
Access the app at http://localhost:3000

Check health status at http://localhost:3000/health

📊 Running the Monitoring Stack (Prometheus & Grafana)
To spin up local monitoring for your containers:

Bash
docker-compose -f docker-compose.monitoring.yml up -d
Prometheus UI: http://localhost:9090

Grafana Dashboard: http://localhost:3000 (Default login: admin / admin)

⚙️ GitHub Actions CI/CD Secrets Configuration
To enable automated Docker builds via GitHub Actions, add the following repository secrets under Settings > Secrets and variables > Actions:

DOCKER_USERNAME: Your Docker Hub username

DOCKER_PASSWORD: Your Docker Hub Access Token
