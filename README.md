[![BCH compliance](https://bettercodehub.com/edge/badge/YahiaDev/docker-vuejs-springboot-app-example?branch=master)](https://bettercodehub.com/)

# docker-vuejs-springboot-app-example
simple application with vue js spring boot and docker (docker-compose).

- To run the app just run:
 - docker-compose build:
        - Generate backend image. docker-compose file will execute the backend docker file. I used a multi-stage docker image. Indeed spring boot app jar file will be built in first docker image and runned in second docker image.
        - generate front end image. docker-compose file will execute front end docker file and built font end image
 - docker-compose up:
        - postgres docker image will be donwloded from docker hub. postgres db container will be built.
        - back end container will be built.
        - front end container will be built.
