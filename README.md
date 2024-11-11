# Solana Airdrop Project

A simple Node.js application to create a Solana wallet and request SOL tokens on devnet.

## Features
- Create Solana wallet
- Check wallet balance
- Request SOL via airdrop
- Confirm transactions

## Prerequisites
- Node.js (v14+)
- npm

## Installation

1. Clone and install:
```bash
git clone <repository-url>
cd solana-airdrop-project
npm install
```

2. Run the project:
```bash
node index.js
```

## Project Structure
```
solana-airdrop-project/
├── index.js          # Main application
├── package.json      # Dependencies
└── README.md        # Documentation
```

## Code Overview
- Uses Solana's web3.js library
- Connects to Solana devnet
- Creates new wallet keypair
- Requests 0.5 SOL airdrop
- Checks balance before and after airdrop

## Important Notes
- Runs on Solana devnet (not mainnet)
- New wallet generated each run
- Maximum 0.5 SOL per airdrop request
- Subject to rate limiting

## Common Issues
- Error 429: Wait few minutes between requests
- Connection issues: Check internet and devnet status

## Dependencies
- @solana/web3.js

## Resources
- [Solana Docs](https://docs.solana.com/)
- [Devnet Faucet](https://faucet.solana.com/)

## License
MIT