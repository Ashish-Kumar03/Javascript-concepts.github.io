const accountId = 133425;
let accountEmail = "ashish@google.com";
var accountPassword = "1234567";
accountCity = "Jamshedpur";

//accountId = 7;                 //not allowed with const keyword

accountEmail = "ak@ak.com";
accountPassword = "03030303";                       
accountCity = "Delhi";

console.log(accountId);

/*
Prefer not to use var because :
    there is an issue with block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);
