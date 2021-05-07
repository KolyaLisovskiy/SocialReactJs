import m from './scss/Profile.module.scss';

const Profile = () => {
return(
<main className={m.main}>
<img className={m.main_img_top} src="https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg"></img>
  <div className={m.main_content}> 
  <div className={m.main_content_imgName}>
    <img src="https://pbs.twimg.com/profile_images/473506797462896640/_M0JJ0v8_400x400.png"></img>
    <p>Василий пупкин</p>
  </div>
  <div classNamema={m.main_content_posts}>
    <p>Пост</p>
    <div className={m.main_content_posts_new}>
      <p>
        Новый Пост
      </p>
     </div>
     <div className={m.main_content_posts_all}>
      <p>
        Пост1
      </p>
     </div>
     <div className={m.main_content_posts_all}>
      <p>
      Пост2
      </p>
     </div>
     <div className={m.main_content_posts_all}>
      <p>
      Пост3
      </p>
     </div>
  </div>
  </div>
</main>
);
}
export default Profile;