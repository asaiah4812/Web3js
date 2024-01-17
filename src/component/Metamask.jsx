import Web3 from "web3";

const connectMetaMask = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      return accounts[0];
    } catch (error) {
      console.error("User denied account access", error);
    }
  } else {
    console.error("MetaMask not detected");
  }
};

const getWeb3 = () => {
  if (window.ethereum) {
    return new Web3(window.ethereum);
  } else if (window.web3) {
    return new Web3(window.web3.currentProvider);
  } else {
    console.error("MetaMask not detected");
  }
};

export { connectMetaMask, getWeb3 };
