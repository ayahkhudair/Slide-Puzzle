# Slide-Puzzle
<div align="center">
  <h1> 🧩 Bambi Slide Puzzle </h1>
  <p><i>A classic 3x3 sliding tile puzzle game with a charming forest theme.</i></p>
<hr />

## 🌲 Project Overview
This project is an interactive web-based slide puzzle where users must rearrange scrambled forest images to complete the scene. It features smooth drag-and-drop mechanics and a custom-designed interface.

### ✨ Key Features
* **Drag & Drop Interaction:** Move tiles by dragging them into the empty slot.
* **Turn Counter:** Tracks every move made until the puzzle is solved.
* **Winning Logic:** Automatically detects when the pattern `123456789` is achieved and reveals the full image.
* **Responsive UI:** Designed with a calming green color palette and elegant typography.

---

## 🎮 How to Play
1.  **Start:** Click the "Start Game" button on the overlay.
2.  **Move:** Use your mouse to drag a tile adjacent to the blank space.
3.  **Strategy:** Slide tiles one by one to restore the image to its original order.
4.  **Win:** Complete the sequence in the fewest turns possible to see the victory screen!

---

## 🛠️ Technical Stack
* **HTML5:** Structure for the game board and modal overlays.
* **CSS3:** Flexbox layouts and custom forest-themed styling.
* **JavaScript (Vanilla):** Handle game state, tile randomization, and drag-and-drop API.

---

## 📂 File Structure
```text
├── Puzzle.html   # Game structure and overlays
├── Puzzle.css    # Styles, board layout, and themes
├── Puzzle.js     # Drag-and-drop logic and win detection
├── Logo.png      # Game title image
└── [1-9].jpg     # Individual puzzle tiles
