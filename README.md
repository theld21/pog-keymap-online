# Pog Online Editor

A powerful, web-based keymap editor for [KMK Firmware](https://github.com/KMKfw/kmk_firmware), ported from the original [Pog](https://github.com/JanLunge/pog) Electron application.

## 🚀 Overview

Pog Online Editor allows you to easily configure your KMK-compatible keyboard directly from your browser. Simply upload your `pog.json` configuration file, make your changes using the intuitive visual interface, and download the updated configuration.

**Note:** This project is a web-based extraction of the original Pog app, focusing solely on the Keymap Editor functionality without the dependency on Electron or native system access.

## 🛠️ Tech Stack

- [Vue 3](https://vuejs.org/) - Progressive JavaScript Framework
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Pinia](https://pinia.vuejs.org/) - Intuitive Store for Vue.js
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [DaisyUI](https://daisyui.com/) - Tailwind CSS Components

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

### Usage

1. Click **Upload pog.json** to load your existing configuration.
2. Select keys to remap them.
3. Use the tabs to switch between layers.
4. Click **Download pog.json** to save your changes.
5. Place the downloaded `pog.json` into your keyboard's storage to apply the new config.

## 🤝 Attribution

This project is based on [Pog](https://github.com/JanLunge/pog) by [Jan Lunge](https://github.com/JanLunge). Huge thanks for the original work and inspiration.
