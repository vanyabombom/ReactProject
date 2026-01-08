import type { UserType } from "../model/UserType";

export default class UserDao {

    static authenticate(login: string, password: string): Promise<UserType | null> {
        return new Promise((resolve, _) => {
            setTimeout(
                () => {
                    if (login == "user" && password == "123") {
                        resolve({
                            name: "user123",
                            email: "user@gmail.com",
                            address: "Одеса, Садова 3",
                            login: "user",
                            dob: "08 грудня 2025",
                            imageUrl: "/img/user.jpg"
                        })
                    }
                    else resolve(null);
                },
                700,
            )
        });
    }
}