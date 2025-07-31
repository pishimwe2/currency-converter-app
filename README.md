📎 Currency Converter App

A simple web-based currency converter built with HTML, CSS, and JavaScript, then containerized using Docker and deployed with Nginx-based load balancing across multiple containers.

📁 Project Structure

.
├── index.html         # Main front-end layout
├── styles.css         # Basic styling
├── script.js          # JavaScript logic (API + UI)
├── Dockerfile         # Docker config for the app
├── nginx.conf         # Load balancer config (used in lb-01)
└── README.md          # You're here!

⚙️ Features

Live currency exchange using a public API

Converts between major world currencies

Responsive layout

Dockerized for consistent deployment

Load balanced using Nginx across two containers

🛠️ Local Development

# Clone the repo
git clone <your-repo-url>
cd currency-converter

# Open index.html in your browser

🐳 Docker

Build Image Locally

docker build -t princemt1234/currency-converter:v3 .

Run Locally

docker run -d -p 8080:80 princemt1234/currency-converter:v3

Open your browser at: http://localhost:8080

🚢 Deployment

1. Create Custom Network

docker network create currency-net

2. Run Containers

docker run -d --name web-01 --network currency-net princemt1234/currency-converter:v3
docker run -d --name web-02 --network currency-net princemt1234/currency-converter:v3
docker run -d --name lb-01 --network currency-net -p 80:80 web_infra_lab-lb-01

3. Load Balancing

Your lb-01 container uses Nginx to forward requests between web-01 and web-02.

Test in browser at: http://localhost

🎥 Demo Video

Embed a short demo video link here showing your app working with load balancing.

Example:📺 Watch Demo

🛆 Docker Hub

Image:🔗 princemt1234/currency-converter:v3

🧑‍💻 Author

Prince Feel free to connect on GitHub or LinkedIn.
