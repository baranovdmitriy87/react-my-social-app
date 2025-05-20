import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.posts}>
      <div className={s.item}>
        <img src="https://steamuserimages-a.akamaihd.net/ugc/2100422066956953334/BCFFD0DB0C56F71CD288304540E39FC2FADFD155/?imw=512&amp;imh=341&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true" alt="аватарка" />
        <p>
          {props.message}
        </p>
      </div>
      <span className={s.icon}>
        <img src="https://cdn0.iconfinder.com/data/icons/multimedia-collection-10/478/like-1024.png" width="20px" height= "20px" alt="like-icon" />
        {props.likesCount}
      </span>
    </div>
  )
}

export default Post
