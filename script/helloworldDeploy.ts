import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
async function foo() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const hello = await HelloWorld.deploy();
  await hello.deployed();

  return hello;
}

async function deploy() {
  const hello = await foo();
  return hello;
}
//@ts-ignore
async function sayhello(hello) {
  console.log("sayhello", await hello.hello());
}

deploy().then(sayhello);
