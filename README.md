# Chess64.app
**The free, open chess platform. No ads. No paywalls. Just chess — and everything else.**
---

## What is Chess64?

Chess64 is a fully-featured, single-file chess web app built for players of all levels. Whether you're a beginner learning your first opening or an experienced player analysing grandmaster games, Chess64 has everything you need — completely free, forever.

---

## Features

### 🎮 Play
- **Play vs Bot** — 10+ unique bots from beginner to near-master strength, each with their own personality and trash talk
- **Custom Bots** — build your own opponent with custom ELO, style, opening preference, and trash talk
- **Online Play** — real-time games against other players with matchmaking, time controls, and in-game chat
- **Chess960** — Fischer Random chess support
- **Save & Resume** — save games locally or to the cloud and pick up right where you left off

### 🧩 Train
- **Puzzles** — tactical puzzle trainer with rating tracking
- **Openings Explorer** — built-in opening book with ECO codes and move trees
- **Coordinate Trainer** — drill board coordinates with timed exercises
- **Lessons** — structured learning for beginners through intermediate players
- **Board Editor** — set up any position from scratch

### 🔬 Analyse
- **Analysis Board** — full Stockfish-powered engine analysis
- **PGN Import** — paste or load any PGN to analyse
- **GM Games** — browse and study games from top grandmasters
- **Eval Bar** — real-time position evaluation

### 👥 Community
- **Forums** — discuss chess, openings, and anything else
- **Live Chat** — real-time chat with other players
- **Leaderboard** — global rankings by rating across bullet, blitz, rapid, and classical
- **Player Profiles** — stats, game history, and achievements
- **Articles** — chess articles and news from community bloggers
- **Community Quotes** — submit and like your favourite chess quotes
- **Friends** — add friends and send messages

### ⚙️ Features
- **Glicko-2 Ratings** — accurate rating system across four time control categories (bullet / blitz / rapid / classical)
- **Cloud Sync** — settings, saved games, puzzle progress, and repertoire sync across all your devices
- **Themes** — multiple board themes and light/dark app themes
- **Piece Sets** — multiple piece set styles
- **Repertoire Builder** — save and manage your opening repertoire
- **Full Keyboard Shortcuts** — power-user navigation
- **Mobile Friendly** — responsive design that works on any screen size

### 🛡️ Admin
- Full admin panel for moderation
- Ban/unban users, manage forum posts, view reports
- Access all game chats, delete messages
- View every game ever played by any user
- Broadcaster/blogger role management
- Anti-cheat system with rating refunds for victims

---

## Tech Stack

- **Pure HTML/CSS/JS** — the entire app ships as a single `.html` file with zero build steps and zero dependencies
- **Firebase** — Firestore (database), Firebase Auth (accounts), Firebase Analytics
- **Stockfish** — chess engine running in a Web Worker for analysis and bot play
- **No frameworks** — no React, no Vue, no npm, no bundler

---

## Self-Hosting

Chess64 is a single HTML file. To run your own instance:

1. Clone the repo
2. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
3. Enable **Firestore**, **Authentication** (Email/Password + Google), and **Analytics**
4. Copy your Firebase config into the `firebaseConfig` object near the top of the file
5. Paste the Firestore security rules from `firestore.rules` into your Firebase Console
6. Open the file in a browser or deploy to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.)

That's it. No server required.

---

## Contributing

Pull requests are welcome. If you find a bug or have a feature idea, open an issue.

Please keep the single-file architecture — all code, styles, and markup live in `chess64.html`.

---

## License

MIT License — free to use, modify, and distribute.

---

*Built with ♟ and way too much coffee.*
