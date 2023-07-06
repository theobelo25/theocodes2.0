import classes from "./tag.module.scss";

const Tag: React.FC<{ tag: string }> = ({ tag }) => {
  return <div className={classes.tag}>{tag}</div>;
};

export default Tag;
