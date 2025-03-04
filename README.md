# JS-Local-storage
CRUD operation in local storage

# Local-storage-CRUD

This project is a simple CRUD (Create, Read, Update, Delete) application built using HTML, CSS, and JavaScript. 
It stores user credentials using localStorage in JavaScript.

1. Create User Data
   ->A form is provided for users to enter their details.
   ->When the Submit button is clicked,the user details are stored in localStorage using localStorage.setItem().
   ->Each user is stored as an object inside an array.
   ->If any field is left empty, an alert message is displayed.
   
2. Read User Data
   ->Users can select a stored user from a dropdown menu.
   ->Based on the selected user, their details are retrieved from localStorage.
   ->The localStorage.getItem() function is used to fetch and display user details.
   
4. Update User Data
   ->Users can select a user from the dropdown
   ->A field to update (e.g., name, email, phone)
   ->A new value for the selected field also created.
   ->The selected user’s data is updated in localStorage using localStorage.setItem().
   
6. Delete User Data
   ->Users can select a user from the dropdown and delete them.
   ->The selected user is removed from localStorage based on their index.
   
When the user submits the form, the data is stored in local storage as a JSON string using JSON.stringify().
When retrieving the data, it is converted back into a JavaScript object using JSON.parse().

