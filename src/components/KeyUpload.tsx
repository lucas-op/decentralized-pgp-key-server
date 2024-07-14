import React, { useState } from "react";
import { useStore } from "@/zustand/store"; // Ensure this path is correct
import { validatePublicKey, uploadToIPFS } from "@/utils/utils"; // Ensure this path is correct

const PublicKeyUpload: React.FC = () => {
  const [publicKey, setPublicKey] = useState("");
  const [loading, setLoading] = useState(false);
  const setIpfsHash = useStore((state) => state.setIpfsHash);

  // Function to handle the validation and upload process
  const handleUpload = async () => {
    setLoading(true);
    try {
      const validatedKey = await validatePublicKey(publicKey);
      const ipfsHash = await uploadToIPFS(validatedKey.armor());
      setIpfsHash(ipfsHash);
      alert("Public key is uploaded and IPFS hash is stored.");
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      <textarea
        className="textarea textarea-bordered w-full h-40 mb-4"
        value={publicKey}
        onChange={(e) => setPublicKey(e.target.value)}
        placeholder="Paste your PGP public key here"
      />
      <button
        className="btn btn-primary w-full"
        onClick={handleUpload}
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload and Validate"}
      </button>
    </div>
  );
};

export default PublicKeyUpload;
