FROM alpine:latest
MAINTAINER Nathan Kemppainen

# update alpine linux
RUN apk update && apk upgrade && \ 
    apk add nodejs && \
    apk add nodejs-npm && \
    npm install -g @angular/cli

# add source code to images
ADD . /HPDB_Frontend

# switch working directory
WORKDIR ./HPDB_Frontend

# install dependencies
RUN npm install

# expose port 4200
EXPOSE 4200 

# run ng serve on localhost
CMD ["ng","serve", "--host", "0.0.0.0", "--disable-host-check"] 
