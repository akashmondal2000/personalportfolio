import styles from "./header.module.css";

const CustomHeader = () => {
  return (
    <section className={styles.headerMainSection}>
      {/* image section  */}
      <section className={styles.imageSectionWrapper}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.imageLogo}
            src="https://cdn.pixabay.com/photo/2023/03/23/07/56/car-7871392_1280.jpg"
            alt="logo"
          />
        </div>
      </section>
      {/* menu  */}
      <section className={styles.manuSectionContainer}>
      <div className={styles.menuWrapper}>
      <p>Home</p>
      <p>About</p>
      <p>Skills</p>
      <p>Contact</p>
      </div>
      </section>
      
    </section>
  );
};

export default CustomHeader;
