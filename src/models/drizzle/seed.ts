import db from "./db";
import { userTable } from "./schema";
async function seed() {
    console.log("==================Seeding Start==================");
    const [user1] = await db.insert(userTable).values({
        fullName: "Alice",
        email: "alice@gmail.com",
        password: "password123" // Assuming password is required

    }).returning();

    const [user2] = await db.insert(userTable).values({
        fullName: "Bob",
        email: "bob@gmail.com",
        password: "password123" // Assuming password is required
    }).returning();
    const [user3] = await db.insert(userTable).values({
        fullName: "Charlie",
        email: "harlie@gmail.com",
        password: "password123" // Assuming password is required
    }).returning();
    console.log("Seeded Users:", user1, user2, user3);
    console.log("==================Seeding Done==================");
    process.exit(0);
}

seed().catch((e) => {
    console.error("Seeding failed:", e);
    process.exit(1);
}
);