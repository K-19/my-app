import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogs = props.dialogsData.map(d => <Dialog name={d.name} personId={d.id}/>);
    let messages = props.messagesData.map(m => <Message text={m.text}/>);

    return (
        <div className={style.main}>
            <div className={style.dialogs}>
                { dialogs }
            </div>
            <div className={style.messages}>
                { messages }
            </div>
        </div>
    )
}

export default Dialogs;