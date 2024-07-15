# Decentralized PGP Key Server

## Summary

This project aims to create a decentralized key server for PGP keys using attestations. The goal is to make it easy for users to attest that a public key is valid and display a trust score for that key’s validity, creating a web of trust model between users and their public keys.

## Features

- **Attestations**: Allow users to easily attest to the validity of a PGP key.
- **Trust Score**: Create a trust score based on attestations between keys.
- **Trust Verification**: Check the trust score for a given key.

## Getting Started

This is a Next.js project bootstrapped with `create-next-app`.

### Prerequisites

- Node.js
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/lucas-op/decentralized-pgp-key-server.git
    cd decentralized-pgp-key-server
    ```

2. **Install dependencies**:
    ```sh
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3. **Run the development server**:
    ```sh
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

4. **Open the application**:
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API Documentation

### Endpoints

- **POST /attestations**: Add an attestation for a PGP key.
- **GET /keys/{keyId}/trust-score**: Get the trust score for a given key.
- **GET /keys/{keyId}/attestations**: Get all attestations for a given key.

### Example Requests

#### Attest to a Key

## License
This project is licensed under the MIT License - see the LICENSE file for details.

