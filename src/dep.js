

import React, {useState} from 'react' ; 
import ethers from 'ethers';
// const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/bc36b26163404dd9b04cbab040d972ff"));
const contractAddress = "0x8c4e1387ca10623c456bfa746b66410c0bbd1308"; //Contract Address

const abi =[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "Inbox",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getData",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "ins_name",
				"type": "string"
			}
		],
		"name": "setData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
    let Provider = new ethers.providers.Web3Provider(window.ethereum);
   //let tempProvider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/bc36b26163404dd9b04cbab040d972ff");
   
   // access to blockchain and write 
   let  Signer = Provider.getSigner();
    
    const contractSigner	= new ethers.Contract(contractAddress, abi, Signer);


 

// const getBalances = async ()=>{
//    const balance = await Signer.getBalance();
//    console.log("My balance is : " ,balance.toString());
// }    

export default contractSigner;
//   async function main () {
//       // Connect to an EVM network
//       const provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/bc36b26163404dd9b04cbab040d972ff`)
//       // Get the gas price
//       const gasPrice = provider.getGasPrice()
//       // Create a wallet object from private key
//       const wallet = new ethers.Wallet(`${process.env.PRIVATE_KEY}`)  
//       // Get a signer
//       const signer = wallet.connect(provider)
//       // Get the address of the receiving wallet
//       const receiver = '0x84735dFae9B8005011B85cb7799CEC5FFd715726'
//       // Look up the current block number
//       let block = await provider.getBlockNumber()
//       // Create the transaction object
//       const tx = {
//           from: wallet.address,
//           to: receiver,
//           value: ethers.utils.parseUnits('1', 'ether'),
//           gasPrice: gasPrice,
//           gasLimit: ethers.utils.hexlify(300000),
//           nonce: provider.getTransactionCount(wallet.address, block)
//       }
//       // Send the transaction
//       const transaction = await signer.sendTransaction(tx);
//       // Wait to get the transaction result
//       let result = await transaction.wait()
//       console.log(result)
//   }
   

