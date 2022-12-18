var editFormData;

function getFormData() {
  return {
    id: document.getElementById("id").value,
    name: document.getElementById("name").value,
    lastName: document.getElementById("lastName").value,
  };
}
function clearFormData() {
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("lastName").value = "";
}

function setFormData(name, lastName) {
  document.getElementById("id").value = id;
  document.getElementById("name").value = name;
  document.getElementById("lastName").value = lastName;
}

// set the message for form status
function setSuccessMessage(message) {
  document.getElementById("message").innerHTML = message;
}
function editDataCall(id) {
  // call get user details by id API
  fetch("http://localhost:3000/crud/getUserByID?id=" + id, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((response) => {
      console.log("Edit info", response);
      editFormData = response[0];
      setFormData(editFormData.name, editFormData.lastName);
    });
}

// callled this function when user click on button
function submitForm() {
  if (!editFormData)
    addUser(); // if the editFormData is undefined then call addUser()
  else editData();
}
// add user function
function addUser() {
  let payload = getFormData();
  fetch("http://localhost:8080//users/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((response) => {
      setSuccessMessage(response.message);
      // clear input lastName and name
      clearFormData();
      getData(); // reload table
    });
}

// edit data
function editData() {
  var formData = getFormData();
  formData["id"] = editFormData._id; // get _id from selected user
  fetch("http://localhost:3000/crud/updateData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((response) => {
      setSuccessMessage(response.message);
      clearFormData(); // clear the form field
      getData(); // reload the table
    });
}

// delete data
function deleteData(id) {
  fetch("http://localhost:8080//users/" + "id")
    .then((res) => res.json())
    .then((response) => {
      setSuccessMessage(response.message);
      getData();
    });
}

// get data method

function getData() {
  fetch("http://localhost:8080/users")
    .then((res) => res.json())
    .then((response) => {
      var tmpData = "";
      // console.log(response);
      response.forEach((user) => {
        tmpData += "<tr>";
        tmpData += "<td>" + user.id + "</td>";
        tmpData += "<td>" + user.name + "</td>";
        tmpData += "<td>" + user.lastName + "</td>";
        tmpData +=
          "<td><button class='btn btn-primary' onclick='editDataCall(`" +
          user._id +
          "`)'>Edit</button></td>";
        tmpData +=
          "<td><button class='btn btn-danger' onclick='deleteData(`" +
          user._id +
          "`)'>Delete</button></td>";

        tmpData += "</tr>";
      });
      document.getElementById("tbData").innerHTML = tmpData;
    });
}

// get data in text box

const showForm = document.querySelector("#showForm1");

showForm.addEventListener("click", async (e) => {
  e.preventDefault();
  const response = await fetch("http://localhost:8080/users");
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    if (document.getElementById("id").value == data[i].id) {
      document.getElementById("name").value = data[i].name;
      document.getElementById("lastName").value = data[i].lastName;
    }
  }
});

//Delete Data

// const deleteForm = document.querySelector("#deleteForm1");

// deleteForm.addEventListener("click", async (e) => {
//   e.preventDefault();
//   const id = document.getElementById("id");
//   const link = "http://localhost:8080/users" + id;
//   const response = await fetch("http://localhost:8080/users" + id);
//   const data = await response.json();
// });

function deleteForm() {
  // const id = document.querySelector("id");
  let id = parseInt(document.getElementById("id").value);
  // console.log(id + "<br>" + typeof id);
  // let url = `http://localhost:8080/users/${id}`;
  fetch("http://localhost:8080/users/" + id, {
    method: "DELETE",
  }).then((response) => {
    setSuccessMessage(response.message);
    clearFormData(); // clear the form field
    getData(); // reload the table
  });
}

// Update Data
function updateForm() {
  var formData = getFormData();
  let id = parseInt(document.getElementById("id").value);
  formData["id"] = id; // get _id from selected user

  fetch("http://localhost:8080/users/" + id, {
    method: "Put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((response) => {
      setSuccessMessage(response.message);
      clearFormData(); // clear the form field
      getData(); // reload the table
    });
}

getData();
