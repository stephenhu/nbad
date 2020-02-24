FROM golang as builder
WORKDIR /nbad
COPY . .
RUN go get github.com/eknkc/amber && \
    go get github.com/gomodule/redigo/redis && \
    go get github.com/gorilla/mux && \
    go get github.com/stephenhu/stats && \
    go get github.com/mmcdole/gofeed && \
    go build

FROM ubuntu
WORKDIR /usr/local/nbad
COPY --from=builder /nbad/nbad .
COPY www ./www
COPY nba ./nba
RUN apt-get -y update && apt-get install -y \
    libc6 \
    libssl-dev
EXPOSE 9005
CMD /usr/local/nbad/nbad
