import { login } from "./login"


describe("login service", () => {
    it("should return true for valid email and password", async () => {
        const result = await login("roberto.melo@dio.bank", "123456");
        expect(result).toBe(true);
    });

    it("should return false for invalid email", async () => {
        const result = await login("invalid@example.com", "password123");
        expect(result).toBe(false);
    });

    it("should return false for invalid password", async () => {
        const result = await login("test@example.com", "wrongpassword");
        expect(result).toBe(false);
    });

    it("should return false for both invalid email and password", async () => {
        const result = await login("invalid@example.com", "wrongpassword");
        expect(result).toBe(false);
    });
})