import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";



let store = {
    _state: {
        profilePage: {

            posts: [
                {id: 1, message: 'Hello, my dear friends', likesCount: 53},
                {id: 2, message: 'Hello, my dear friends', likesCount: 24}
            ],

            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Sasha"},
                {id: 2, name: "Olya"},
                {id: 3, name: "Lesha"},
                {id: 4, name: "Kisyunya"},
                {id: 5, name: "Sergey"}

            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}


            ],
            newMessageBody: ""
        }
    },
    callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this.callSubscriber = observer            /*когда происходят изменения вызывается функция rerender (наблюдатель) */

    },


    dispatch(action) {                        /*объект, описывающий действие {type: 'ADD-POST'}*/
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        /*this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)*/
        this.callSubscriber(this._state)

    }
}




export default store
window.state = store