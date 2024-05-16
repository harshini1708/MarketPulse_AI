# MarketPulse AI

**MarketPulse AI** is a comprehensive, real-time stock market analysis and prediction platform. It integrates machine learning (ML) and deep learning (DL) models to forecast next-day stock prices using historical trends and live data. Designed for novice and intermediate investors, it enhances financial decisions through actionable insights and interactive dashboards.

---

## 📌 Theme & Objective

- **Theme:** Science and Technology for Sustainable Future  
- **Sub-theme:** Mathematical Modeling and Computational Thinking

**Problem:**  
Stock market volatility discourages new investors. MarketPulse AI simplifies financial prediction by applying ML/DL techniques to historical and real-time stock data, improving financial literacy and decision-making.

---

## ⚙️ Solution Overview

MarketPulse AI delivers a rich web interface powered by a Python backend and multiple forecasting models:

- **ARIMA**: Statistical time-series modeling
- **Random Forest**: Ensemble regression
- **LSTM**: Long Short-Term Memory networks
- **BiLSTM**: Bidirectional sequence prediction

Predictions and market data are visualized through a personalized dashboard.

---

## 🚀 Core Features

- 🔐 Secure Authentication
- 📈 Real-Time Stock Ticker with yfinance
- 📊 Candlestick & Line Charts for any ticker
- 🔍 Company Search with Suggestions
- 💬 Pretrained Chatbot for Market FAQs
- 🧠 ML & DL Models: ARIMA, LSTM, BiLSTM, Random Forest
- ⭐ Personalized Watchlist
- 🌘 Dark Mode
- 📝 Feedback system via MongoDB

---

## 🛠️ Tech Stack

**Frontend:**
- React.js (TypeScript)
- Tailwind CSS
- Shadcn UI

**Backend:**
- Python (Flask)

**Machine Learning:**
- Scikit-learn, statsmodels
- TensorFlow/Keras

**Database:**
- MongoDB

**APIs:**
- yfinance (Yahoo Finance)
- Gemini (crypto data, optional)

---

## 🧱 Architecture

![System Architecture](docs/assets/architecture_diagram.png)

The system is divided into:
- **Client**: React app via Vite
- **Server**: Flask REST API
- **Prediction Module**: Modular ML/DL pipelines with Docker support

---

## 💻 Dashboard Sample

![Dashboard Screenshot](docs/assets/dashboard_mockup.png)

---

## 📁 Project Structure

```
MarketPulse_AI/
├── client/               # React frontend
├── server/               # Flask backend
├── prediction/           # ML/DL models
├── docs/                 # Architecture, screenshots
├── LICENSE
├── README.md
├── INSTALLATION.md
└── FILE_STRUCTURE.md
```

---

## 🧪 Setup & Installation

```bash
# Clone repo
git clone git@github.com:your-username/MarketPulse_AI.git
cd MarketPulse_AI

# Setup backend
cd server
pip install -r requirements.txt

# Setup frontend
cd ../client
npm install
npm run dev
```

See `INSTALLATION.md` for full setup instructions.

---

## 🌐 Deployment

- **Frontend**: Vercel  
- **Backend**: Render  
- **Docker**: Full containerization supported

---

## 📜 License

Licensed under the [Apache 2.0 License](LICENSE)

---

_Last updated: April 6, 2025_