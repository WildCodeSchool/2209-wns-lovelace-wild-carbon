import styles from './Donation.module.css';
import { ConfirmationButton } from '../../components/ButtonStyle/ConfirmationButton.styled';

const Donation = () => {
  return (
    <div>
      <div className={styles.mainContainer}>
        <h1>Donation</h1>
        <p className={styles.firstPara}>Soutenez Wild-Carbon !</p>
      </div>
      <div className={styles.cagnotteParaStyle}>
        <h3 className={styles.secondTitleStyle}>
          Total de la cagnotte en cours :
        </h3>
        <p className={styles.secondPara}>142 758€</p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.participationContainer}>
        <h3 className={styles.thirdTitle}>Je participe à hauteur de :</h3>
        <div className={styles.inputContainer}>
          <input
            type="text"
            className={styles.inputStyle}
            placeholder="40€"
          ></input>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonStyle} type="submit">
          5€
        </button>
        <button className={styles.buttonStyle} type="submit">
          15€
        </button>
        <button className={styles.buttonStyle} type="submit">
          20€
        </button>
      </div>
      <div className={styles.confirmationButton}>
        <ConfirmationButton type="submit">Confirmer</ConfirmationButton>
      </div>
      <div className={styles.contributorContainer}>
        <h4 className={styles.fourthTitleStyle}>Derniers contributeurs</h4>
        <ul>
          <li>Hint Hernet</li>
          <li>Jane Doe</li>
          <li>Dave Lopper</li>
        </ul>
      </div>
    </div>
  );
};

export default Donation;
