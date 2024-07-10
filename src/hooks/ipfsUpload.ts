import { create } from "ipfs-http-client";

const client = create({ url: "https://ipfs.infura.io:5001" });

export async function uploadToIPFS(file: any) {
  try {
    const added = await client.add(file);
    return added.path;
  } catch (error) {
    console.error("Error uploading file: ", error);
  }
}
