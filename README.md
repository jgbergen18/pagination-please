# Pagination Please!

**Version:** 1.3

**Description:**   Inspired by the book *Stolen Focus* by Johann Hari.
Pagination Please! is a Chrome extension designed to limit infinite scrolling on webpages, providing users greater control over content browsing. With a simple click of a button, users can extend the page scroll as needed.

## Features
- **Infinite Scroll Limitation:** Automatically limits infinite scrolling on web pages to prevent endless scrolling.
- **Easy-to-use:** Extend scrolling limit by simply clicking the toolbar button.

## Installation

Option 1: Dowload from chrome at `bislfkja`

Option 2: Add in developer mode to make your own modifications
1. Download the extension files.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable "Developer mode" using the toggle at the top right.
4. Click "Load unpacked" and select the folder containing the extension files.

## Usage

- Once installed, the extension will automatically limit your scrolling.
- If you reach the scrolling limit, click the extension button in the toolbar to extend scrolling.

## Files

- `background.js`: Manages Chrome runtime events and storage.
- `content.js`: Injected into webpages to limit scrolling.
- `popup.js`: Handles user interactions via the extension toolbar.
- `popup.css`: Styles the extension popup UI.

## Features

- Limits infinite scrolling to a manageable length.
- Easily extend scroll limits by interacting with the toolbar button.

## Permissions
- **activeTab:** Allows interaction with the current tab.
- **Scripting Permission:** Enables the extension to run scripts on web pages.

## Usage

- After installing, the extension automatically limits scroll depth.
- Click the toolbar button when you want to extend the scrolling limit.

## Development

Feel free to fork, customize, and submit pull requests!

## License

This project is open-sourced and available under the MIT License.

