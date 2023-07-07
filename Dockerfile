FROM node:alpine

RUN apk update && \
    apk upgrade && \
    apk add --no-cache git npm &&\
    apk add --no-cache build-base python3

WORKDIR /app

RUN git clone -b dev https://github.com/KetabBazan/ketab_bazan_front_end.git

WORKDIR /app/ketab_bazan_front_end

RUN npm install --force

CMD ["npm", "start"]