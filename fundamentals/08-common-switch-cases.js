// 90 94 98 -> You belong to cut off list 1
// 84 87 -> You belong to cut off list 2
// Others -> You belong to cut off list 3

var marks = 92;

switch (marks) {
  case 90:
  case 94:
  case 98:
    console.log("You belong to cut off list 1");
    break;

  case 84:
  case 87:
    console.log("You belong to cut off list 2");
    break;

  default:
    console.log("You belong to cut off list 3");
    break;
}
