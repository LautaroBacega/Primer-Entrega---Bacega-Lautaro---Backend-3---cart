import { faker } from "@faker-js/faker";
import { CartModel } from "../daos/mongodb/models/cart.model.js"; // Asegúrate de que esto esté presente

faker.locale = "es";

export const generateMockUsers = (quantity) => {
    const users = [];
    for (let i = 0; i < quantity; i++) {
        const user = {
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            age: faker.number.int({ min: 18, max: 60 }),
            role: faker.helpers.arrayElement(["user", "admin"]),
            cart: []
        };
        users.push(user);
    }
    return users;
};

export const generateMockCart = (quantity) => {
    const carts = [];
    for (let i = 0; i < quantity; i++) {
        const cart = {
            products: [
                {
                    quantity: faker.number.int({ min: 1, max: 10 }), // Cantidad aleatoria
                    product: faker.database.mongodbObjectId() // Genera un ID de MongoDB
                }
            ]
        };
        carts.push(cart);
    }
    return carts;
};
