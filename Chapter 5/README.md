# CHALLENGE CHAPTER 5 - DAFFA HANIFISYAFIQ

---

Project ini dibuat untuk memenuhi penilaian dari **Binar Academy x Kampus Merdeka Studi Independen**

---

### Task

1. Menggabungkan Chapter 3 & Chapter 4

```
Chapter 3 : http://localhost:1337/
```

```
Chapter 4 : http://localhost:1337/game
```

2. Api login POST

```
POST : http://localhost:1337/api/login
```

3. Api login GET

```
GET : http://localhost:1337/api/me
```

4. Error page

```
404 : http://localhost:1337/sesuatu-yang-tidak-ada-di-server
```

```
500 : http://localhost:1337/server-error
```

### How to run

```
$ npm i
$ npm run dev
```

---

### Api url

```
GET http://localhost:1337/api/me
```

```
POST http://localhost:1337/api/login
```

---

### Api's documentation

#### GET

1. Saat mengakses (**http://localhost:1337/api/me**) dengan method GET, tanpa headers Authorization, akan mendapatkan respon :

```
{
    "status": 401,
    "data": {
        "message": "Unauthorized, you no have access!"
    }
}
```

2. Saat mengakses (**http://localhost:1337/api/me**) dengan method GET, dengan headers Authorization yang salah, akan mendapatkan respon :

```
{
    "status": 401,
    "data": {
        "message": "Unauthorized, please input key correctly!"
    }
}
```

3. Saat mengakses (**http://localhost:1337/api/me**) dengan method GET, dengan headers Authorization default ('rahasia'), akan mendapatkan respon :

```
{
    "status": 401,
    "data": {
        "message": "Unauthorized, you must login first!"
    }
}
```

karena user belum login dan belum mempunyai akses token.

4. Saat mengakses (**http://localhost:1337/api/me**) dengan method GET, dengan headers Authorization yang benar, akan mendapatkan respon data user :

```
{
    "status": 200,
    "data": {
        "userLogin": [
            {
                "id": 1,
                "username": "daffa",
                "password": "daffa123",
                "firsName": "Daffa",
                "lastName": "Hanifisyafiq",
                "email": "daffa@gmail.com",
                "ages": 21,
                "address": {
                    "houseNumber": 69,
                    "street": "Sudirman St.",
                    "subDistrict": "Petarukan",
                    "regency": "Pemalang",
                    "province": "Central Java",
                    "postalCode": 52362,
                    "country": "Indonesia"
                }
            }
        ]
    }
}
```

#### POST

Dummy user data :

```
username : daffa
password : daffa123
```

1. Saat mengakses (**http://localhost:1337/api/login**) dengan method POST, dengan username dan password yang salah, akan mendapatkan respon :

```
{
    "status": 401,
    "data": {
        "message": "Unauthorized, username or password is wrong"
    }
}
```

2. Saat mengakses (**http://localhost:1337/api/login**) dengan method POST, dengan username dan password yang benar, akan mendapatkan respon :

```
{
    "status": 201,
    "data": {
        "message": "login success",
        "username": "daffa",
        "accessToken": "daffa-rahasia"
    }
}
```

3. Saat mengakses (**http://localhost:1337/api/login**) dengan method POST, tetapi sebelumnya sudah login, akan mendapatkan respon :

```
{
    "status": 200,
    "data": {
        "message": "you have login"
    }
}
```

---

untuk logout bisa melalui URL :

```
http://localhost:1337/api/logout
```

dan akan mendapatkan respon :

```
{
    "status": 201,
    "data": {
        "message": "successfully logout!"
    }
}
```

tetapi apabila belum login, maka akan mendapatkan respon :

```
{
    "status": "FAIL",
    "data": {
        "message": "you are not logged in!"
    }
}
```
