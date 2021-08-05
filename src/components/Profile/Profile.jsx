import MyPosts from './MyPosts/MyPosts';
import m from './Profile.module.scss';

const Profile = () => {
return(
<main className={m.main}>
  <div className={m.main_content}> 
  <MyPosts/>
  </div>
</main>
);
}
export default Profile;