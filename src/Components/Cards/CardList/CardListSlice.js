//{type: 'cards/cardRemoved', payload: cardId}
const initialState = 
[
    {id: 1, title: "Main card", content:"Lorum ipsum ipsum", points: 200},
    {id: 1, title: "Main card", content:"Lorum ipsum ipsum", points: 500}
]

const actionTypes = {

}

const cardsReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case 'cards/cardRemoved':
        {
            return state.filter((card) => card.id !== action.payload)
        }
    
     default:
         return state
    }

}

export default cardsReducer;