import { create } from "ipfs-http-client";
import * as openpgp from "openpgp";

const ipfs = create({
  url: "https://7cd4c709e3db6648fa9d335aeb55f65f.ipfscdn.io/ipfs/",
});

export const validatePublicKey = async (publicKeyArmored: string) => {
  if (!publicKeyArmored.startsWith("-----BEGIN PGP PUBLIC KEY BLOCK-----")) {
    throw new Error("Please provide a valid PGP public key.");
  }
  try {
    const publicKey = await openpgp.readKey({ armoredKey: publicKeyArmored });
    return publicKey; // Key is valid
  } catch (error) {
    console.error("Error validating public key:", error);
    throw new Error("Invalid public key format.");
  }
};

export const uploadToIPFS = async (publicKeyArmored: string) => {
  try {
    const { path } = await ipfs.add(publicKeyArmored);
    return path;
  } catch (error) {
    console.error("Error uploading to IPFS:", error);
    throw new Error("Failed to upload to IPFS.");
  }
};
