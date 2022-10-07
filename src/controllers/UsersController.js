const AppError = require("../utils/AppError");
const knex = require("../database/knex");
const {hash, compare} = require("bcryptjs");

class UserController{

    async create(request, response){

        const { name, email, password } = request.body;

        const checkUserExists = await knex('users').where({email});

        if(checkUserExists.length !== 0){
            throw new AppError("E-mail ja cadastrado");
        }

        const hashedPassword = await hash(password, 8);

        await knex('users').insert({
            name,
            email,
            password: hashedPassword
        })

        response.status(201).json();
    }


    async update(request, response){

        const { name, email, password, old_password } = request.body;
        const { id } = request.params;

        const user = await knex('users').where({id});

        if(user.length == 0){
            throw new AppError('Usuario nao encontrado!');
        }

        const userWithUpdatedEmail = await knex('users').where({email});

        if(userWithUpdatedEmail && userWithUpdatedEmail[0].id !== user[0].id){
            throw new AppError('E-mail ja cadastrado!');
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        if(password && !old_password){
            throw new AppError('Precisa informar a senha antiga');
        }

        if(password && old_password){
            const checkOldPassword = await compare(old_password, user[0].password);

            console.log(checkOldPassword);

            if(!checkOldPassword){
                throw new AppError('A senha antiga nao confere');
            }

            user.password = await hash(password, 8);
        }

        await knex('users').where({id}).update({
            name: user.name,
            email: user.email,
            password: user.password
            // updated_at: new Date()
        })

        return response.json();

    }
}

module.exports = UserController;