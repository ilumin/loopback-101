FROM node

RUN mkdir -p /src \
  && cd /src

COPY .eslintignore .eslintrc .yo-rc.json package.json /src

RUN npm i

WORKDIR /src 
