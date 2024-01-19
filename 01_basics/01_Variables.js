const accountId = 14425
let accountEmail = "rudra@google.com"
var accountPasword = "123456"
accountCity = "Berhampur"
let accountState;
// if you declare a variavble in javascript and not giving any value then it shows the resukt undefined. 

//accountId = 2  // const variable is not allowed to change
accountEmail = "hc@hv.com"
accountPassword = "147852"
accountCity = "Bengaluru"

console.log(accountId);


/*   Prefer not to use var
Because of issue in block scope and funtional scope */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])