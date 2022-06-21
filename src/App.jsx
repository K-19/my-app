import style from './App.module.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import Dialogs from "./Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={style.app_wrapper}>
                <Header/>
                <Navbar/>
                <div className={style.app_wrapper_content}>
                    <Routes>
                        <Route path='/profile' element={<Profile posts={props.state.posts}/>}/>
                        <Route path='/dialogs/*'
                               element={<Dialogs dialogsData={props.state.dialogs} messagesData={props.state.messages}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;