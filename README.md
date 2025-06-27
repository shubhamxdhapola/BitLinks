# 🔗 BitLinks - URL Shortener App

BitLinks is a minimal, fast, and secure URL shortener built with **Next.js (App Router)**, **MongoDB**, and **Tailwind CSS**. Users can shorten long URLs, get custom short links, and track redirections seamlessly.

---

## 🚀 Features

- 🔐 Shorten long URLs with a single click
- 🧭 Automatic redirection from short URL to original
- 📦 MongoDB integration for data persistence
- ✅ Duplicate prevention
- ⚡ Built with Next.js 13+ (App Router)
- 🎨 Clean UI with Tailwind CSS
- 🛡️ Input validation and error handling

---

## 🧰 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **ORM**: [Mongoose](https://mongoosejs.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

---

## 🛠️ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/shubhamxdhapola/BitLinks.git
cd BitLinks
````

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env` file:

```
MONGO_ATLAS_URI=your_mongodb_connection_string
NEXT_PUBLIC_HOST=you_next_public_host_string
```

### 4. Run the dev server

```bash
npm run dev
```

Go to [http://localhost:3000](http://localhost:3000)

---

## 🌐 API Endpoints

### `POST /api/generate`

* **Body**: `{ "longUrl": "https://example.com" }`
* **Returns**: `{ "shortUrl": "abc123" }`

### `GET /:shortUrl`

* Redirects to original URL if exists, else shows 404.

---

## 🔐 Upcoming Features (Planned)

* 🧑‍💻 **Authentication System**

  * Sign up / Sign in with Google, GitHub, etc.
  * Auth-protected routes using NextAuth or similar

* 📊 **User Dashboard**

  * View, manage, and delete your own shortened URLs
  * Track click statistics

---

## 🤝 Contributions

Contributions are welcome! Fork the repository and submit a pull request. For major changes, open an issue first to discuss what you'd like to change.

---

## 📄 License

MIT License © [Shubham Dhapola](https://github.com/shubhamxdhapola)

```
