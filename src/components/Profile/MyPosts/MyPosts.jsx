import m from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
  return (

    <div className={m.main_content_posts}>
      <p className={m.main_content_posts_name}>Мои посты</p>
      <Post message='Hi, how are you?' like='5' />
      <Post message='First post' like='4' />
      <Post message='go next' like='5' />
      <Post message='auf' like='3' />
      <div className={m.main_content_posts_new}>
        <textarea></textarea>
        <button>Добавить пост</button>
      </div>
    </div>
  );
}
export default MyPosts;