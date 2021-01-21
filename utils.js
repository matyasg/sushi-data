const { request, gql } = require('graphql-request');
const blocklytics = 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks';

async function timestampToBlock(timestamp) {
    timestamp = String(timestamp).length > 10 ? Math.floor(timestamp / 1000) : timestamp;

    let result = await request(blocklytics,
        gql`{
            blocks(first: 1, orderBy: timestamp, where: { timestamp_gte: ${timestamp} }) {
                number
            }
        }`
    );
    
    // if the timestamp is too new
    if(result.blocks.length === 0) {
        result = await request(blocklytics,
            gql`{
                blocks(first: 1, orderBy: timestamp, orderDirection: desc) {
                    number
                }
            }`
        );
    }

    return Number(result.blocks[0].number);
}

async function blockToTimestamp(block) {
    const result = await request(blocklytics,
        gql`{
            blocks(first: 1, where: { number: ${block} }) {
                timestamp
            }
        }`
    );

    return Number(result.blocks[0].timestamp);
}

module.exports = {
    timestampToBlock,
    blockToTimestamp,
};