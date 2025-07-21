# 🛒 SnapCart

SnapCart is a modern e-commerce web application built using **React**. It offers a seamless shopping experience for users, with features like product browsing, cart management, user authentication, and checkout. The site is built with scalability and performance in mind and uses a clean component structure and efficient state management.

## 🚀 Features

- 🛍 Product Listing (Shoes, Accessories, and more)
- 🛒 Add to Cart / Remove from Cart functionality
- 🔍 Search Products
- ✅ Signup & Login (Basic Authentication)
- 📦 Checkout Flow
- 📬 Contact Form with Validation and Success Message
- 📄 Persistent Cart using `localStorage`
- ⚙️ Loader animations for feedback
- 📈 Cart Total and Subtotal Calculation

## 📁 Project Structure

SnapCart/
├── public/
├── src/
│ ├── components/ # UI Components (Loader, Alerts, etc.)
│ ├── Context.js # React Context for global state
│ ├── AppProvider.js # Main logic provider
| ├── more.js   # more components
│ ├── pages/ # Pages like Home, Shoes, Accessories, Contact, etc.
│ ├── api/ # Backend endpoints (expected)
│ └── index.js
├── .gitignore
├── README.md
└── package.json

markdown
Copy
Edit


## 🧠 Technologies Used

- ⚛️ React (with Hooks and Context API)
- 📦 Axios for API Requests
- 💾 localStorage for Cart State Persistence
- 📝 FormData API for sending form data
- 💡 useMemo & useEffect for performance optimizations
- 🎉 Conditional Rendering (Loader, Success Messages, Password Toggle)

## 🛠 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/snapcart.git
   cd snapcart

2. **Install Dependencies**
    npm install

3. **Start the development server**
     npm run dev
4. **Build for production**
    npm run build