const {hash, compare} = require("bcryptjs");
const sqliteConnection = require("../database/sqlite");
const AppError = require("../utils/AppError");

class UsersController {

    async create(request, response){
        const {name, email, password} = request.body;

        const database = await sqliteConnection();
        const checkUsersExists = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if(checkUsersExists){
            throw new AppError('E-mail ja cadastrado');
        }

        const hashedPassword = await hash(password, 8);

        await database.run(
            "INSERT INTO users (name, email, password) VALUES (?,?,?)", [name, email, hashedPassword]
        );

        response.status(201).json({name, email, password});
    }


    async update(request, response){
        const {name , email, password, old_password} = request.body;
        const {id} = request.params;

        const database = await sqliteConnection();
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

        if(!user){
            throw new AppError('Usuario nao encontrado!');
        }

        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id){
            throw new AppError('E-mail ja esta em uso!');
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        if(password && !old_password) {
            throw new AppError('Precisa informar a senha antiga');
        }

        if(password && old_password){
            const checkOldPassword = await compare(old_password, user.password);

            if(!checkOldPassword){
                throw new AppError('A senha antiga nao confere');
            }

            user.password = await hash(password, 8);
        }
        

        await database.run(`
            UPDATE users SET
            name = ?,
            email = ?,
            password = ?,
            updated_at = DATETIME('now')
            WHERE id = ?`,
            [user.name, user.email, user.password, id]
        );

        return response.json();
    }
}


module.exports = UsersController;