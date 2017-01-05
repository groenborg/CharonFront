FROM python:2.7.12-slim
MAINTAINER groenborg

ENV SERVER_PORT 4200
ENV INSTALL_PATH /home/app

WORKDIR $INSTALL_PATH

EXPOSE $SERVER_PORT

COPY ./dist .

ENTRYPOINT ["/bin/bash","-c"]
CMD ["python -m SimpleHTTPServer 4200"]
