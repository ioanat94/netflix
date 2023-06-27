<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ioanat94/netflix">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/800px-Netflix_2015_N_logo.svg.png" alt="Logo" width="80" height="auto">
  </a>

<h3 align="center">Netflix Clone</h3>

  <p align="center">
    A full-stack Netflix clone that comes with an admin dashboard.
    <br />
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

<p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/netflix-clone-49e41.appspot.com/o/prevN.png?alt=media&token=517f7148-b492-4eb9-a98e-6917e398ddab" alt="Netflix Screenshot" width="800" height="auto">  
  <br />  
  <br />  
<img src="https://firebasestorage.googleapis.com/v0/b/netflix-clone-49e41.appspot.com/o/prevAD.png?alt=media&token=0fe915b7-6614-4bf5-ac21-68fa1c4b13f5" alt="Admin Dashboard Screenshot" width="800" height="auto"></p>

This is a Netflix clone written using the MERN stack. It features a client side which allows users to register, login, browse and watch content categorized by type (movie or series) and genre. It also features an admin dashboard which is a fully functional CMS that allows admins to view, create, modify and delete users, content and content lists. 

<sub>Note: For copyright and licensing reasons, there are no actual movies or series to watch. All video content is made up of royalty free placeholder videos.</sub>

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* [Sass](https://sass-lang.com/)
* [Material UI](https://mui.com/)
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [JSON Web Token](https://jwt.io/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Firebase](https://firebase.google.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm  
  <br /> 
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo  
   <br /> 
   ```sh
   git clone https://github.com/ioanat94/netflix.git
   ```
2. Install NPM packages  
   <br /> 
   ```sh
   npm install  // API dependencies
   cd client
   npm install  // Client side dependencies
   cd ..
   cd admin
   npm install  // Admin dashboard dependencies
   ```
3. Run server and front end  
   <br /> 
   ```sh
   cd ..
   nodemon start  // Start server
   cd client
   npm start      // Start Netflix front end
   cd ..
   cd admin
   npm start      // Start admin dashboard front end
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

- [Register](https://netflix-clone-it.herokuapp.com/register) an account using an email address, a username and a password.
- [Login](https://netflix-clone-it.herokuapp.com/login) using the email and password you used to register.
- You will see a featured movie or series and five random content lists. You can hover over the contents of the lists to see more information and a 'trailer'. You can click the 'Play' button on any of the movies or series shown to go to the 'Watch' page.
- You can log out using the drop-down menu in the top right corner of the screen.
- If you have an admin account, you can access the Admin Dashboard via the drop-down menu in the top right corner of the screen. Here you can:
  - see user stats as well as the latest users and content
  - see a list of all users, modify or delete them, and create new users
  - see a list of all content, modify or delete them, and create new content
  - see a list of all content lists, modify or delete them, and create new content lists

<sub>Note: For security reasons, only admin accounts can access the Admin Dashboard. I won't make these credentials public but I can share them upon request.</sub>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Ioana Tiplea - ioanatiplea94@gmail.com  - [LinkedIn](https://www.linkedin.com/in/ioana-tiplea/)

Project Link: [https://github.com/ioanat94/netflix](https://github.com/ioanat94/netflix)

<p align="right">(<a href="#top">back to top</a>)</p>
