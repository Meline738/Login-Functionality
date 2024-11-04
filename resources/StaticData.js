const randomNum = Math.floor(Math.random() * 10000);
const email = `testuser${randomNum}@example.com`;

const userData = {
    name: "Test User",
    email: email
}

const accountData = {
    name: "Test user",
    email: email,
    password: "password123",
    birthDay: "1",
    birthMonth: "1",
    birthYear: "1990",
    firstName: "Test",
    lastName: "User",
    company: "Test Company",
    address1: "123 Test St",
    address2: '',
    country: "United States",
    state: "California",
    city: "Los Angeles",
    zipcode: "90001",
    mobileNumber: "1234567890"
};

const IncompleteAccountData = {
    name: "Test user",
    email: email,
    password: "",
    birthDay: "1",
    birthMonth: "1",
    birthYear: "1990",
    firstName: "Test",
    lastName: "User",
    company: "Test Company",
    address1: "123 Test St",
    address2: '',
    country: "United States",
    state: "California",
    city: "Los Angeles",
    zipcode: "90001",
    mobileNumber: "1234567890"
};

module.exports = { userData, accountData, IncompleteAccountData }

