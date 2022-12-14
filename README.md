<header>
  <p align="center">
    <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="90" alt="Nest Logo" /></a>
    
<h2 align="center">Yape Code Challenge: By JalzDeLezZ</h1>
  </p>
  <section align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Followers"></a>
  </section>
</header>

</p>

## Running the app

```bash
## Inplementation
1. npm install
2. rename .env.example to .env
3. docker-compose up -d

# execute proyect
$ nest start port-services
$ nest start transaction
$ nest start anti-fraud

# routes
http://localhost:3000/transaction

# body
{
  "accountExternalIdDebit": "",
  "accountExternalIdCredit": "aaaaaa42f-a42f-4a57-97bd-4a57llllllll",
  "tranferTypeId": 2,
  "value": 333
}

```

---

<p align="center">
<img width="90%" src="./src/one.png"/>
<img width="90%" src="./src/two.png"/>
<img width="90%" src="./src/three.png"/>
<img width="90%" src="./src/fourth.png"/>
</p>
<hr/><br/>

## Challenge Description

- [Problem](#problem)
- [Tech Stack](#tech_stack)
- [Send us your challenge](#send_us_your_challenge)

## Problem

Every time a financial transaction is created it must be validated by our anti-fraud microservice and then the same service sends a message back to update the transaction status.
For now, we have only three transaction statuses:

<ol>
  <li>pending</li>
  <li>approved</li>
  <li>rejected</li>  
</ol>

Every transaction with a value greater than 1000 should be rejected.

```mermaid
  flowchart LR
    Transaction -- Save Transaction with pending Status --> transactionDatabase[(Database)]
    Transaction --Send transaction Created event--> Anti-Fraud
    Anti-Fraud -- Send transaction Status Approved event--> Transaction
    Anti-Fraud -- Send transaction Status Rejected event--> Transaction
    Transaction -- Update transaction Status event--> transactionDatabase[(Database)]
```

## Tech Stack

<ol>
  <li>Node. You can use any framework you want (i.e. Nestjs with an ORM like TypeOrm or Prisma) </li>
  <li>Any database</li>
  <li>Kafka</li>    
</ol>

We do provide a `Dockerfile` to help you get started with a dev environment.

You must have two resources:

1. Resource to create a transaction that must containt:

```json
{
  "accountExternalIdDebit": "Guid",
  "accountExternalIdCredit": "Guid",
  "tranferTypeId": 1,
  "value": 120
}
```

2. Resource to retrieve a transaction

```json
{
  "transactionExternalId": "Guid",
  "transactionType": {
    "name": ""
  },
  "transactionStatus": {
    "name": ""
  },
  "value": 120,
  "createdAt": "Date"
}
```

## Optional

You can use any approach to store transaction data but you should consider that we may deal with high volume scenarios where we have a huge amount of writes and reads for the same data at the same time. How would you tackle this requirement?

You can use Graphql;

## Send us your challenge

When you finish your challenge, after forking a repository, you can open a pull request to our repository. There are no limitations to the implementation, you can follow the programming paradigm, modularization, and style that you feel is the most appropriate solution.

If you have any questions, please let us know.

## Code Helpers

<details><summary>Bash Commands</summary>

```bash
# Implementations
$ nest g app port-services
$ npm i --save @nestjs/microservices
$ npm install --save @nestjs/typeorm typeorm pg
$ npm i kafkajs
$ npm install dotenv --save
```

</details><br/>

## Support

- Author - [James Diaz Lopez](https://www.linkedin.com/in/james-jalz/)
- Contact - [j4mes.delez@gmail.com](mailto:j4mes.delez@gmail.com)

## License

Nest is [MIT licensed](LICENSE).
