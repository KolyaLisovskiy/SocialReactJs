import m from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
return(
  
  <div classNamema={m.main_content_posts}>
    <p>Мои посты</p>
    <div className={m.main_content_posts_new}>
     <textarea></textarea>
     <button>Добавить пост</button>
     </div>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
  </div>
);
}
export default MyPosts;