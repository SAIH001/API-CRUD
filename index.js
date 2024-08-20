async function createDATA (){

  // values contain from index html form 

    var studentName = document.getElementById("studentName").value;
    var studentEmail = document.getElementById("studentEmail").value;
    var studentCourse = document.getElementById("studentCourse").value;


  // creating object for api where this object keys must be similar to api object keys  

    const newUser = {
        name: studentName,
        email: studentEmail,
        course: studentCourse,
       
      }



    // const Response = await fetch("https://66c46cafb026f3cc6cef4c3e.mockapi.io/aptech/NewAddmission",{

    // })


}