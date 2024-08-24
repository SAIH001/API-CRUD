
const succesMessage = document.getElementById("successMessage");
succesMessage.style.display = 'none';

async function createDATA (){


  // values contain from index html form 

    var studentName = document.getElementById("studentName").value;
    var studentEmail = document.getElementById("studentEmail").value;
    var studentCourse = document.getElementById("studentCourse").value;




    // values validation

    if(!studentName || !studentEmail || !studentCourse){
        succesMessage.style.display = 'block';
        succesMessage.classList = "alert alert-danger"
        succesMessage.innerText = "Kindly valid  values !! "
        window.location.href('index.html')
    }





  // creating object for api where this object keys must be similar to api object keys  

    const newUser = {
        name: studentName,
        email: studentEmail,
        course: studentCourse,
    }
       



    const Response = await fetch("https://66c46cafb026f3cc6cef4c3e.mockapi.io/aptech/NewAddmission",{

      method: 'POST',
      headers:{ 'Content-Type' : 'application/json'       },
      body: JSON.stringify(newUser)

 })


 succesMessage.style.display = 'block';
 succesMessage.classList = "alert alert-success"
 succesMessage.innerText = "Registration  Successfully Made !! "




}


async function fetchUser(){

  var tableBody  = document.getElementById("tbleBody");


  const userData = await fetch("https://66c46cafb026f3cc6cef4c3e.mockapi.io/aptech/NewAddmission");

  const userDetails = await userData.json();

 

  userDetails.forEach(user=>{


    var tableRow = document.createElement("tr");

    var tableHeading = document.createElement("th");
    tableHeading.innerHTML = user.id;

    var tableData_username = document.createElement("td");
    tableData_username.innerHTML = user.name;

    var tableData_useremail = document.createElement("td");
    tableData_useremail.innerHTML = user.email;

    var tableData_usercourse = document.createElement("td");
    tableData_usercourse.innerHTML = user.course;
    
    
    
    var tableData_userAction = document.createElement("td");


    var update_Btn = document.createElement("button");
    update_Btn.innerHTML = "Update";
    update_Btn.classList="btn btn-primary btn-sm"
   
    var Delete_Btn = document.createElement("button");
    Delete_Btn.innerHTML = "Delete";
    Delete_Btn.classList="btn btn-danger btn-sm"
    Delete_Btn.id="deleteBtn"

   
   
    tableData_userAction.append(update_Btn);
    tableData_userAction.append(Delete_Btn);


    tableRow.append(tableHeading)
    tableRow.append(tableData_username)
    tableRow.append(tableData_useremail)
    tableRow.append(tableData_usercourse)
    tableRow.append(tableData_userAction)


    tableBody.append(tableRow)
 
    
  })




}



async function deleteRecord(userId){
  alert(`user id ${userId}`)
}






