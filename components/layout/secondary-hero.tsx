import classes from "./secondary-hero.module.scss";

const SecondaryHero: React.FC<{ title: String; description: String }> = ({
  title,
  description,
}) => {
  return (
    <section className={classes.secondaryHero}>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
};

export default SecondaryHero;
