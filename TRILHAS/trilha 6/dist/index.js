"use strict";
// ex 1
console.log("EX 1 --------------------------------------------------------------------------------------------");
class Cart {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    calculateTotalPrice() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
    getItems() {
        return this.items;
    }
}
class Payment {
    constructor() {
        this.status = false;
    }
    processPayment() {
        this.status = true;
        console.log("Payment processed!");
    }
    getPaymentStatus() {
        return this.status;
    }
}
class Shipping {
    constructor() {
        this.status = "Not Shipped";
    }
    updateStatus(status) {
        this.status = status;
        console.log(`Shipping status updated to: ${status}`);
    }
    getShippingStatus() {
        return this.status;
    }
}
class Order {
    constructor() {
        this.cart = new Cart();
        this.payment = new Payment();
        this.shipping = new Shipping();
    }
    addItem(item) {
        this.cart.addItem(item);
    }
    processPayment() {
        this.payment.processPayment();
    }
    updateShippingStatus(status) {
        this.shipping.updateStatus(status);
    }
    getOrderSummary() {
        return {
            items: this.cart.getItems(),
            totalPrice: this.cart.calculateTotalPrice(),
            paymentStatus: this.payment.getPaymentStatus(),
            shippingStatus: this.shipping.getShippingStatus(),
        };
    }
}
//ex2
console.log("EX 2 --------------------------------------------------------------------------------------------");
class EmailNotification {
    send(email) {
        console.log(`Notification sent to ${email}`);
    }
}
class UserManager {
    constructor(notifier) {
        this.users = [];
        this.notifier = notifier;
    }
    createUser(name, email) {
        this.users.push({ name, email });
        this.notifier.send(email);
    }
    getUsers() {
        return this.users;
    }
}
const notifier = new EmailNotification();
const userManager = new UserManager(notifier);
userManager.createUser("Alice", "alice@example.com");
//ex 3
console.log("EX 3 --------------------------------------------------------------------------------------------");
class ContactValidator {
    validate(contact) {
        return contact.name.length > 0 && /\S+@\S+\.\S+/.test(contact.email);
    }
}
class EmailSender {
    constructor(validator) {
        this.validator = validator;
    }
    sendEmail(contact) {
        if (this.validator.validate(contact)) {
            console.log(`Email sent to ${contact.email}`);
        }
        else {
            console.log("Invalid contact!");
        }
    }
}
const validator = new ContactValidator();
const emailSender = new EmailSender(validator);
emailSender.sendEmail({ name: "Bob", email: "bob@example.com" });
