# Samarth's Cafe Website

A beautiful, responsive website for Samarth's Cafe with a contact form and table reservation system with database.

## Features

- 🎨 Modern and elegant design
- 📱 Fully responsive (works on mobile, tablet, and desktop)
- ☕ Menu section with coffee, tea, and snacks
- 📝 Contact form with form validation
- 📅 Table reservation system with Firebase database
- 🎯 Smooth scroll navigation
- ✨ Animated elements

## Files Included

- `index.html` - Main website
- `style.css` - Styling
- `script.js` - JavaScript (including Firebase integration)
- `README.md` - This file

## How to Deploy to GitHub Pages

Follow these steps to make your website publicly accessible:

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in to your account
2. Click the **+** icon in the top right corner and select **New repository**
3. Name your repository: `samarths-cafe` (or any name you prefer)
4. Select **Public** as the repository visibility
5. Click **Create repository**

### Step 2: Upload Your Files

1. On your repository page, click **uploading an existing file** link
2. Drag and drop all three files:
   - `index.html`
   - `style.css`
   - `script.js`
3. Click **Commit changes**

### Step 3: Enable GitHub Pages

1. Go to your repository **Settings**
2. Click on **Pages** in the left sidebar
3. Under **Build and deployment** > **Branch**:
   - Select **main** (or **master**)
   - Select **/(root)**
4. Click **Save**
5. Wait about 1-2 minutes for the deployment to complete

### Step 4: Get Your Website Link

1. Go back to the **Pages** section in Settings
2. You will see a link like: `https://yourusername.github.io/samarths-cafe/`
3. This is your public website link! Share it with everyone.

## Setting Up the Contact Form

The contact form uses [Formspree](https://formspree.io/) to handle submissions without requiring a backend server.

### Step 1: Create a Formspree Account

1. Go to [formspree.io](https://formspree.io/) and sign up (it's free!)
2. Click **New Form** to create a new form
3. Name it "Samarth's Cafe Contact"
4. Click **Create Form**

### Step 2: Get Your Form ID

1. In your Formspree dashboard, click on your form
2. Go to the **Integrations** tab
3. Copy the **Endpoint** URL, which looks like:
   `https://formspree.io/f/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

### Step 3: Update Your HTML

1. Open `index.html` in your code editor
2. Find this line:
   ```html
   <form
     id="contactForm"
     action="https://formspree.io/f/YOUR_FORM_ID"
     method="POST"
   ></form>
   ```
3. Replace `YOUR_FORM_ID` with your actual Formspree form ID:

   ```html
   <form
     id="contactForm"
     action="https://formspree.io/f/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
     method="POST"
   ></form>
   ```

4. Save the file and commit the changes to GitHub

### Step 4: Test Your Form

1. Visit your live website
2. Fill out the contact form
3. Click "Send Message"
4. You should receive the submissions in your Formspree dashboard

---

## Setting Up Firebase Database (For Reservations)

The reservation system uses Firebase Realtime Database to store table bookings.

### Step 1: Create a Firebase Project

1. Go to [console.firebase.google.com](https://console.firebase.google.com/) and sign in
2. Click **Add project** and give it a name (e.g., "samarths-cafe")
3. Accept the terms and click **Create project**
4. Once ready, click **Continue**

### Step 2: Enable Realtime Database

1. In your Firebase console, click **Build** in the left sidebar
2. Select **Realtime Database**
3. Click **Create Database**
4. Choose a location (preferably closest to you)
5. Select **Start in test mode** (allows read/write without authentication)
6. Click **Enable**

### Step 3: Get Your Firebase Config

1. Click the **Settings icon** (gear) next to **Project Overview**
2. Select **Project settings**
3. Scroll down to **Your apps** and click the **</>** (web) icon
4. Register the app (give it a name like "cafe-website")
5. You'll see a `firebaseConfig` object - copy these values:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT.firebaseapp.com",
     databaseURL: "https://YOUR_PROJECT.firebaseio.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT.appspot.com",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID",
   };
   ```

### Step 4: Update script.js

1. Open `script.js` in your code editor
2. Find the Firebase config section (around line 150)
3. Replace the placeholder values with your actual Firebase config:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSy...",
     authDomain: "samarths-cafe.firebaseapp.com",
     databaseURL: "https://samarths-cafe.firebaseio.com",
     projectId: "samarths-cafe",
     storageBucket: "samarths-cafe.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abc123...",
   };
   ```

### Step 5: View Reservations

1. Go to your Firebase Console
2. Click **Build** > **Realtime Database**
3. You will see all reservations stored under the "reservations" node
4. Each reservation shows: name, email, phone, guests, date, time, special requests

---

## Customization

### To Update Cafe Details

Open `index.html` and search for:

- **Address**: Line ~155 (123 Coffee Street)
- **Phone**: Line ~161 (+91 98765 43210)
- **Email**: Line ~167 (hello@samarthscafe.com)
- **Hours**: Line ~173 (8:00 AM - 10:00 PM)

### To Update Menu Prices

In `index.html`, find the menu section and modify the prices:

```html
<span class="price">₹80</span>
```

Change `₹80` to your desired price.

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables
- **JavaScript** - Form handling and interactivity
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Playfair Display & Poppins)
- **Formspree** - Contact form backend

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for Samarth's Cafe. All rights reserved.

---

☕ Made with love for Samarth's Cafe
