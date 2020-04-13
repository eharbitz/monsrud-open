import React from 'react';
import styles from './Posts.module.css';

const Post = props => {
  return (
    <a className={styles.Post} href={props.link}>
      <img alt={props.title} className={styles.PostImage} src={props.image} />
      <div className={styles.PostTitle}>{props.title}</div>
      <div className={styles.PostTexter}>{props.text}</div>
    </a>
  );
};

const PostRow = ({ postItems }) => {
  return (
    <div className={styles.PostContainer}>
      <div className={styles.PostsRow}>
        {postItems.map((value, index) => (
          <Post
            key={index}
            image={value.image}
            title={value.title}
            text={value.text}
            link={value.link}
          ></Post>
        ))}
      </div>
    </div>
  );
};

export default PostRow;
