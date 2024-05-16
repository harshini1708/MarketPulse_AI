# MarketPulse AI

**MarketPulse AI** is a comprehensive, real-time stock market analysis and prediction platform. It integrates machine learning (ML) and deep learning (DL) models to forecast next-day stock prices using historical trends and live data streams. Designed for both novice and intermediate investors, it enhances investment decisions through actionable predictions and intuitive dashboards.

## Project Theme and Objective

**Theme:** Science and Technology for Sustainable Future  
**Sub-theme:** Mathematical Modeling and Computational Thinking

### Problem Statement

The unpredictability of the stock market often deters new investors from participating. MarketPulse AI addresses this challenge by applying machine learning techniques to historical and real-time stock data, enabling users to make informed, data-driven financial decisions. The goal is to simplify market complexity and improve financial literacy through intelligent automation.

## Solution Overview

MarketPulse AI offers a web-based interface that connects users to a backend system powered by Flask. The system utilizes a variety of forecasting models, including:

- **ARIMA** – Autoregressive Integrated Moving Average
- **Random Forest** – Ensemble learning-based regression
- **LSTM** – Long Short-Term Memory networks for time series
- **BiLSTM** – Bidirectional LSTM for enhanced sequence learning

These models are trained on market indicators and produce next-day price predictions for user-specified stocks. The results are delivered via a frontend dashboard enriched with interactive visualizations.

## System Capabilities

- **Authentication** – Secure login for personalized access
- **Live Ticker Data** – Real-time market updates using Yahoo Finance APIs
- **Candlestick Charts** – Graphical representation of stock trends
- **Stock Search** – Dynamic search with suggestions and company summaries
- **Watchlist Management** – Track selected stocks with add/remove functionality
- **Pre-trained ML/DL Models** – Built-in support for multiple prediction algorithms
- **Stock Chatbot** – Preprompted assistant for FAQs and ticker info
- **MongoDB Integration** – Storage of user preferences, feedback, and queries
- **Dark Mode** – Optional visual theme for low-light viewing

## Tech Stack

### Frontend
- React.js (TypeScript)
- Tailwind CSS
- Shadcn UI

### Backend
- Python Flask API

### Machine Learning
- Scikit-learn, statsmodels (ARIMA)
- TensorFlow/Keras (LSTM, BiLSTM)

### Database
- MongoDB (for storing user sessions, feedback, watchlist)

### APIs
- `yfinance` (Yahoo Finance)
- `Gemini` API (optional crypto market data)

## Architecture

The system is composed of three main modules:

1. **Client**: Built using Vite + React, this module manages user interaction and data visualization.
2. **Server**: A Python Flask backend handles API routes, ML/DL model inference, and communication with the database.
3. **Prediction Module**: A hybrid of classical and deep learning models are triggered based on the type of stock and forecast request.

Models are modularized for performance and can be independently retrained or replaced. The system is containerized using Docker for portability and scalability.

## Project Structure

```
MarketPulse_AI/
├── client/               # React frontend
├── server/               # Flask backend
├── prediction/           # ML/DL model implementations
├── docs/                 # Architecture diagram, dashboard screenshots
├── LICENSE
├── README.md
├── INSTALLATION.md
└── FILE_STRUCTURE.md
```

## Setup and Installation

To run the project locally:

1. Clone the repository
2. Navigate into the project root
3. Follow setup guides in `INSTALLATION.md`

### Requirements

- Python 3.9+
- Node.js and npm
- MongoDB instance (local or remote)

## Deployment

- Frontend deployed via **Vercel**
- Backend hosted on **Render**
- Docker support for local and cloud deployment

## Visuals

Refer to `docs/assets/architecture_diagram.png` and `docs/assets/dashboard_mockup.png` for an overview of the system architecture and sample dashboard.

## License

This project is licensed under the [Apache 2.0 License](./LICENSE).

---

_Last updated: April 6, 2025_
