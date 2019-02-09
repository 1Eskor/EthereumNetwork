

eth_TransactionCount = async (e) => {
    e.preventDefault();
    // let button = document.getElementById("button")

    let address = document.getElementById("addressInput").value;
    console.log(address);




    // const url = await fetch("https://api.etherscan.io/api?module=block&action=getblockreward&blockno=2165403&apikey=DW2QQ3HE9S1SWB7XBYSIN179ZG8E38MA9I")
    const getTransactionCount= await fetch("https://api.etherscan.io/api?module=proxy&action=eth_getTransactionCount&address=" + address + "&tag=latest&apikey=DW2QQ3HE9S1SWB7XBYSIN179ZG8E38MA9I") // fix
    const fetchedData = await getTransactionCount.json()
    const fetchedDataResult = await parseInt(fetchedData.result)

    console.log(fetchedDataResult)
    document.getElementById("eth-to-btc").innerHTML = fetchedDataResult;
}




eth_LastBlock = async (e) => {
e.preventDefault()

    const getLastBlock = await fetch("https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=DW2QQ3HE9S1SWB7XBYSIN179ZG8E38MA9I")
    const fetchedBlock = await getLastBlock.json()
    const fetchedBlockResult = await parseInt(fetchedBlock.result)
    console.log(fetchedBlockResult)

    document.getElementById("lastBlock").innerHTML= fetchedBlockResult;
}





eth_getLastEtherPrice = async (e) => {
e.preventDefault()

    const getLastEtherPrice = await fetch("https://api.etherscan.io/api?module=stats&action=ethprice&apikey=DW2QQ3HE9S1SWB7XBYSIN179ZG8E38MA9I")
    const fetchedHash = await getLastEtherPrice.json()
    const fetchedHashResult = await fetchedHash.result.ethbtc
    console.log(fetchedHashResult)

    document.getElementById("lastEthereumPrice").innerHTML = fetchedHashResult;

}




eth_getBlockAndUncleRewardsByBlockNumber = async (e) => {
e.preventDefault()

    const getBlockReward = await fetch("https://api.etherscan.io/api?module=block&action=getblockreward&blockno=2165403&apikey=DW2QQ3HE9S1SWB7XBYSIN179ZG8E38MA9I")
    const fetchedReward = await getBlockReward.json()
    const fetchedResult = await fetchedReward.result.blockReward
    console.log(fetchedResult)

    document.getElementById("BlockUncleRewardsByBlockNumber").innerHTML = fetchedResult;
}




 document.addEventListener("DOMContentLoaded", function() {
     eth_TransactionCount()
     eth_LastBlock()
     eth_getLastEtherPrice()
     eth_getBlockAndUncleRewardsByBlockNumber()
    
 });