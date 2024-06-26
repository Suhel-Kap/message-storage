import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: vars.get("SEPOLIA_RPC_URL"),
      accounts: [vars.get("DEPLOYER_PVT_KEY")],
    },
  },
  etherscan: {
    apiKey: vars.get("ETHERSCAN_API_KEY"),
  },
};

export default config;
