# 🏠 EstateVista – Real Estate UI Template

## 1. Project Title

**EstateVista – Real Estate Property Search UI**

## 2. Project Description

EstateVista is a modern and responsive **Real Estate website UI template** designed to help users explore properties, search for homes, filter properties, view property details, and contact real estate agents.

The project focuses on creating a clean, simple, and user-friendly interface for a real estate platform using **HTML, CSS, and JavaScript**.

---

## 3. Sector

**Real Estate**

---

## 4. Purpose of the Project

The main purpose of EstateVista is to demonstrate how a modern real estate website can provide an easy way for users to:

* Explore available properties
* Search properties by location
* Filter properties by type
* Filter properties according to budget
* View property information
* Add properties to favorites
* Contact a property agent
* Switch between light and dark mode
* Use the website on desktop, tablet, and mobile devices

---

## 5. Research and Design Study

### What is the Real Estate UI Pattern?

A Real Estate UI pattern is a common website design structure used by property platforms to help users discover and evaluate properties.

Typical features include:

* Property cards
* Property images
* Location information
* Price information
* Search and filtering
* Property details
* Favorite/wishlist buttons
* Contact agent options

### Where is this Pattern Used?

Real estate interfaces are commonly used in:

* Property listing websites
* Real estate agencies
* Property rental platforms
* Apartment search applications
* Property buying platforms
* Real estate mobile applications

### Why is this Pattern Relevant?

Users usually need to compare many properties before making a decision. A well-designed interface makes it easier to understand important information such as:

* Property price
* Location
* Number of bedrooms
* Number of bathrooms
* Property size
* Property type

EstateVista organizes this information into simple property cards and interactive filters.

---

## 6. Design and Interaction Patterns

The project uses several common UI patterns.

### Property Cards

Each property is displayed as a card containing:

* Property image
* Property type
* Property name
* Location
* Bedrooms
* Bathrooms
* Area
* Price
* View Details button

### Search and Filtering

Users can filter properties based on:

* Location
* Property type
* Budget

JavaScript dynamically displays matching properties.

### Favorites

Users can click the heart button to mark a property as a favorite.

### Property Details Modal

Clicking **View Details** opens a popup containing additional property information.

### Dark Mode

Users can switch between light and dark themes.

The selected theme is stored using **LocalStorage**.

### Responsive Design

The interface automatically adjusts to:

* Desktop screens
* Tablets
* Mobile phones

---

## 7. Main Features

* 🏠 Modern real estate homepage
* 🔍 Property search
* 📍 Location filtering
* 🏢 Property type filtering
* 💰 Budget filtering
* ❤️ Favorite properties
* 📋 Property details popup
* 📞 Contact agent interaction
* 🌙 Dark mode
* 📱 Responsive design
* 🖼️ Property image gallery/cards
* Smooth scrolling
* Interactive buttons

---

## 8. Technologies Used

### HTML5

Used to create the structure of the website.

### CSS3

Used for:

* Layout
* Colors
* Typography
* Responsive design
* Animations
* Cards
* Modal windows
* Dark mode styling

### JavaScript

Used for:

* Property filtering
* Search functionality
* Favorite buttons
* Property details modal
* Contact agent interaction
* Dark/light mode
* LocalStorage

### Google Fonts

The project uses the **Inter** font for a clean and modern appearance.

---

## 9. Project Structure

```text
real-estate/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### index.html

Contains the main website structure, including:

* Navigation
* Hero section
* Search section
* Property cards
* Services
* About section
* Footer
* Property details modal

### style.css

Contains all visual styling and responsive layouts.

### script.js

Contains all interactive functionality.

### README.md

Contains project documentation and information.

---

## 10. How to Run the Project

### Step 1

Download or clone the project.

### Step 2

Open the project folder.

### Step 3

Open:

```text
index.html
```

in a web browser.

### Step 4

Use the search, filters, favorites, property details, and dark mode features.

No server or database is required.

---

## 11. Implementation Highlights

The project uses JavaScript to dynamically filter property cards.

For example:

```javascript
if (
    locationMatch &&
    typeMatch &&
    budgetMatch
) {
    card.style.display = "block";
}
```

The project also uses LocalStorage to remember the selected theme:

```javascript
localStorage.setItem("theme", "dark");
```

This provides a more interactive user experience.

---

## 12. Responsive Design

EstateVista is designed to work across different screen sizes.

### Desktop

Multiple property cards are displayed in a grid.

### Tablet

The property grid automatically reduces the number of columns.

### Mobile

The layout changes to a single-column design and the navigation/search interface becomes easier to use on smaller screens.

---

## 13. What This Implementation Adds

EstateVista combines common real estate design patterns with interactive features.

The implementation adds:

* Dynamic property filtering
* Interactive favorite buttons
* Property details modal
* Dark mode
* Responsive layouts
* Smooth navigation
* User-friendly property cards

These features make the interface more interactive than a simple static property listing page.

---

## 14. Future Improvements

The project can be extended with:

* User login and registration
* Real property database
* Google Maps integration
* Advanced price range slider
* Property comparison
* Agent profiles
* Property booking
* Online enquiry form
* Image gallery
* Backend integration
* User accounts and saved properties

---

## 15. Conclusion

EstateVista demonstrates a modern **Real Estate UI Template** using HTML, CSS, and JavaScript.

The project focuses on usability, responsive design, property discovery, filtering, and interactive property details.

It provides a strong foundation for developing a complete real estate platform in the future.
