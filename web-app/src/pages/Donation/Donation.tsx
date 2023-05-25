import { useState } from 'react';

const Donation = () => {
  const [total, setTotal] = useState<number>(0);
  const [selectedAmount, setSelectedAmount] = useState<string>('');
  const [contributions, setContributions] = useState<string[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleButtonClick = (amountToAdd: number) => {
    setSelectedAmount(amountToAdd.toString());
  };

  const handleConfirmClick = () => {
    const amountToAdd = parseInt(selectedAmount);
    if (!isNaN(amountToAdd)) {
      setTotal(total + amountToAdd);
      setSelectedAmount('');
      setContributions([...contributions, amountToAdd.toString()]);
    }
  };

  const lastContributors = contributions
    .slice(-4)
    .map((contribution, index) => <p key={index}>{contribution}€</p>);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <div>
        <h1>Donation</h1>
        <p>Soutenez Wild Carbon !</p>
      </div>
      <div>
        <h3>Total de la cagnotte en cours : </h3>
        <p>{total}€</p>
      </div>
      <div></div>
      <div>
        <h2>Je participe à hauteur de :</h2>
        <input
          type="text"
          placeholder="142758"
          value={selectedAmount}
          onChange={(e) => setSelectedAmount(e.target.value)}
        />
        <span>€</span>
      </div>
      <div>
        <button type="submit" onClick={() => handleButtonClick(5)}>
          5€
        </button>
        <button type="submit" onClick={() => handleButtonClick(10)}>
          10€
        </button>
        <button type="submit" onClick={() => handleButtonClick(20)}>
          20€
        </button>
      </div>
      <div>
        <button type="submit" onClick={handleConfirmClick}>
          Confirmer
        </button>
      </div>
      <div>
        <h4>Derniers contributeurs :</h4>
        {lastContributors}
        <button type="button" onClick={openModal}>
          Voir l'historique complet
        </button>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h4>Historique des contributions :</h4>
            {contributions.map((contribution, index) => (
              <p key={index}>{contribution}€</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
