FROM node:alpine
LABEL authors="BitxBit"
LABEL org.opencontainers.image.source=https://github.com/JeanAEckelberg/BitBattleUI
LABEL org.opencontainers.image.description="This is the UI for the entire BitBattle System."
LABEL org.opencontainers.image.licenses=MIT

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
