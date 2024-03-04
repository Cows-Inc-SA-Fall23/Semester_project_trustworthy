> [!CAUTION] 
> A large amount of this is AI generated!!!

# Technologies in considuration

## ESP32

- Rust
  - [Embassy](https://embassy.dev)

## Server hub

- [elixir](https://elixir-lang.org)
- Database
  - [PostgreSQL](https://www.postgresql.org)
  - [MySQL](https://www.mysql.com)
  - [SQLite](https://www.sqlite.org)
  - [MongoDB](https://www.mongodb.com)
- [MQTT](https://mqtt.org)

## Mobile App

- [Expo](https://expo.dev)
- [MQTT](https://mqtt.org)

## Protocols

- [MQTT](https://mqtt.org)
- [zigbee](https://zigbeealliance.org)
- [z-wave](https://www.z-wave.com)
- [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol)
- [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)
- [UART](https://en.wikipedia.org/wiki/Universal_asynchronous_receiver-transmitter)
- [gRPC](https://grpc.io)

## Connection types

- [WiFi](https://en.wikipedia.org/wiki/Wi-Fi)
- [Bluetooth](https://en.wikipedia.org/wiki/Bluetooth)
- [zigbee](https://zigbeealliance.org)
- [z-wave](https://www.z-wave.com)

# Description

What we are going with.

## Hardware level

We have chosen to go for rust for the ESP32, as it is a low level language that
is very fast and has a lot of potential. We are going to use the embassy
framework for the ESP32, as it is a very fast and efficient framework for rust.
It also provides an async runtime, which is very useful for the ESP32, as it is
a very low level device.

## Server hub

There are no specific technologies that we have chosen as of now but the most
notible ones for now are a Node.js environment with a SQL database. For
communication between the server and client we are going to use a REST API and
maybe in combination with MQTT. For communication with the Hardware devices we
are going to be using MQTT. The server hub will also be responsible for handling
the communication between the hardware devices and the mobile app. For the
Hardware device functions will be available for execution via commands sent from
the server hub. For multiple devices we are going to handle this on the server
with a database for (still to be determined) device information and
authentication. It has also been considered to use zigbee or z-wave for
communication between the server hub and the hardware devices. since this an
already established protocol for home automation.
