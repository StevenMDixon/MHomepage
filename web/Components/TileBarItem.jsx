import React from "react";
import styles from "./TilebarItem.module.scss"

const TileBarItem = (props) => {

 const {isLink, linkTo, items} = props;

  return (
  <div className={styles.card}>
    <h2 className={styles.card_title}>{props.text}</h2>
    <div className={styles.lower_titles_wrapper}>
    {isLink ? 
    items.map(item=> <a key={item+1} className={styles.lower_titles, styles.lower_titles_link} href={linkTo}>{item}</a>):
    items.map(item=> <p key={item+1} className={styles.lower_titles}>{item}</p>)}
    </div>
    {props.hasOwnProperty('image')? <img className={styles.card_image} src={props.image} alt="woman enjoying time at spa"/>: null}
  </div>)
};

export default TileBarItem;