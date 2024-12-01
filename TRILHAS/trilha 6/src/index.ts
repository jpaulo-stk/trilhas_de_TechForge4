// ex 1

console.log(
  "EX 1 --------------------------------------------------------------------------------------------"
);
class Cart {
  private items: { name: string; price: number }[] = [];

  addItem(item: { name: string; price: number }): void {
    this.items.push(item);
  }

  calculateTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  getItems(): { name: string; price: number }[] {
    return this.items;
  }
}

class Payment {
  private status: boolean = false;

  processPayment(): void {
    this.status = true;
    console.log("Payment processed!");
  }

  getPaymentStatus(): boolean {
    return this.status;
  }
}

class Shipping {
  private status: string = "Not Shipped";

  updateStatus(status: string): void {
    this.status = status;
    console.log(`Shipping status updated to: ${status}`);
  }

  getShippingStatus(): string {
    return this.status;
  }
}

class Order {
  private cart: Cart;
  private payment: Payment;
  private shipping: Shipping;

  constructor() {
    this.cart = new Cart();
    this.payment = new Payment();
    this.shipping = new Shipping();
  }

  addItem(item: { name: string; price: number }): void {
    this.cart.addItem(item);
  }

  processPayment(): void {
    this.payment.processPayment();
  }

  updateShippingStatus(status: string): void {
    this.shipping.updateStatus(status);
  }

  getOrderSummary(): object {
    return {
      items: this.cart.getItems(),
      totalPrice: this.cart.calculateTotalPrice(),
      paymentStatus: this.payment.getPaymentStatus(),
      shippingStatus: this.shipping.getShippingStatus(),
    };
  }
}

//ex2

console.log(
  "EX 2 --------------------------------------------------------------------------------------------"
);

class EmailNotification {
  send(email: string): void {
    console.log(`Notification sent to ${email}`);
  }
}

class UserManager {
  private users: { name: string; email: string }[] = [];
  private notifier: EmailNotification;

  constructor(notifier: EmailNotification) {
    this.notifier = notifier;
  }

  createUser(name: string, email: string): void {
    this.users.push({ name, email });
    this.notifier.send(email);
  }

  getUsers(): { name: string; email: string }[] {
    return this.users;
  }
}

const notifier = new EmailNotification();
const userManager = new UserManager(notifier);
userManager.createUser("Alice", "alice@example.com");

//ex 3

console.log(
  "EX 3 --------------------------------------------------------------------------------------------"
);

class ContactValidator {
  validate(contact: { name: string; email: string }): boolean {
    return contact.name.length > 0 && /\S+@\S+\.\S+/.test(contact.email);
  }
}

class EmailSender {
  private validator: ContactValidator;

  constructor(validator: ContactValidator) {
    this.validator = validator;
  }

  sendEmail(contact: { name: string; email: string }): void {
    if (this.validator.validate(contact)) {
      console.log(`Email sent to ${contact.email}`);
    } else {
      console.log("Invalid contact!");
    }
  }
}

const validator = new ContactValidator();
const emailSender = new EmailSender(validator);
emailSender.sendEmail({ name: "Bob", email: "bob@example.com" });
