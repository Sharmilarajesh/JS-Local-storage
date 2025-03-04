
const form = document.getElementById("form");
const readDropdown = document.getElementById("readDropdown");
const userDropdown = document.getElementById("user-dropdown");
const updateDropdown = document.getElementById("update-dropdown");
const updateValue = document.getElementById("update-value");
const deleteDropdown = document.querySelector("#delete select");
const readOutput = document.getElementById("readOutput");
const updateButton = document.querySelector(".update-box button");
const deleteButton = document.querySelector(".delete-box button");


let users = JSON.parse(localStorage.getItem("users")) || [];


function saveUsers() {
    localStorage.setItem("users", JSON.stringify(users));
    populateDropdowns();
}

function populateDropdowns() {
    readDropdown.innerHTML = `<option value="">Select a user</option>`;
    userDropdown.innerHTML = `<option value="">Select a User</option>`;
    deleteDropdown.innerHTML = `<option value="">Select a User</option>`;

    users.forEach((user, index) => {
        let option = `<option value="${index}">${user.firstName} ${user.lastName}</option>`;
        readDropdown.innerHTML += option;
        userDropdown.innerHTML += option;
        deleteDropdown.innerHTML += option;
    });
}


form.addEventListener("submit", function (e) {
    e.preventDefault();

    let firstName = document.getElementById("firstname").value.trim();
    let lastName = document.getElementById("lasrname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let termsCheckbox = document.getElementById("termsCheckbox").checked;

    if (!firstName || !lastName || !email || !password || !phone) {
        alert("Please fill all fields.");
        return;
    }
    if (!termsCheckbox) {
        alert("You must agree to the terms and conditions.");
        return;
    }

    let newUser = { firstName, lastName, email, password, phone };
    users.push(newUser);
    saveUsers();
    alert("User created successfully!");
    form.reset();
});


readDropdown.addEventListener("change", function () {
    let selectedIndex = readDropdown.value;
    if (selectedIndex === "") {
        readOutput.innerText = "";
        return;
    }
    let user = users[selectedIndex];
    readOutput.innerText = `Selected User: ${user.firstName} ${user.lastName}, Email: ${user.email}, Phone: ${user.phone}`;
});


userDropdown.addEventListener("change", function () {
    updateValue.value = "";
});


updateButton.addEventListener("click", function () {
    let selectedIndex = userDropdown.value;
    let updateField = updateDropdown.value; // Now gets correct field value
    let newValue = updateValue.value.trim();

    if (selectedIndex === "" || updateField === "" || !newValue) {
        alert("Please fill all fields.");
        return;
    }

    let user = users[selectedIndex];
    user[updateField] = newValue;
    saveUsers();
    alert(`User ${user.firstName} ${user.lastName} updated successfully!`);
    updateValue.value = "";
});


deleteButton.addEventListener("click", function () {
    let selectedIndex = deleteDropdown.value;
    if (selectedIndex === "") {
        alert("Please select a user to delete.");
        return;
    }
    
    let deletedUser = users.splice(selectedIndex, 1);
    saveUsers();
    alert(`User ${deletedUser[0].firstName} ${deletedUser[0].lastName} deleted successfully!`);
});


populateDropdowns();
