const server = require('./server')
const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../src/routes/auth');
const Users = mongoose.model('Users');
const whatwgFetch = jest.genMockFromModule('whatwg-fetch');

describe("User registration", function () {
    test("User passed in with all correct fields", async () => {
        whatwgFetch.fetch = await fetch('http://localhost:8000/api/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    firstName: "John",
                    lastName: "Smith",
                    email: "Email",
                    password: "123",
                    jobRole: "Analyst",
                    clearenceLevel: "high"
                }
            })
        })
    })

    test("User passed in withour firstName fields", async () => {
        whatwgFetch.fetch = await fetch('http://localhost:8000/api/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    lastName: "Smith",
                    email: "Email",
                    password: "123",
                    jobRole: "Analyst",
                    clearenceLevel: "high"
                }
            }),
        })
        console.log(whatwgFetch.fetch)
        expect(whatwgFetch.status).toBe(console.log(422));
    })

    test("User passed in withour lastName field", async () => {
        whatwgFetch.fetch = await fetch('http://localhost:8000/api/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    firstName: "Smith",
                    email: "Email",
                    password: "123",
                    jobRole: "Analyst",
                    clearenceLevel: "high"
                }
            }),
        })
        console.log(whatwgFetch.fetch)
        expect(whatwgFetch.status).toBe(console.log(422));
    })

    test("User passed in withour email field", async () => {
        whatwgFetch.fetch = await fetch('http://localhost:8000/api/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    firstName: "Jacob",
                    lastName: "Smith",
                    password: "123",
                    jobRole: "Analyst",
                    clearenceLevel: "high"
                }
            }),
        })
        console.log(whatwgFetch.fetch)
        expect(whatwgFetch.status).toBe(console.log(422));
    })

    test("User passed in withour password field", async () => {
        whatwgFetch.fetch = await fetch('http://localhost:8000/api/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    firstName: "Jacob",
                    lastName: "Smith",
                    email: "jsmith@gmail.com",
                    jobRole: "Analyst",
                    clearenceLevel: "high"
                }
            }),
        })
        console.log(whatwgFetch.fetch)
        expect(whatwgFetch.status).toBe(console.log(422));
    })

    test("User passed in withour jobRole field", async () => {
        whatwgFetch.fetch = await fetch('http://localhost:8000/api/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    firstName: "Jacob",
                    lastName: "Smith",
                    email: "jsmith@gmail.com",
                    password: "1237",
                    clearenceLevel: "high"
                }
            }),
        })
        console.log(whatwgFetch.fetch)
        expect(whatwgFetch.status).toBe(console.log(422));
    })

    test("User passed in withour clearanceLevel field", async () => {
        whatwgFetch.fetch = await fetch('http://localhost:8000/api/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    firstName: "Jacob",
                    lastName: "Smith",
                    email: "jsmith@gmail.com",
                    password: "1237",
                    jobRole: "Analyst"
                }
            }),
        })
        console.log(whatwgFetch.fetch)
        expect(whatwgFetch.status).toBe(console.log(422));
    })
})
describe("User registration", function () {
    test("User passed in with all correct fields", async () => {
        whatwgFetch.fetch = await fetch('http://localhost:8000/api/users/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    email: "Email",
                    password: "123",
                }
            }),
        })
        console.log(whatwgFetch.fetch)
        expect(whatwgFetch.status).toBe(console.log(200));
    })
})
