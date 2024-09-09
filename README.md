## What I did and Some Key Points :
I’m not sure which language I should use, but since the subject of the test is in English, I will proceed in English. First of all, I want to express my gratitude for this opportunity. It has been a challenging and valuable experience for me and for my development. Thank you all.
*************************************
I encountered some challenges with NestJS, as it was my first time using it—I had only worked with Node.js before. I had to invest time in learning and understanding NestJS before I could effectively use it. Although I initially considered using familiar technologies like Angular, CSS, and JavaScript, I decided to embrace the opportunity to work with new tools and stick to the project's requirements.

Additionally, what I developed is a dynamic and real-time Todo app. For example, if you open multiple browsers with the same Todo list and modify or delete a task in one browser, the changes will be reflected in the other browsers as well. I found this feature quite exciting, as it was a new experience for me and something I had never done before.

Let’s get to the point:

The 24-hour rule was quite challenging, as I didn’t have enough time to include all the features I wanted. I encountered some difficulties with implementing the database and faced issues with the Dockerfile, which I suspect might be due to a typo.

I used GraphQL for this project, which is a query language for APIs and a runtime for executing queries using a type system. It provides a more flexible and efficient alternative to REST for querying and manipulating data.

I had planned to integrate PostgreSQL as the database. Here’s what I intended to do:

Let’s say you’re using a SQL database like PostgreSQL. Define your schema in SQL or using an ORM (Object-Relational Mapper) like TypeORM or Sequelize.

******

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT false
);
********
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: false })
  completed: boolean;
}

*****
i had some challenges to with Nest.js because its my first time using it ( i've used just node.js) so i had to learn about it and understand it before using it. because i wanted to do it with the thing i know but i refused its the opportunity to use other technologies.

also what i created is a dynamic and real time todoApp if you for example open multiple browsers with the same todolist and you modified or delete a task its gonna be deleted also in the other browser ( i found it cool :) i have never done it before ) 
*************


## Project Overview
***********NestJS

NestJS is a progressive Node.js framework for building efficient and scalable server-side applications. It leverages TypeScript and is built around the concepts of modules, controllers, and providers.

*********GraphQL is used to define and query the API. It allows clients to request only the data they need and makes it easier to handle complex queries and mutations.
**********Apollo Server is used as the GraphQL server within NestJS.
********(not implemented) A PostgreSQL database is used to persist the Todo items. It stores data such as the title and completion status of each Todo item.

++++AppModule: The root module that imports necessary modules and sets up GraphQL and TypeORM.
++++Todo Entity: Defines the Todo structure in the database, with fields like id, title, and completed.
++++Todo Resolver: Handles GraphQL queries and mutations, interacting with the database through the service layer.
+++++Todo Service: Contains business logic for creating, reading, updating, and deleting Todo items.





******************
***********
********
******
***
**
*

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
helloo


## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
