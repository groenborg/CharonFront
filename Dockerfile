FROM node:7
MAINTAINER groenborg

RUN apt-get update

ENV FE_SERVER_PORT 4200
ENV INSTALL_PATH /home/app

WORKDIR $INSTALL_PATH

ADD . .

RUN npm install -g angular-cli && npm cache clean
RUN npm install
RUN ng build -prod

EXPOSE $FE_SERVER_PORT

ENTRYPOINT ["/bin/bash","-c"]
CMD ["ng serve -prod --host 0.0.0.0 --port 4200"]
