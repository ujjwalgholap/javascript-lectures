/*
Switch statement syntax

switch(key){
    case "value-1":
        statement
        break;
    
    case "value-2":
        statement
        break;

    default:
        statement;
        break;
}
*/
// var login = "email";
// switch (login) {
//   case "email":
//     console.log("login using email");
//     break;

//   case "google":
//     console.log("login using google");
//     break;

//   case "facebook":
//     console.log("login using facebook");
//     break;

//   default:
//     console.log("please check login method");
//     break;
// }

var num = 10;

switch (num) {
  case 4:
    console.log(`you have selected ${num}`);
    break;

  case 10:
    console.log(`you have selected ${num}`);
    break;

  case 12:
    console.log(`you have selected ${num}`);
    break;

  default:
    console.log("no number selected");
    break;
}
