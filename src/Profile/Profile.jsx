import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={style.headerImg}>
                <img
                    src='https://images.all-free-download.com/images/graphiclarge/beach_cloud_dawn_horizon_horizontal_landscape_ocean_601821.jpg' alt='headerImg'/>
            </div>
            <div className={style.myinfo}>
                <img src='https://www.4dface.io/wp-content/uploads/2018/10/4DFM_sample2.jpg' alt='myInfo'/>
                <div>
                    description
                </div>
            </div>
        </div>
    )
}

const Profile = function (props) {
    return <div className={style.content}>
        <ProfileInfo/>
        <MyPosts posts={props.posts}/>
    </div>
}

export default Profile;