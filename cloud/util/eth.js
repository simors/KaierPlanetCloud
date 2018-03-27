/**
 * Created by lilu on 2018/3/24.
 */
var Web3 = require('web3');


let abi = [{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]
let testContract = {
  address: '0x5A498f4109cba199173A8827729690c5258224f5' ,
  privateKey: 'd606e705e3e89f193de90fb1b00e25ce4ee07eb89bb4a62c9f22f496bc89ce8a',
  conAddress: '0x578BC65cac465A2cFD328bA620aFd34e617199e0'
}

let conAddress = '0x578BC65cac465A2cFD328bA620aFd34e617199e0'
let conConAddress = '0x5A498f4109cba199173A8827729690c5258224f5'

let testUser = {
  "address": "0xB8E6b0eBaE1AfD040c12AE7d40031f96e4673E56",
  "privateKey": "0x26b68ab62b2e14aa290521ab266a7616e1f4cf75b02343158e82fce2e8609ef2"
}

async function testWeb3(){
  var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));
  let balance = web3.eth.getBalance('0x5A498f4109cba199173A8827729690c5258224f5')
  return balance
}

async function testAccounts(){
  var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));
  return await web3.eth.getAccounts()
}

async function createETHUser(){
  var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));
  let user = web3.eth.accounts.create()
  return user
}

async function testCon2(){
  var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));
  // let wallet = web3.eth.accounts.wallet.add(testContract.privateKey)
  // return wallet
  web3.eth.defaultAccount = testContract.address
  // web3.eth.personal.unlockAccount(testContract.address)
  var myCon = new web3.eth.Contract(abi,testContract.conAddress)

  let bal = await myCon.methods.transfer(testUser.address,100).send({from: testContract.address, gas: 600})

  return bal

}

async function testCon(){
  var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));
  console.log('web3.currentProvider',web3.eth.currentProvider)
  let wallet = web3.eth.accounts.wallet.add(testContract.privateKey)
  // return wallet
  web3.eth.defaultAccount = testContract.address
  let balance = await web3.eth.getBalance(testContract.address)
  let gasPrice = await web3.eth.getGasPrice()
  console.log('balance========>',balance)
  console.log('gasPrice========>',gasPrice)
  // let coinBase = await web3.eth.getCoinbase()
  // console.log('coinBase========>',coinBase)

  console.log('web3.eth.defaultAccount ====>',web3.eth.defaultAccount )
  // web3.eth.personal.unlockAccount(testContract.address)
  var myCon = new web3.eth.Contract(abi,testContract.conAddress,{from: testContract.address})
  //
  // let bal = await myCon.methods.balanceOf(testContract.address).call()
  let estimateGas = await myCon.methods.transfer(testUser.address,100).estimateGas()
  console.log('estimateGas=========>',estimateGas*gasPrice)
  console.log('estimateGas=========>',balance)
  let bal = await myCon.methods.transfer(testUser.address,100).send({from: wallet.address, gas: 34674})

  return bal

}

export const ethFuncs = {
  testWeb3,
  createETHUser,
  testCon,
  testAccounts
}