export const incrementCounter = (count) =>{
    return {
        type: 'INCREMENT_COUNTER',
        count
    }
}

export const decrementCounter = () =>{
    return {
        type: 'DECREMENT_COUNTER'
    }
}