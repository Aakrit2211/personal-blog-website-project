Blog Website
A simple blog application built using Express.js and EJS for rendering dynamic content. This application allows users to create, edit, and delete blog posts, with a contact form included for user inquiries.

Features
Create new blog posts.
Edit or delete existing posts.
Display all posts on the home page.
Clear all posts with a single click.
Contact form to collect user inquiries.
Tech Stack
Backend: Node.js, Express.js
Frontend Templating: EJS
Styling: CSS (style.css)
Data Handling: In-memory Array (for simplicity)

Project Setup
Prerequisites
Node.js: Make sure you have Node.js installed. Download Node.js
Git: Version control tool to clone the repository (optional).
Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
cd blog-website
Install dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
node app.js
Open your browser and go to:

arduino
Copy code
http://localhost:3000
Project Structure
php
Copy code
blog-website/
│
├── public/               # Static files (CSS, images)
│   └── style.css
├── views/                # EJS Templates
│   ├── index.ejs         # Home page and posts list
│   ├── create.ejs        # Create new post form
│   ├── edit.ejs          # Edit post form
│   ├── contact.ejs       # Contact form
├── app.js                # Main Express app
├── package.json          # Project metadata and dependencies
└── README.md             # Documentation (you are here)
Usage
1. Create a New Post
Navigate to Create via the navigation menu.
Enter the title and content, then click Submit.
2. Edit a Post
On the home page, click Edit next to the post you want to modify.
Modify the title or content and click Update.
3. Delete a Post
Click Delete next to the post you want to remove.
4. Clear All Posts
Click the Clear button to remove all posts at once.
5. Submit a Contact Form
Navigate to Contact via the navigation menu.
Fill in the form and click Submit (this logs the input to the console).
Routes
Method	Route	Description
GET	/ or /home	Display all posts
GET	/create	Render form to create a new post
POST	/submit	Submit a new post
GET	/edit/:index	Render form to edit a post
POST	/edit/:index	Update the post at the given index
POST	/delete/:index	Delete the post at the given index
POST	/clear	Clear all posts
GET	/contact	Display the contact form
POST	/submit-contact	Log contact form data to console
Future Improvements
Add persistent storage (e.g., MongoDB).
Add user authentication for creating and editing posts.
Implement form validation and error handling.
Contributing
Feel free to fork this repository, create a branch, and submit a pull request if you want to improve the project.

License
This project is licensed under the MIT License.

Contact
For any inquiries or issues, feel free to reach out.

