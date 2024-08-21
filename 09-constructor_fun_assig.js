// Constructor function definition
function Bank(bankName, location, ifscCode, branchCode){

this.bankName = bankName;
this.location = location;
this.ifscCode = ifscCode;
this.branchCode = branchCode;

}
// Adding openTime and closeTime to the prototype
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

// Creating bank objects
const yesBank = new Bank("Yes Bank", "Mumbai", "YES001","YB001");
console.log(`YES Bank Details is: ${yesBank.bankName}, ${yesBank.location}, ${yesBank.ifscCode}, ${yesBank.branchCode}`);

const sbiBank = new Bank("SBI Bank", "Delhi", "SBI123", "SB002");
console.log(`SBI Bank Details is: ${sbiBank.bankName}, ${sbiBank.location}, ${sbiBank.ifscCode}, ${sbiBank.branchCode}`);

const mahBank = new Bank("Maharashtra Bank", "Pune", "MAH789", "MB003");
console.log(`MAH Bank Details is: ${mahBank.bankName}, ${mahBank.location}, ${mahBank.ifscCode}, ${mahBank.branchCode}`);

const axisBank = new Bank("Axis Bank", "Bangalore", "AXI456", "AB004");
console.log(`AXIS Bank Details is: ${axisBank.bankName}, ${axisBank.location}, ${axisBank.ifscCode}, ${axisBank.branchCode}`);

console.log(`\n============================Add OpenTime and CloseTime====================================\n`);

// Logging openTime and closeTime of sbiBank
console.log(`The open time of ${sbiBank.bankName} is: ${sbiBank.openTime}`);
console.log(`The close time of ${sbiBank.bankName} is: ${sbiBank.closeTime}`);


// Logging bankName and closeTime of axisBank
console.log(`The bank name is: ${axisBank.bankName} and the close time is: ${axisBank.closeTime}`);


// Logging bankName, branchCode, and openTime of yesBank
console.log(`The bank ${yesBank.bankName} with branch code ${yesBank.branchCode} opens at: ${yesBank.openTime}`);







