
# Snack POS 🛒 

A commerce POS solution that caters to small retail shops with the following benefits:

    1) Checkout with QR Codes and Stripe Payments

    2) Simple Inventory management

    3) Business Performance Insights


![App Screenshot](https://i.ibb.co/bHPQQpf/smartmockups-lj333o0q.jpg)
## Live Deployment

[Click here](https://snackpos.app) to checkout the live application.


## Demo

[Click here](https://www.loom.com/share/854b5f6ed46e4496980753c5521eb667) to view the demo of the application.


## Back-End Installation



1. Clone this repo

2. Create a new database in MySQL ```commercev2```

3. Install dependencies

```bash
$ npm install
```
4. Run Knex migrations

```bash
$ npm run db:migrate
```
5. Run Knex seeds

```bash
$ npm run db:seed
```
6. Create ```.env``` file and set up Environment Variables (Please see the section below)

7. Start the server:

```bash
$ node server.js
```

The back-end runs on http://localhost:8000/
    

Note: You will need to complete the instructions for the front-end of the project to fully run the application. [Click here](https://github.com/ngkao/commerce-front-v2) for the front-end of the project.
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`CLIENT_URL`

`STRIPE_PRIVATE_KEY`

`STRIPE_SECRET`

Note: For Stripe Env Var you will need to create a Stripe account [here](https://dashboard.stripe.com/login).

`DB_HOST`

`DB_USER`

`DB_PASSWORD`

`DB_DATABASE=commercev2`



## Tech Stack

**Client:** React

**Server:** Node, Express

**API:** Stripe API

**Database:** AWS RDS (MySQL)

**Server:** AWS EC2
