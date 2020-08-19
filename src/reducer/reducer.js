export const initialState = [
]

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: Math.random(), title: `Catatan${state.length + 1}`, content: "belum ada catatan" }]
        case "ADD_POST":
            return [...state, { id: Math.random(), title: action.payload.title, content: action.payload.content }]
        case "REMOVE":
            return state.filter((post) => action.payload !== post.id)
        default:
            return state
    }
}