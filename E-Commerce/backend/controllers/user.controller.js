import jwt  from 'jsonwebtoken';
import mysql from 'mysql'
import bcrypt from 'bcrypt';
import dbConnect from '../db/dbConnect.js';


const userLogin = (req, res) => {
    const sql = "Select * from user where email=?";
    dbConnect.query(sql, [req.body.email], (err, result) => {
        if (err) return res.status(500).json({ Error: "Login Error in server" });
        if (result.length > 0) {
            bcrypt.compare(req.body.password.toString(), result[0].password, (err, response) => {
                if (err) return res.json({ Error: 'Password hash error' })
                if (response) {
                    const id = response[0].id;
                    const name = response[0].name;
                    const email = response[0].email;

                    const token = jwt.sign({ id, name, email }, "jwt-secret-key", { expiresIn: '1d' })
                    if (token == null) {
                        return res.status(403).send({ Message: 'Cookie not created' });
                    }
                    res.cookie('token', token);
                    return res.json({ Message: "User Logged In", User: result[0], Token: token })
                } else {
                    return res.status(400).json({ Message: 'Wrong Password' })
                }
            })
        } else {
            return res.status(403).json({ Error: "Email not found!" });
        }
        return res.status(201).json(`User logged in with id ${result.insertId}`);

    })
}

const userRegister = (req, res) => {
    const salt =10;
    const sqlExisting = "SELECT * FROM user WHERE email = ?";
    dbConnect.query(sqlExisting, [req.body.email], (err, existingUsers) => {
        if (err) {
            return res.status(500).json({ Error: "Error checking existing user" });
        }
        if (existingUsers.length > 0) {
            return res.status(400).json({ Error: "Username or email already exists" });
        }
        // if (existingUsers.length != 0) {
        //     return res.status(409).json("This Email is already registered");
        // }
    })
    const sql = "INSERT INTO user (username, email, password) VALUES ?";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if (err) return res.json({ Error: "Error for hashing password" });
        const values = [[req.body.name, req.body.email, hash]];

        dbConnect.query(sql, [values], (err, result) => {
            if(err){
                return res.status(500).json({ Error: "Inserting Data Error in server" });
            }
            return res.status(201).json(`User created with id ${result.insertId}`);
        });
    })
}

const userDetails = (req, res) => {
    const user = { id: req.id, name: req.name, email: req.email };
    return res.status(201).json({ Message: `Welcome ${req.name}`, Data: user })
}

export {
    userLogin,
    userRegister,
    userDetails,
}