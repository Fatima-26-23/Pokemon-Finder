# Pokemon-Finder

A simple single-page web app that looks up Pokémon by name or ID using the [PokeAPI](https://pokeapi.co/) and displays their basic stats in a styled card.

## Features

- Search any Pokémon by **name** or **Pokédex ID**
- Press **Enter** or click **Search** to fetch results
- Displays:
  - Sprite image
  - Pokédex ID
  - Height & weight
  - Type(s)
  - Abilities
- Loading and "not found" messages for user feedback
- Optional logo image (hidden automatically if no `src` is set)
- Themed UI with a Pokéball mascot, blurred glass-style result card, and full-screen background image

## File Structure

```
.
├── pokemon.html     
├── pokemon.css      
├── pokemon.js       
├── background.jpg    
└── logo.svg         
```

## How It Works

1. The user types a Pokémon name (e.g. `pikachu`) or ID (e.g. `25`) into the input field.
2. On **Search** click or **Enter** keypress, `getPokemon()` runs in `pokemon.js`.
3. A request is sent to:
   ```
   https://pokeapi.co/api/v2/pokemon/{name-or-id}
   ```
4. If the Pokémon is found, `showPokemon()` populates the card with the sprite, ID, height, weight, types, and abilities, and un-hides the card.
5. If not found (typo, invalid name/ID, or network error), an error message is shown instead.

## Setup & Usage

No build steps or dependencies are required — it's a static site.

1. Make sure all five files (`pokemon.html`, `pokemon.css`, `pokemon.js`, `background.jpg`, `logo.svg`) are in the **same folder**.
2. Open `pokemon.html` in a web browser (double-click it, or use a local server such as the VS Code "Live Server" extension).
3. Type a Pokémon name or ID and hit **Search**.

> **Note:** Since the app fetches from PokeAPI over the network, an internet connection is required.

## Customization

- **Logo:** Replace `logo.svg` with your own image, or leave the `src` empty to hide it (handled via the `.logo-img[src]:not([src=""])` CSS rule).
- **Background:** Swap out `background.jpg` for any image — it's set to `cover` and anchored at `35% center` in `pokemon.css`.
- **Fonts:** Uses Google Fonts' **Luckiest Guy** for headings, falling back to `Brush Script MT` / cursive.
- **Colors:** Main theme colors are Pokémon red (`#e3350d`) and dark navy (`#2c3e50`) — both defined in `pokemon.css`.

## Tech Stack

- HTML5
- CSS3 (flexbox, backdrop-filter, keyframe animation)
- Vanilla JavaScript (Fetch API, async/await)
- [PokeAPI](https://pokeapi.co/) — public REST API for Pokémon data
