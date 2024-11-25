import styles from './Footer.module.css';
import Ads from './ads/Ads';
import LogoSocialMedia from './logo-social/LogoSocialMedia';
import Services from './services/Services';
import UsefulLinks from './useful-links/UsefulLinks';

const Footer = async () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Ads className={styles.ads} /> {/* Added className "ads" */}
        <Services />
        <UsefulLinks />
        <LogoSocialMedia className={styles.logoSocialMedia}/> {/* Added className "logoSocialMedia" */}
      </div>
    </footer>
  );
};

export default Footer;