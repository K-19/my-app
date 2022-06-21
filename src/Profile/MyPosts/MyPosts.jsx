import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = props.posts.map(p => <Post message={p.message} likes={p.likes}/>);

    return (
        <div>
            <div>
                my posts
            </div>
            <div>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;