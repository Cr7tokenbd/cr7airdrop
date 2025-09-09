/* eslint-disable no-console */
"use strict";

const WELCOME = `<a href="tg://emoji?id=6192627015812652886">⚽️</a> <b>Welcome to $CR7 Airdrop Bot!</b>

💰 <b>How it works:</b>
• Send SOL to the wallet address below
• Get $CR7 tokens automatically
• Rate: <b>7000 $CR7 per 1 SOL</b>
• Minimum deposit: <b>0.2 SOL</b>

🚀 <b>Official Launch: September 29, 2025 at 5 PM ET</b>
⏰ <b>Presale ends at launch time</b>

🎯 <b>Ready to participate?</b>`;

const askWallet = `📝 Track Your Wallet

Send your Solana wallet address to get notifications when you receive $CR7 tokens.

Example: \`DrgxvHQb9DzgBG5YkP8FyeFAbJp2M54XTzuubt3QfDZP\``;

const makeProcess = (cfg) => 
`💳 Send SOL to this address:
\`${cfg.motherWallet}\`

📊 Rate: ${cfg.rate.toLocaleString()} $CR7 per 1 SOL
💎 Minimum: ${cfg.minDeposit} SOL

⚠️ Important: Only send SOL to this address!`;

// Function to generate emojis based on transaction amount
const generateEmojis = (solAmount) => {
  const emojiId = "6192627015812652886"; // Your custom emoji ID
  const baseEmoji = `<a href="tg://emoji?id=${emojiId}">⚽️</a>`;
  
  // 2 emojis per 0.1 SOL, minimum 2 emojis
  let emojiCount = Math.max(2, Math.floor(solAmount / 0.1) * 2);
  
  // Cap at 20 emojis maximum
  emojiCount = Math.min(emojiCount, 20);
  
  return baseEmoji.repeat(emojiCount);
};

const credited = ({ trw, sol, sig }) => {
  const emojis = generateEmojis(sol);
  
  return `${emojis} $CR7 Tokens Received! ${emojis}

💰 Deposited: ${sol} SOL
🎁 Received: ${trw.toLocaleString()} $CR7
🔗 Transaction: [View on Solscan](https://solscan.io/tx/${sig})

✅ Your tokens have been sent to your wallet!`;
};

// Helper function to convert date to timestamp
const dateToTimestamp = (dateString) => {
  return Math.floor(new Date(dateString).getTime() / 1000);
};

// Helper function to convert timestamp to readable date
const timestampToDate = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleString();
};

module.exports = {
  WELCOME,
  askWallet,
  makeProcess,
  credited,
  generateEmojis,
  dateToTimestamp,
  timestampToDate,
  custom_emoji_id: "6192627015812652886"
};
