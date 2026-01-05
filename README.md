# Engineering Component Reference Database

A professional, interactive component catalog designed for Electronic and Computer Engineering (ECE) students and professionals. This application serves as a comprehensive reference database for over 100 essential electronic components, providing detailed technical specifications, pinout configurations, and real-world applications.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-18-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.0-cyan)

## 🚀 Features

### 📚 Extensive Component Library
- **100+ Components**: A curated collection of essential components ranging from basic passives to complex microcontrollers.
- **Categorized Structure**: Organized into intuitive categories:
  - **Semiconductors**: Transistors (BJT, MOSFET), Diodes, LEDs.
  - **Passive Components**: Resistors, Capacitors, Inductors.
  - **Integrated Circuits**: timers (555), Op-Amps (741, 358), Logic Gates, Drivers.
  - **Sensors**: Environmental (DHT11, BME280), Motion (MPU6050), Distance (HC-SR04).
  - **Microcontrollers**: Development boards (Arduino, ESP32, STM32) and modules.
  - **Power Modules**: Regulators, Converters, Battery Management.

### 💡 detailed Inspection
- **Interactive Cards**: Hover-enabled cards with visual feedback and icon indicators.
- **Detailed Modals**: comprehensive view for each component containing:
  - **Technical Function**: Precise engineering description of operation.
  - **Pinout Configuration**: Digital reference for pin layouts (DIP, TO-92, Modules, etc.).
  - **Common Applications**: List of proper use-cases and circuit implementations.

### 🎨 Professional UI/UX
- **Dark Mode Support**: Fully integrated dark theme for comfortable late-night study sessions.
- **Industrial Design**: Clean, drafting-inspired aesthetic with high contrast and readability.
- **Visual Identifiers**: Vector icons (Lucide React) representing component types for quick recognition.
- **Instant Search**: Real-time filtering by component name, type, or ID.

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **Typography**: IBM Plex Mono (for technical data)

## 📦 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/engineering-component-catalog.git
    cd engineering-component-catalog
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **classes Development Server**
    ```bash
    npm run dev
    ```

4.  **Build for Production**
    ```bash
    npm run build
    ```

## 🤝 Contributing

Contributions are welcome! If you'd like to add more components or improve the data:

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/NewComponent`)
3.  Commit your Changes (`git commit -m 'Add new component'`)
4.  Push to the Branch (`git push origin feature/NewComponent`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
