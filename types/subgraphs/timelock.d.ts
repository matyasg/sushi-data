export type Timelock = {
    id?: string,
    description?: string,
    value?: string,
    eta?: string,
    functionName?: string,
    data?: string,
    targetAddress?: string,
    isCanceled?: string,
    isExecuted?: string,
    createdBlock?: string,
    createdTs?: string,
    expiresTs?: string,
    canceledBlock?: string,
    canceledTs?: string,
    executedBlock?: string,
    executedTs?: string,
    createdTx?: string,
    canceledTx?: string,
    executedTx?: string
}