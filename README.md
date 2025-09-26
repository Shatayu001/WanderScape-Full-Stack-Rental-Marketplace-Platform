# 🌍 WanderScape – Full-Stack Rental Marketplace Platform  

**WanderScape** is a full-stack rental marketplace platform built to connect property owners with renters. It follows the **MVC (Model-View-Controller) architecture** for maintainability, scalability, and clean separation of concerns.  

🚀 **[Live Demo – Coming Soon](https://wanderscape-full-stack-rental.onrender.com/listings)**  

---

## ✨ Features  

- 🔑 **User Authentication & Authorization** – Implemented with **Passport.js**.  
- 🏡 **Rental Listings** – Owners can create, update, and delete property listings.  
- 🖼️ **Image Uploads** – Integrated **Multer** for file handling and **Cloudinary** for cloud-based storage & serving images via URL.  
- 📊 **MVC Structure** – Clear separation of Models, Views, and Controllers for scalability.  
- 📱 **Responsive UI** – Built with **EJS templates** and reusable components.  
- ✅ **Secure System** – Validation, middleware, and error handling for robust flows.  

---

## 🛠️ Tech Stack  

**Frontend**  
- HTML, CSS, JavaScript  
- EJS (Templating Engine)  

**Backend**  
- Node.js  
- Express.js  
- MongoDB + Mongoose  

**Integrations & Tools**  
- Passport.js → Authentication & Authorization  
- Multer → File upload handling  
- Cloudinary → Image hosting & URL generation  
- dotenv → Environment variable management  

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
