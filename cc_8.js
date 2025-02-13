// Task 1: Function Declaration

function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return `Net Salary: $${netSalary.toFixed(2)}`;
}

// Test cases
console.log(calculateSalary(5000, 500, 0.1)); // Expected output: "Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); // Expected output: "Net Salary: $6950.00"

// Task 2: Function Expression

const calculateDiscount = function(price, discountRate) {
    let finalPrice = price - (price * discountRate);
    return `Final Price: $${finalPrice.toFixed(2)}`;
};

// Test cases
console.log(calculateDiscount(100, 0.2));  // Expected output: "Final Price: $80.00"
console.log(calculateDiscount(250, 0.15)); // Expected output: "Final Price: $212.50"

// Task 3: Arrow Function

const calculateServiceFee = (amount, serviceType) => {
    let feeRate = serviceType === "Premium" ? 0.15 :
                  serviceType === "Standard" ? 0.10 :
                  serviceType === "Basic" ? 0.05 : 0;
    
    let serviceFee = amount * feeRate;
    return `Service Fee: $${serviceFee.toFixed(2)}`;
};

// Test cases
console.log(calculateServiceFee(200, "Premium"));  // Expected output: "Service Fee: $30.00"
console.log(calculateServiceFee(500, "Standard")); // Expected output: "Service Fee: $50.00"

// Task 4: Parameters and Arguments

function calculateRentalCost(days, carType, insurance = false) {
    let dailyRate = carType === "Economy" ? 40 :
                    carType === "Standard" ? 60 :
                    carType === "Luxury" ? 100 : 0;

    let insuranceCost = insurance ? 20 * days : 0;
    
    let totalCost = (dailyRate * days) + insuranceCost;
    
    return `Total Rental Cost: $${totalCost}`;
}

// Test cases
console.log(calculateRentalCost(3, "Economy", true));  // Expected output: "Total Rental Cost: $180"
console.log(calculateRentalCost(5, "Luxury", false));  // Expected output: "Total Rental Cost: $500"

// Task 5: Returning Values

function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal * rate * time);
    return `Total Payment: $${totalPayment.toFixed(2)}`;
}

// Test cases
console.log(calculateLoanPayment(1000, 0.05, 2));  // Expected output: "Total Payment: $1100.00"
console.log(calculateLoanPayment(5000, 0.07, 3));  // Expected output: "Total Payment: $6050.00"

// Task 6: Higher-Order Functions

let transactions = [200, 1500, 3200, 800, 2500];

const filterLargeTransactions = (transactions, filterFunction) => {
    return transactions.filter(filterFunction);
};

// Test case
console.log(filterLargeTransactions(transactions, amount => amount > 1000));
// Expected output: [1500, 3200, 2500]

// Task 7: Closures

function createCartTracker() {
    let total = 0;
    
    return function(amount) {
        total += amount;
        return `Total Cart Value: $${total}`;
    };
}

// Test cases
let cart = createCartTracker();
console.log(cart(20)); // Expected output: "Total Cart Value: $20"
console.log(cart(35)); // Expected output: "Total Cart Value: $55"

// Task 8: Recursion in JavaScript

function calculateSavings(years, amount) {
    if (years === 0 || years > 10) {
        return `Projected Savings: $${amount.toFixed(2)}`;
    }
    return calculateSavings(years - 1, amount * 1.05);
}

// Test cases
console.log(calculateSavings(8, 1000));  // Expected output: "Projected Savings: $1102.50"
console.log(calculateSavings(5, 5000));  // Expected output: "Projected Savings: $6381.41"