async function FetchUsers (){


    const userData = await fetch("https://66c07a67ba6f27ca9a56c433.mockapi.io/AptechNN/course");


    console.log(userData.json());


}

FetchUsers();