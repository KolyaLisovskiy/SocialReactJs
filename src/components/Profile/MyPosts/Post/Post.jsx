import Name from '../../Name/Name';
import m from './Post.module.scss';

const Post = (props) => {
  return (


    <div className={m.main_content_posts_all}>
      <Name></Name>
      <div className={m.main_content_posts_message_info}>
        <p>
          {props.message}
        </p>
        <p className={m.like}>
          {props.like}
        </p>
      </div>

    </div>

  );
}
export default Post;