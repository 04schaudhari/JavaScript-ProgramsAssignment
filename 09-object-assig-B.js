//Define bank objects with data members


let sbiBank = {
    bankName: "State Bank of India",
    location: "Mumbai",
    accountNo: "SBIN123456789",
    ifsc: "SBIN0001234",
    interestRate: 6.0,

    //Member function showDetails
showDetails: function() {
    console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}%`);
}
}



let axisBank = {
    bankName: "Axis Bank",
    location: "Pune",
    accountNo: "AXIS987654321",
    ifsc: "UTIB0001234",
    interestRate: 7.0,
    
    showDetails: function() {
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}%`);
    }
};


let hdfcBank = {
    bankName: "HDFC Bank",
    location: "Bengaluru",
    accountNo: "HDFC135792468",
    ifsc: "HDFC0001234",
    interestRate: 6.5,
    
    showDetails: function() {
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}%`);
    }
};

let yesBank = {
    bankName: "Yes Bank",
    location: "Kolkata",
    accountNo: "YES987654321",
    ifsc: "YESB0001234",
    interestRate: 6.75,
    
    showDetails: function() {
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}%`);
    }
};


sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();
