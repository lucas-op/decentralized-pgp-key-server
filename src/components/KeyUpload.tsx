// components/KeyUpload.tsx

import React, { useState } from "react";
import { uploadToIPFS } from "@/hooks/ipfsUpload";
import openpgp from "openpgp";

const KeyUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [ipfsHash, setIpfsHash] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files ? event.target.files[0] : null);
  };

  const validatePublicKey = async (
    file: File
  ): Promise<
    { armoredKey: string; details: openpgp.Key | null } | undefined
  > => {
    try {
      const fileContents = await file.text();
      const publicKey = await openpgp.readKey({ armoredKey: fileContents });

      const userIds = publicKey.getUserIDs().map((userId) => ({
        userID: userId,
        userAttribute: [],
        selfCertifications: [],
        otherCertifications: [],
        revocationSignatures: [],
      }));
      const keyId = publicKey.getKeyID().toHex();

      return {
        armoredKey: fileContents,
        details: publicKey,
        // details: {
        //   users: userIds,
        //   keyId: keyId,

        // },
      };
    } catch (err) {
      setError("Invalid PGP public key. Please check the file and try again.");
      return undefined;
    }
  };

  const handleUpload = async () => {
    if (file) {
      setUploading(true);
      setError(null);
      const validKey = await validatePublicKey(file);
      if (validKey) {
        try {
          const hash = await uploadToIPFS(file);
          setIpfsHash(hash || null);
          alert(
            "File successfully validated and uploaded to IPFS with hash: " +
              hash
          );
        } catch (err) {
          setError("Error uploading file: " + err);
        }
      }
      setUploading(false);
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Upload your PGP Public Key
        </label>
        <input
          type="file"
          onChange={handleFileChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      {file && (
        <div className="mb-4">
          <button
            onClick={handleUpload}
            className={`px-4 py-2 rounded-md text-white ${
              uploading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-700"
            }`}
            disabled={uploading}
          >
            {uploading
              ? "Validating and Uploading..."
              : "Validate and Upload to IPFS"}
          </button>
        </div>
      )}
      {ipfsHash && (
        <p className="text-green-500">
          Uploaded successfully! IPFS Hash: {ipfsHash}
        </p>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default KeyUpload;
