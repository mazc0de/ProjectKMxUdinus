# RESTful API Rock Paper Scissors Game

This is a RESTful API backend application which is made to process the data sent to the database

## Features

- Have 2 roles (SuperAdmin & PlayerUser)
- User Register & Login
- Create Room
- Player 1 choose rock or paper or scissors
- Player 2 can join with room name and can battle with some player
- Edit & Delete User only has role SuperAdmin

## Ingredients

I using this tech to build this app

- Node JS
- Postgres SQL
- Express JS
- Javascript

## Library

And of course i'm used some third-party libraries to help me make this application

- express
- jsonwebtoken
- sequelize
- bcryptjs
- chalk
- dotenv
- morgan
- pg
- sequelize
- uuid

## Installation

In this project i'm recommend installing node js and npm with the latest versions

Install the dependencies and devDependencies and start the server.
dont forget to edit config/config.json

```sh
$ git clone xxx
$ cd xxx
$ npm install -g nodemon sequelize-cli
$ npm install
$ sequelize db:create
$ sequelize db:migrate
$ sequelize db:seed:all
$ npm run dev
```

### API Documentation with postman or swagger will be available soon

# API FLOW

sebelum i buat dokumentasi postman atau swagger, i mau jelasin flow dari program ini

## Seeder

```
$ sequelize db:seed:all
```

## Register [ POST localhost:1337/api/register ]

req.body

```
{
     "username": "daffa404",
     "password": "123",
     "name": "Daffa Hanif",
     "email": "daffa@gmail.com",
     "phone": "087711112222",
     "address": "Pemalang"
}
```

response

```
{
    "status": "OK",
    "data": {
        "message": "User successfully registered!",
        "user": {
            "id": "8d073f92-50c8-4434-924e-d437df7da780",
            "username": "daffa404"
        },
        "biodata": {
            "name": "Daffa Hanif",
            "email": "daffa@gmail.com",
            "phone": "087711112222",
            "address": "Pemalang"
        }
    }
}
```

## LOGIN [ POST localhost:1337/api/login ]

req.body

```
{
     "username":"daffa404",
     "password": "123"
}
```

response

```
{
    "status": "OK",
    "data": {
        "message": "Login successfully!",
        "username": "daffa404",
        "role": "PlayerUser",
        "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhkMDczZjkyLTUwYzgtNDQzNC05MjRlLWQ0MzdkZjdkYTc4MCIsInVzZXJuYW1lIjoiZGFmZmE0MDQiLCJyb2xlIjoiUGxheWVyVXNlciIsImlhdCI6MTYzNzUwMDg2OCwiZXhwIjoxNjM3NTA0NDY4fQ.hF6g_2sYhTVxQjrln8AroLtCv0TelbZQUlPv6WBVyAE"
    }
}
```

## LOGIN SUPER ADMIN [ POST localhost:1337/api/login ]

req.body

```
{
     "username":"superadmin",
     "password": "superadmin"
}
```

response

```
{
    "status": "OK",
    "data": {
        "message": "Login successfully!",
        "username": "superadmin",
        "role": "SuperAdmin",
        "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU1N2RkY2ExLTgxYzYtNGMxNi05N2FjLTFjYmNjNzcwMGY4MyIsInVzZXJuYW1lIjoic3VwZXJhZG1pbiIsInJvbGUiOiJTdXBlckFkbWluIiwiaWF0IjoxNjM3NTAxMDQwLCJleHAiOjE2Mzc1MDQ2NDB9.hw5UGmACmbBM3sZ-0rby0oxsxPoHPblboOmsuIhYEnI"
    }
}
```

## ENDPOINT ONLY SUPERADMIN

```
GET localhost:1337/api/users
GET localhost:1337/api/games
```

## PLAYER 1 CREATE ROOM [ POST localhost:1337/api/create-room ]

dont forget login first and put token with bearer in header authorization

req.body

```
{
    "name":"room1",
    "option":"batu"
}
```

response

```
{
    "status": "OK",
    "data": {
        "message": "Room created!",
        "game": {
            "id": 1,
            "name": "room1",
            "owner": "daffa404"
        },
        "optionGame": {
            "option": "batu"
        }
    }
}
```

## PLAYER 2 JOIN ROOM AND AGAINTS PLAYER 1

## [ POST localhost:1337/api/fight/room1 ]

dont forget login first and put token with bearer in header authorization

req.body

```
{
    "option":"kertas"
}
```

response

```
{
    "status": "OK",
    "data": {
        "message": "Figthing!",
        "userGame": {
            "option": "batu"
        },
        "winner": "Congratulation the winner is Player2!"
    }
}
```

### All Endpoint

```
POST : /api/register
POST : /api/login

Only SuperAdmin can access it
GET : /api/users
PUT : /api/users/:id
DELETE : /api/users/:id
GET : /api/games

SuperAdmin and PlayerUser can access it
GET : /api/profile
POST : /api/create-room
POST : /api/fight/:name
GET : /api/history
```

note: dokumentasi swagger soon ya mas, lg males buat hehehehehhehehe

## License

**Free Software, Hell Yeah!**
