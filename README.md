# GitHub User Info :male_detective:

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)](https://forthebadge.com)

<p align="center">
    <img src="https://image.freepik.com/free-vector/search-concept-landing-page_52683-18606.jpg" alt="Logo">
  </a>

## _GitHub User Info is an online open source web application which helps you to find GitHub user and their details for FREE._

- User can search for a GitHub user.
- Users with similar names can be found in the search results.
- Details of user and their profile can be found easily.
- Latest repository list of the user can be found in their profile page.
- User can clear the previous search results.

### Top Features
- Dynamic routes for each user profile.
- Clean and simple UI.
- Fast loading and error handling.
- Mobile responsiveness.

### Tech stacks used
- ReactJS
    - useState
    - useEffect
    - class and function based components
- HTML, CSS
- GitHub users API

### NPM Packages used:
- react-router-dom
- axios

### Folder structure

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   └── index.html
└── src
    ├── App.css
    ├── App.js
    ├── Components
    │   ├── Layout
    │   │   ├── Alert.js
    │   │   ├── Footer.js
    │   │   ├── Navbar.js
    │   │   ├── Spinner.js
    │   │   └── spinner.gif
    │   ├── Pages
    │   │   ├── About.js
    │   │   └── Error.js
    │   └── Users
    │       ├── Profile.js
    │       ├── Repo.js
    │       ├── Repos.js
    │       ├── SearchBar.js
    │       ├── User.js
    │       └── Users.js
    ├── index.css
    └── index.js
```

### To install and run locally

Clone the repo

```
git clone https://github.com/tejan-singh/github-user-info.git
```

Change into directory project

```
cd github-user-info
```

install

```
npm i
```

Run the dev server

```
npm start
```
