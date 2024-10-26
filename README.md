# Tushar's Portfolio

Welcome to Tushar's Portfolio! This is my personal portfolio website designed to showcase my skills, projects, and background in web development. The site highlights my journey and the technologies I've mastered, offering a glimpse into my work and the projects I've been a part of.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Directory Structure](#directory-structure)
3. [Functionality Overview](#functionality-overview)
4. [Packages Used](#packages-used)
5. [Scripts](#scripts)
6. [Installation](#installation)
7. [Running the Project](#running-the-project)
8. [Acknowledgements](#Acknowledgements)
9. [Contact Information](#contact-information)


## Project Overview

This portfolio website presents my skills, projects, and background in web development. Built with React, Material UI, and modern web technologies, it offers a clear and engaging look at my technical abilities and experience. Used Axios to featch data from backend. (only in the PageNotFound page data is featched to understand the concept remaining all the pages use the data from the Constants.js file in the Utils folder)

## Directory Structure

```bash
root/
│
├── public/
│   ├── index.html
│   ├── logo01.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Academics.jsx
│   │   ├── BreadCrumbComponent.jsx
│   │   ├── Dashbord.jsx
│   │   ├── Home.jsx
│   │   ├── PageNotFound.jsx
│   │   ├── Profile.jsx
│   │   └── Projects.jsx
│   ├── redux/
│   │   ├── slices/
│   │   │   ├── navSlice.jsx
│   │   │   └── systemSlice.jsx
│   │   └── store.js
│   ├── resources/
│   │   ├── css/
│   │   │   ├── academics.css
│   │   │   ├── dashbord.css
│   │   │   ├── home.css
│   │   │   ├── profile.css
│   │   │   ├── projects.css
│   │   │   ├── shared_animation.css
│   │   │   └── shared.css
|   │   ├── fonts/
│   │   └── images/
│   ├── Utils/
│   │   └── Constants.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package-lock.json
├── pakage.json
└── README.md
```

## Functionality Overview

### Home Page

- Personalized greeting
- Career Aspirations

### About Page

- Personal Background 
- Detailed showcase of technical skills , programming languages and certifications

### Projects Page

- Collection of projects with descriptions

### Contact Page

- Links to social profiles

### 404 Page

- Custom error page
- User data fetch (for learning express)

## Packages Used

- React: Core library for building user interfaces.
- Material UI: A popular React UI framework.
- Redux: State management library (if applicable).
- Axios: Promise-based HTTP client for making API requests.
- react-router-dom: Library for routing in React applications.

## Scripts

Runs the app in development mode

```bash
npm start
```

Builds the app for production

```bash
npm run build
```

Runs tests

```bash
npm run test
```

Checks code quality

```bash
npm run lint
```

## Installation

Clone the repository:

```bash
git clone https://github.com/tusaaaaar/tushar-sPortfolio
```

Navigate to the project directory:

```bash
cd tushar'sPortfolio
```

Install dependencies:

```bash
npm install
```

## Running the Project

After installation, run the project locally:

```bash
npm start
```

## Acknowledgements

Special thanks to my instructors, Ashik Rai and Gigme Lepcha, for teaching the web development course online. Their guidance has been invaluable in my learning journey.

## Contact Information
For any inquiries or feedback, please feel free to reach out to me at:

Email: sharmatushar7171@gmail.com
LinkedIn: 'https://www.linkedin.com/in/tushar7171/'