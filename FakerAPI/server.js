const express = require('express')
const app = express()
const PORT = 8001

const { faker } = require('@faker-js/faker')

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const createUser = () => {
    return {
        _id: faker.datatype.uuid(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone_number: faker.phone.number()
    }
}

const createCompany = () => {
    return {
        _id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode(),
            country: faker.address.country
        }
    }
}

app.get('/user/new', (req, res) => {
    const user = createUser()
    res.json(user)
})

app.get('/company/new', (req, res) => {
    const company = createCompany()
    console.log(company)
    res.json(company)
})

app.get('/user/company', (req, res) => {
    const user = createUser()
    const company = createCompany()
    const retu = [user, company]
    res.json(retu)
})