import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("MessageStorage", function () {
  async function deployMessageStorageFixture() {
    const initialMessage = "hello world";

    const [owner, otherAccount] = await hre.ethers.getSigners();

    const MessageStorage = await hre.ethers.getContractFactory(
      "MessageStorage"
    );
    const messageStorage = await MessageStorage.deploy(initialMessage);

    return { messageStorage, initialMessage, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the initial message", async function () {
      const { messageStorage, initialMessage } = await loadFixture(
        deployMessageStorageFixture
      );

      expect(await messageStorage.getMessage()).to.equal(initialMessage);
    });

    it("Should set the right owner", async function () {
      const { messageStorage, owner } = await loadFixture(
        deployMessageStorageFixture
      );

      expect(await messageStorage.getAdmin()).to.equal(owner.address);
    });
  });

  describe("Message Management", function () {
    it("Should allow the admin to set a new message", async function () {
      const { messageStorage, owner } = await loadFixture(
        deployMessageStorageFixture
      );
      const newMessage = "New message";

      await messageStorage.connect(owner).setMessage(newMessage);
      expect(await messageStorage.getMessage()).to.equal(newMessage);
    });

    it("Should not allow non-admin to set a new message", async function () {
      const { messageStorage, otherAccount } = await loadFixture(
        deployMessageStorageFixture
      );
      const newMessage = "New message";

      await expect(
        messageStorage.connect(otherAccount).setMessage(newMessage)
      ).to.be.revertedWith("Only admin can call this function");
    });
  });
});
