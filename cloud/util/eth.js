/**
 * Created by lilu on 2018/3/24.
 */
var Web3 = require('web3');
var secp256k1 = require('secp256k1/elliptic')
var createKeccakHash = require('keccak')
var crypto = require('crypto')
var schedule = require("node-schedule")
import {BigNumber} from 'bignumber.js';

var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));

let abi = [{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]
let abi2 = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}]


let testContract = {
  address: '0x5A498f4109cba199173A8827729690c5258224f5' ,
  privateKey: '0xd606e705e3e89f193de90fb1b00e25ce4ee07eb89bb4a62c9f22f496bc89ce8a',
  conAddress: '0x578BC65cac465A2cFD328bA620aFd34e617199e0',
  con2Address: '0x9C531B91b85C29531943F130059D921a7F6B6424'
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



/**
 * 创建一个以太坊用户
 * @returns {Account}
 */
async function createETHUser(){
  var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));
  let user = web3.eth.accounts.create()
  return user
}

/**
 * 从区块链中获取幽能
 * @param params
 * @returns {PromiEvent<T>|any}
 */
async function getEngineFromContract(params){
  let {address,engine} = params
  console.log('addr======>',address)
  console.log('engine======>',engine,typeof(engine))
  var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));
  let wallet = web3.eth.accounts.wallet.add(testContract.privateKey)
  var myCon = new web3.eth.Contract(abi2,testContract.con2Address)
  // let estimateGas = await myCon.methods.transfer(testUser.address,100).estimateGas()
  return await myCon.methods.transfer(address, engine*1e18).send({from: wallet.address, gas: 500000})
    // .on('transactionHash',(hash)=>{
    // }).on('confirmation', function(confirmationNumber, receipt){
    //   console.log('confirmation======>',confirmationNumber)
    // if(confirmationNumber>=24){
    //     console.log('is ok=======>',receipt)
    //     return receipt
    // }
    // }).on('error', console.error)
}

/**
 * 获取用户幽能数
 * @param request
 * @returns {ABIDefinition[]}
 */
async function getUserEngineNum(params){
  let {address} = params
  console.log('address======>',address)
  var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));
  var myCon = new web3.eth.Contract(abi2,testContract.con2Address)
  return await myCon.methods.balanceOf(address).call()
}

async function testCon(request){
  // return await getUserEngineNum(request.params)
  var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));
  console.log('4e-5=======>',uint(decimals))
  return web3.utils.toWei(0.0004,'ether')
}

export async function testSchedule(){
  var rule = new schedule.RecurrenceRule();
  let secArray = [1,6,11,16,21,26,31,36,41,46,51,56]
  rule.second = secArray

  schedule.scheduleJob(rule,()=>{
    console.log('i m hero====>')
    })
}

export const ethFuncs = {
  createETHUser,
  testWeb3,
  testCon,
  testAccounts,
  getEngineFromContract,
  getUserEngineNum,
  testSchedule
}