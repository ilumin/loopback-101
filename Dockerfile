FROM node

COPY .eslintignore .eslintrc .yo-rc.json package.json ./

RUN npm i

WORKDIR /src
