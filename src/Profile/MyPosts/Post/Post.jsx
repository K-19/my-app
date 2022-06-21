import style from './Post.module.css'

const Post = function(props) {
    return (
        <div className={style.item}>
            <img className={style.imgPost} src='https://w7.pngwing.com/pngs/919/879/png-transparent-computer-icons-ico-miscellaneous-blue-face.png' alt='imgPost'/>
            {props.message}
            <div>
                <img className={style.imgLike} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bot%C3%B3n_Me_gusta.svg/langru-240px-Bot%C3%B3n_Me_gusta.svg.png' alt='imgLike'/>
                {props.likes}
                <button>Лайк</button>
                <button>Дизлайк</button>
            </div>
        </div>
    )
}

export default Post;