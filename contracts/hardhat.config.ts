import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  defaultNetwork: "amoy",
  networks: {
    hardhat: {},
    amoy: {
      url: vars.get("AMOY_RPC_URL"),
      accounts: [vars.get("DEPLOYER_PVT_KEY")],
    },
  },
};

export default config;
