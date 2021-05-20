# Coding challenge

Hi Raffaele!

Thanks for taking your time to work on this coding challenge.

Ideally this test should take a day or two. But feel free to take as much time as you need. Quality is more important than speed. Latest delivery though is in one week starting now.

This coding challenge will show us some of your skills. And you get to know our work flow as well. The solution of the challenge is not too hard. So you can focus on technology and code. Show us what you got! 😉

## Todo

1. Clone this repo.
2. Create a new development branch.
3. Use as many commits as you can so we can see your progress.
4. After finishing your work, create a Pull Request to the master branch.
5. Be ready to answer question.

## Requirements

- The task must be developed in NodeJS.
- Write tests where applicable/necessary.
- All code as well as documentation or comments must be in english.
- Provide instructions on how to run the project.

## Business description

A Subtitles Translator is a service that translates subtitles, it takes one or several subtitle files as input and produces the subtitles in the same format containing the translations of each one of the contained sentences. The translation is performed by using historical data stored in a [Translation Management System (TMS)](https://en.wikipedia.org/wiki/Translation_management_system). One translation is performed by going through the following steps:

1. Parses the subtitles file and extract the translatable source.
2. Translates the source using historical data.
3. Pairs the result with the source.
4. Reconstructs the subtitles file.

Below you can find an example of how a subtitles file looks like:

```
1 [00:00:12.00 - 00:01:20.00] I am Arwen - I've come to help you.
2 [00:03:55.00 - 00:04:20.00] Come back to the light.
3 [00:04:59.00 - 00:05:30.00] Nooo, my precious!!.
```

Is basically conformed by the id of the line, the time range, and then the content to be translated.

The output for this input would be a file containing something as:

```
1 [00:00:12.00 - 00:01:20.00] Ich bin Arwen - Ich bin gekommen, um dir zu helfen.
2 [00:03:55.00 - 00:04:20.00] Komm zurück zum Licht.
3 [00:04:59.00 - 00:05:30.00] Nein, my Schatz!!.
```

The second part of the system is the aforementioned TMS, as its name states, is a system that stores past translations to be reused, the structure of this system is really simple, it contains two endpoints, one for translating and the other for introducing data. 

In order to translate a query, it uses the following flow:

1. Search for strings that are **approximately** equal in the database — They might not be the same but close enough to be consider a translation.
2. It calculates the distance between the query and the closest string found. — A standard way of calculating strings distance is by using [Levenshtein distance algorithm](https://en.wikipedia.org/wiki/Levenshtein_distance).
3. If the distance is less than 5, is considered a translation, otherwise the same query is returned as result.

In order to import data, it uses the following structure:

```json
[
  {
    "source": "Hello World",
    "target": "Hallo Welt",
		"sourceLanguage": "en",
		"targetLanguage": "de"
  },
  {
    "source": "Hello guys",
    "target": "Hallo Leute",
		"sourceLanguage": "en",
		"targetLanguage": "de"
  },
  {
    "source": "I walk to the supermarket",
    "target": "Ich gehe zum Supermarkt.",
		"sourceLanguage": "en",
		"targetLanguage": "de"
  }
]
```

## Task

Your task is:

1. Create a REST API for uploading subtitles in a plain text format (.txt) and send an email with the translation as attachment once the process done.
2. Create the TMS either inside or outside the document translator (however you feel is the best way) with the two endpoints stated before.

Feel free to define yourself the API contracts and the project structure.

## Bonus point

- Creativity.
- Clean code.
- Usage of best practices.
- Usage of Typescript.
- Usage of Docker.

We wish you the best of lucks 🙏!

# Solution

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
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
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Translation REST API with historical data

## Prerequisities
[Docker](https://docs.docker.com/get-docker/)\
[Node.js](http://nodejs.org)\
[Nest.js](https://docs.nestjs.com)

## Installation

```bash
$ npm install

# Create .env file
echo 'PORT=3000
MODE=DEV
# mail
MAIL_HOST=smpt.example.com
MAIL_PORT=465
MAIL_USER=example@example.com
MAIL_PASSWORD=yourpassword
MAIL_FROM=example@example.com
# optional
MAIL_TRANSPORT=smtp://${MAIL_USER}:${MAIL_PASSWORD}@${MAIL_HOST}' >> .env
```

## Running the app

```bash
# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Docker

build the application on production and run it with Docker

```bash
# in the application folder
$ docker build translation-backend .

# after build is completed
$ docker run -it -p 3000:3000 translation-backend:latest
```

## Swagger docs

... after the application is running (not in production)
N.B. here there's the local address

[Swagger.docs](http://localhost:3000/docs)

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Raffaele Sollecito](https://github.com/Raffasolaries)
- LinkedIn - [Raffaele Sollecito](https://www.linkedin.com/in/raffasolaries/)
- Twitter - [Raffaele Sollecito](https://twitter.com/Raffasolaries)

## License

Nest is [MIT licensed](LICENSE).
