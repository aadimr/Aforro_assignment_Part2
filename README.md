# React API Integration & Data Table Assignment

This project is a React-based data table application that fetches user data from a public API and displays it in a searchable, sortable, and filterable table.

## Public API Used

https://jsonplaceholder.typicode.com/users

---

## Tech Stack

- React.js
- Vite

---

# Project Setup Steps

## 1. Clone the repository

```bash
git clone https://github.com/aadimr/Aforro_assignment_Part2.git
```

## 2. Navigate to the project directory

```bash
cd Aforro_assignment_Part2
```

## 3. Install dependencies

```bash
npm install
```

## 4. Start the development server

```bash
npm run dev
```

---

# Features Implemented

- Fetch user data from public API
- Display data in table format
- Search by name or email
- Name sorting (A–Z and Z–A)
- City-based filtering
- Loading state handling
- Error state handling
- Reusable React components
- Clean and structured UI

---

# Assumptions & Decisions Made

- Fetch API was used for data fetching.
- Client-side searching, filtering, and sorting were implemented for better performance and simplicity.
- Sorting functionality was implemented specifically for the Name column in both ascending and descending order.
- Search functionality updates results dynamically while typing.
- City filtering options were generated from the available API data.
- The UI design was kept clean and minimal for better readability and user experience.

---

# Table Columns

- Name
- Email
- Company Name
- City

---

# Author

Aditya Shaw
