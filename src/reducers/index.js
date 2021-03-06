const initialState = {
    count:0
}

export function reducer(state = initialState, action)
{
    switch(action.type)
    {
        case 'INCREMENT_COUNTER':
            return{
                count: state.count + 1
            };
        
        case 'DECREMENT_COUNTER':
            return {
                count: state.count - 1
            };
        
        default:
            return state;
    }
}