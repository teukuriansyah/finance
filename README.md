# 💰 Finance

A simple personal finance application for tracking income and expenses with transaction summaries. Perfect for managing your personal cash flow.

## ✨ Features
- Add Transactions: Record income and expense entries
- Transaction Summary: View total income, total expenses, and net balance
- .env Configuration: Secure handling of sensitive configurations

## 🛠️ Tech Stack
- Frontend: Ionic + React.js
- Backend: Golang
- Database: MySQL

## 🚀 Installation

1. Clone repository
   git clone https://github.com/teukuriansyah/finance.git
   cd finance

2. Install dependencies
   # Frontend dependencies
   npm install
   # or
   pnpm install
   
   # Backend dependencies (from backend directory)
   cd backend
   go mod tidy

3. Setup environment
   cp .env.example .env
   # Edit the .env file with your configuration

4. Run the applicatio
   # Frontend
   ionic serve
   # or
   npm run dev
   # or 
   pnpm dev
   # or
   ionic serve

   # Backend (from backend directory)
   go run main.go

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.