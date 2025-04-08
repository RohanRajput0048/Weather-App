# 🌤️ Weather App

This is a simple and responsive weather application that allows users to fetch and display real-time weather information using the [WeatherAPI](https://www.weatherapi.com/). The app is built using HTML, CSS, and JavaScript.

---

## 📸 Demo

![weather-app-demo](Images/image.png)  
> *Screenshot of the app with dynamic weather data display*

---

## 🚀 Features

- 🔍 Search weather by **city name**
- 🌡️ View **temperature**, **feels like**, **humidity**, **wind speed**, and more
- 📍 Display **latitude** and **longitude** of the searched location
- 🖼️ Dynamic background for visual enhancement
- 🌐 Uses **WeatherAPI** to get live data

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **API**: [WeatherAPI](https://www.weatherapi.com/)

---

## 🧪 How to Run

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app

2. Install a simple live server (if not     already installed):
    ```bash
    npm install -g live-server

3. Add your API key to a config.js file:
    ```js
    // config.js
    export const API_KEY = "your_actual_api_key";

4. Start the app:
    ```bash
    live-server
---

## 🔐 Environment Variables

To avoid exposing your API key:

- Create a config.js file and export your key:
    ```js
    export const API_KEY = "your_api_key";

- Import this in weather.js:
    ```js
    import { API_KEY } from "./config.js";

⚠️ DO NOT upload your config.js file publicly — add it to .gitignore!
---

## 📁 Project Structure

    ```graphql
    weather-app/
    │
    ├── index.html
    ├── style.css
    ├── weather.js
    ├── config.js       # (excluded from Git, stores your API key)
    └── Images/
        └── background_image.jpg
---

## 📌 License
This project is open-source and available under the MIT License.
---

## 📬 Contact
Made with ❤️ by [Rohan Singh Rajput]
📫 [Gmail](rohan7999singh@gmail.com) | [LinkedIn](https://www.linkedin.com/in/rohan-singh-rajput-9ba442266/) | [GitHub](https://github.com/RohanRajput0048)