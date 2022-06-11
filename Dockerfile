FROM golang as builder
WORKDIR /work/src/github.com/stephenhu/nbad
COPY . .
RUN go env -w GO111MODULE=on && \
    go env -w GOPROXY=https://goproxy.cn,direct && \
    go build

FROM ubuntu
WORKDIR /usr/local/nbad
COPY --from=builder /work/src/github.com/stephenhu/nbad/nbad .
COPY www ./www
RUN apt-get -y update && apt-get install -y \
    libc6 \
    libssl-dev \
    tzdata \
    openssl \
    ca-certificates
EXPOSE 9005
CMD /usr/local/nbad/nbad
