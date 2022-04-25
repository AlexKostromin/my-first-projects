import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DilaogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
    let state = props.dialogsPage         /*создаем локальный state */
    let dialogsElements = state.dialogs                           /*создаем массив dialogElements и подтягиваем пропсы*/
        .map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messages                          /*Создаем массив messagesElements и подтягиваем пропсы*/
        .map(m => < Message message={m.message} key={m.id}/>)


    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
           }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div><textarea onChange={onNewMessageChange} placeholder='Enter your message'
                               value={newMessageBody}></textarea></div>
                {/*компонент, который отображает текст*/}
                <div>
                    <button onClick={onSendMessageClick}>Add Message</button>
                </div>
                {/*свойство кнопки при нажатии выполнять какое-либо действие*/}
            </div>
        </div>
    )
}
export default Dialogs;