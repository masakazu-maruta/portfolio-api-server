FROM golang:1.24.1-bookworm
WORKDIR /workspace
COPY go.mod go.sum ./
RUN go mod tidy
ENTRYPOINT ["go", "run", "main.go"]
