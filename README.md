# 📱 React Native App Setup (Expo CLI + VSCode)

This guide helps you set up and run a **React Native app using Expo CLI** in **Visual Studio Code (VSCode)**. It also includes official Expo guidance from the generated starter project.

---

## ✅ Prerequisites

Before getting started, make sure the following tools are installed:

### 1. Node.js (LTS version recommended)  
Install from: https://nodejs.org/

Verify installation:
```bash
node -v
npm -v
```

### 2. Expo CLI  
Install Expo CLI globally:
```bash
npm install -g expo-cli
```

---

## 🚀 Creating a New Project

To create a new Expo-powered React Native app:
```bash
npx create-expo-app MyApp
cd MyApp
```

---

## 📦 Official Expo Project Quickstart

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

### Get started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the app:
   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a:
- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go) — the easiest way to test on a real device.

You can start developing by editing files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

---

## 🛠 Recommended VSCode Extensions

Install these extensions in VSCode for a better developer experience:

- ✅ React Native Tools  
- ✅ ESLint  
- ✅ Prettier - Code formatter  
- ✅ Expo Tools (optional)  

---

## 🐞 Debugging in VSCode

1. Open the **Run & Debug** panel in VSCode.
2. Select `Debug Expo App` (enabled by React Native Tools).
3. Set breakpoints and inspect logs directly in VSCode.

---

## ⚙️ Optional VSCode Settings

You can auto-format code with Prettier by adding this to `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

---

## 📱 Running the App

### On a real device:
1. Install **Expo Go** from the App Store or Google Play.
2. Run the app:
   ```bash
   npx expo start
   ```
3. Scan the QR code with **Expo Go**.

### On an emulator/simulator:
Expo supports:
- [Android emulators](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulators](https://docs.expo.dev/workflow/ios-simulator/)

> Note: Expo Go is the fastest and easiest way to test apps.

---

## 🔄 Reset the Project

To clear the starter code and begin fresh:
```bash
npm run reset-project
```
This will move the original template to **app-example/** and leave a clean **app/** directory for development.

---

## 🧭 Learn More

- [📘 Expo Documentation](https://docs.expo.dev/)
- [📚 Learn Expo Tutorial](https://docs.expo.dev/tutorial/introduction/)
- [🧠 File-based Routing in Expo](https://docs.expo.dev/router/introduction/)

---

## 🤝 Join the Community

- ⭐ [Expo on GitHub](https://github.com/expo/expo)
- 💬 [Expo Discord Community](https://chat.expo.dev)

---

## 📂 Project Structure (Basic)

```
MyApp/
├── app/                # Your screens/components (file-based routing)
├── assets/             # Images, fonts, etc.
├── node_modules/
├── package.json
├── .vscode/
│   └── settings.json
├── app-example/        # (optional) Old starter code after reset
└── README.md
```

---

## ✅ You're Ready!

You now have a fully working **React Native (Expo)** environment using **VSCode**. Start building cross-platform apps today! 🚀
