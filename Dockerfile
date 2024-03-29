
FROM node:20
WORKDIR /client

ARG NEXT_PUBLIC_SERVER_URL
ARG NEXT_PUBLIC_GEOAPI_URL
ARG NEXT_PUBLIC_GEOAPI_KEY
ARG NEXT_PUBLIC_EMAIL_PUBLIC_KEY

ENV NEXT_PUBLIC_SERVER_URL $NEXT_PUBLIC_SERVER_URL
ENV NEXT_PUBLIC_GEOAPI_URL $NEXT_PUBLIC_GEOAPI_URL
ENV NEXT_PUBLIC_GEOAPI_KEY $NEXT_PUBLIC_GEOAPI_KEY
ENV NEXT_PUBLIC_EMAIL_PUBLIC_KEY $NEXT_PUBLIC_EMAIL_PUBLIC_KE

COPY package.json yarn.lock ./
RUN yarn install 

COPY . .
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]