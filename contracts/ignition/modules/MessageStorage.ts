import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const INITIAL_MESSAGE = "Hello, World!";

const MessageStorageModule = buildModule("MessageStorageModule", (m) => {
  const initialMessage = m.getParameter<string>(
    "initialMessage",
    INITIAL_MESSAGE
  );

  const messageStorage = m.contract("MessageStorage", [initialMessage]);

  return { messageStorage };
});

export default MessageStorageModule;
