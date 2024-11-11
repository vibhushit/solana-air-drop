const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL
 } = require("@solana/web3.js")

 const wallet = new Keypair()

 const publicKey = new PublicKey(wallet._keypair.publicKey)
 const secretKey = wallet._keypair.secretKey

 console.log("Wallet public key:", publicKey.toString());

 const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')

const getWalletBalance = async() => {
    try {
        const walletBalance = await connection.getBalance(publicKey)
        console.log(`Wallet balance is ${walletBalance / LAMPORTS_PER_SOL} SOL`)
        return walletBalance
    } catch(err) {
        console.error('Error getting balance:', err)
        return 0
    }
}

 const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

 const airDropSol = async() => {
    try {
        const fromAirDropSignature = await connection.requestAirdrop(
            publicKey,
            0.5 * LAMPORTS_PER_SOL
        )
        const latestBlockHash = await connection.getLatestBlockhash()
        
        await connection.confirmTransaction({
            blockhash: latestBlockHash.blockhash,
            lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
            signature: fromAirDropSignature
        }, 'confirmed')
        
        console.log('Airdrop completed successfully')
    } catch(err) {
        console.error('Error requesting airdrop:', err)
    }
}

const main = async() => {
    await getWalletBalance()
    await airDropSol()
    await getWalletBalance()
}

main()