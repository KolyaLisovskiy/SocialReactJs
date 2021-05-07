import MyPosts from './MyPosts/MyPosts';
import m from './Profile.module.scss';

const Profile = () => {
return(
<main className={m.main}>
<img className={m.main_img_top} src="https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg"></img>
  <div className={m.main_content}> 
  <div className={m.main_content_imgName}>
    <img src="https://pbs.twimg.com/profile_images/473506797462896640/_M0JJ0v8_400x400.png"></img>
    <p>Василий пупкин</p>
  </div>
  <MyPosts></MyPosts>
  </div>
</main>
);
}
export default Profile;