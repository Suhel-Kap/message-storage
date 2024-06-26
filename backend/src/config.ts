import dotenv from "dotenv";
import { MESSAGE_STORAGE_ABI, MESSAGE_STORAGE_ADDRESS } from "./constants";

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  privateKey: process.env.OWNER_PRIVATE_KEY!,
  rpcUrl: process.env.SEPOLIA_RPC_URL,
  contractAddress: MESSAGE_STORAGE_ADDRESS,
  contractAbi: MESSAGE_STORAGE_ABI,
};
