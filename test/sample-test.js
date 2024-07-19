const { expect } = require("chai");
const { ethers } = require("hardhat");

// ToDo: Run a local test
describe("CryptoKids", function () {
  it("Should return the new greeting once it's changed", async function () {
    const CryptoKids = await ethers.getContractFactory("CryptoKids");
    const cryptoKids = await Greeter.deploy("Hello, world!");
    await cryptoKids.deployed();
  });
});