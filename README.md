# 🏡 Find-PG App

A web application built with **React** and **Firebase** to help users find and manage PG/hostel accommodations easily. Users can register or log in, add their PG/hostel details, and browse listings based on preferences.

---

## 🚀 Features

- 🔐 **Authentication** (using Firebase Auth)
- 🏠 **Add Your PG/Hostel** – Users can list their PG/hostel details
- 🔍 **Search PGs/Hostels** – Users can find PGs by location and amenities
- 📄 **View Details** – View property info like rent, availability, contact, and more
- 👤 **User Dashboard** – View and manage user-added properties
- ☁️ **Firebase Integration** – Real-time database & authentication

---

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| **React.js** | Frontend Framework |
| **Firebase** | Backend as a Service (Auth, Firestore, Hosting) |
| **HTML/CSS** | UI Styling |
| **JavaScript** | Application Logic |

---

## 📸 Screenshots

> Add your screenshots here  
> ![Photo from ANANYA P](https://github.com/user-attachments/assets/6ada9630-f155-4e28-8a15-86b36c951be1)
  
> ![Photo from ANANYA P (1)](https://github.com/user-attachments/assets/103c2f4f-83ab-44b4-92ea-87521f1b5677)
> ![Photo from ANANYA P (2)](https://github.com/user-attachments/assets/514db482-c872-4d9e-b596-49de0e0e0a98)


---

## 🧑‍💻 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/find-pg-app.git
cd find-pg-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Firebase Setup

- Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
- Enable **Authentication** (Email/Password or Google)
- Create a **Firestore Database**
- Get your Firebase config from `Project Settings` and add it to your project.

### 4. Start the App

```bash
npm start
```

The app will run on [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
find-pg-app/
│
├── public/
├── src/
│   ├── components/       # Reusable components
│   ├── pages/            # Page components (Dashboard, Login, etc.)
│   ├── firebase.js       # Firebase configuration
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

---

## ✅ Future Improvements

- 🗺️ Map integration to view PGs
- ⭐ Rating and Reviews system
- 📱 Mobile responsiveness
- 📊 Admin dashboard to monitor listings

---

## 💡 Inspiration

Finding PGs and hostels can be difficult and unorganized. This app aims to centralize listings and make it easier for students and working individuals to find suitable accommodations.

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests.

---

