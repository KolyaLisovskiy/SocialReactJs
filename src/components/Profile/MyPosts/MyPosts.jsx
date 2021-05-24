import m from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
return(
  
  <div className={m.main_content_posts}>
    <p className={m.main_content_posts_name}>Мои посты</p>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <div className={m.main_content_posts_new}>
     <textarea></textarea>
     <button>Добавить пост</button>
     </div>
  </div>
);
}
export default MyPosts;