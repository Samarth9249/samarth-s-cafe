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

## Contact Form (Email + LocalStorage)

The contact form now uses a simple **mailto** approach that opens the visitor's email client. No backend needed!

### How it works:

1. When someone fills out the contact form, their default email app opens
2. The message is pre-filled with their input
3. A backup copy is also saved in the browser's localStorage

### To customize:

1. Open `script.js`
2. Find the line: `const OWNER_EMAIL = "hello@samarthscafe.com";`
3. Replace with your actual email address

### To view saved messages (localStorage):

- Open browser Developer Tools (F12)
- Go to Application > Local Storage
- Look for `cafeMessages` key

---

## Reservation System (Local Storage - No Cloud Needed!)

The reservation system now uses **localStorage** - perfect for learning! Data is stored in the browser.

### How to View Reservations:

1. Open your website in a browser
2. Open Developer Tools (press F12)
3. Go to **Console** tab
4. Type: `viewReservations()` and press Enter
5. You'll see all reservations listed!

### To Clear Reservations:

In console, type: `clearReservations()`

### How it works:

- Reservations are saved in the visitor's browser localStorage
- Each new reservation gets stored with name, email, phone, date, time, etc.
- Perfect for learning and testing!

### Note for Production:

For a real cafe with multiple customers, you'd need a cloud database. But for learning, this works great!

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
