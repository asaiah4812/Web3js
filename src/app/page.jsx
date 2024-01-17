"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { connectMetaMask } from '@/component/Metamask';
import { useEffect, useState } from "react";
import Web3 from "web3";
import Form from '@/component/form/Form';
import Link from 'next/link';


export default function Home() {
  const [balance, setBalance] = useState(null);
  useEffect(() => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      const web3 = new Web3(window.ethereum);
      web3.eth.getBalance(window.ethereum.selectedAddress).then((balance) => {
        setBalance(web3.utils.fromWei(balance, "ether"));
      });
    }
  }, []);
  const connectWallet = async () => {
    const account = await connectMetaMask();
    if (account) {
      console.log("Connected to MetaMask:", account);
      // You can add further logic here after connecting to MetaMask
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerNavbar}>
        <Link href="/">Asaiah Henson</Link>
        <div className={styles.balance}>
        <button onClick={connectWallet}>Connect Wallet</button>
          {balance ? (
            <p>Your balance is: {balance} ETH</p>
          ) : (
            <p>Please connect your MetaMask wallet</p>
          )}
        </div>
      </div>
      <div className={styles.content}>
      <Form />

      </div>
    </div>
  );
}