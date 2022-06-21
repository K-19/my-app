import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name:'Коля'},
        {id: 2, name:'Максим'},
        {id: 3, name:'Гена'},
        {id: 4, name:'Света'},
        {id: 5, name:'Асёл'},
        {id: 6, name:'Гитлер'},
    ]


    let messagesData = [
        { id: 1, text:'Привет1'},
        { id: 2, text:'Привет2'},
        { id: 3, text:'Привет3'},
        { id: 4, text:'Привет4'},
    ]

    return (
        <div className={style.main}>
            <div className={style.dialogs}>
                <Dialog name={dialogsData[0].name} personId={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} personId={dialogsData[1].id}/>
                <Dialog name={dialogsData[2].name} personId={dialogsData[2].id}/>
                <Dialog name={dialogsData[3].name} personId={dialogsData[3].id}/>
                <Dialog name={dialogsData[4].name} personId={dialogsData[4].id}/>
                <Dialog name={dialogsData[5].name} personId={dialogsData[5].id}/>
            </div>
            <div className={style.messages}>
                <Message text={messagesData[0].text}/>
                <Message text={messagesData[1].text}/>
                <Message text={messagesData[2].text}/>
                <Message text={messagesData[3].text}/>
            </div>
        </div>
    )
}

export default Dialogs;