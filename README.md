# 🌍 WanderScape – Full-Stack Rental Marketplace (AI-Enhanced)

WanderScape is a production-style full-stack rental marketplace that enables property owners to publish listings and renters to explore stays. The system follows a clean **MVC architecture**, integrates **cloud image storage**, supports **secure user authentication**, and includes a modern **AI-powered description generator** for property listings.

---

## ✨ Key Features

- 🔐 **User Authentication & Authorization**  
  Implemented with Passport.js (local strategy), protected routes, and owner-only permissions.

- 🏡 **Complete Property Listing System**  
  Create, edit, delete, and search rental listings with validations and clean CRUD flows.

- 🤖 **AI Description Generator**  
  Integrated an AI-powered assistant using **Groq Cloud (Llama 3.3 70B)** to auto-generate property descriptions inside both New and Edit listing forms.

- 🖼️ **Cloud Image Pipeline**  
  Multer for uploads + Cloudinary for optimized cloud storage and delivery.

- 🧰 **Scalable MVC Structure**  
  Dedicated folders for controllers, routes, models, utilities, and views.

- 📱 **Responsive UI**  
  Built using EJS templates with modular components and Bootstrap 5.

- 🧾 **Robust Validation & Error Handling**  
  Centralized validation using Joi and custom middleware for clean request handling.

---

## 🛠️ Tech Stack

### Frontend
- EJS (Templating)
- HTML5, CSS3, JavaScript
- Bootstrap 5

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose

### Integrations & Tools
- Groq AI API (Llama-3.3 model)
- Cloudinary
- Multer
- Passport.js
- Joi
- dotenv

---

## 🤖 AI Description Feature

A dedicated backend endpoint (`POST /listings/ai/description`) accepts the title and location of a property and returns an AI-generated description.

- Powered by **Groq + Llama-3.3-70B-Versatile**
- Generates warm, travel-friendly, 120–180 word descriptions
- Integrated directly into the form using AJAX (fetch)
- Works on both **Create Listing** and **Edit Listing** pages

---

## 📂 Project Structure (MVC)  

```bash
MajorProject/
│── controllers/       # Controllers for listings, users, reviews
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
│── init/              # Initialization scripts & seed data
│   ├── data.js
│   └── index.js
│
│── models/            # Database models (Mongoose schemas)
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
│── public/            # Static assets
│   ├── css/
│   └── js/
│
│── routes/            # Application routes
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
│── utils/             # Utility classes & helpers
│   ├── ExpressError.js
│   └── wrapAsync.js
│
│── views/             # EJS templates (frontend UI)
│   ├── Includes/      # Navbar, footer, flash messages
│   ├── Layouts/       # Boilerplate layouts
│   ├── listings/      # Listing pages (CRUD)
│   ├── users/         # Auth pages (login/signup)
│   └── error.ejs
│
│── .env               # Environment variables
│── app.js             # Main entry point
│── cloudConfig.js     # Cloudinary configuration
│── middleware.js      # Custom middleware
│── schema.js          # Joi validation schemas
│── package.json
│── README.md

```
---

## 🚀 Live Demo

https://wanderscape-full-stack-rental.onrender.com/listings

---

## 📌 Future Enhancements

- AI-based price recommendations  
- Category prediction based on description  
- Interactive map for properties  
- Review sentiment analysis  

---

## 👤 Author

**Shatayu Khante**

