import React, {useState} from 'react';
import './Boosts.css';

const Boost = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const handleMultitapClick = () => {
        setModalContent('+1 coin for tap ?');
    };

    const handleEnergyLimitClick = () => {
        setModalContent('Upgrade energy limit ?');
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <div className={'boost'}>
                <h3 className={'boost-title'}>Boosters</h3>
                <button onClick={() => {
                    openModal();
                    handleMultitapClick();
                }} className={'boost__block-wrapper boost__energy-wrapper'}>

                    <img className={'boost-icon'} src={'./media/hand-pointer-regular.svg'} alt={'cursor pointer'}/>
                    <div className={'boost__block-text boost__tap-text'}>
                        <h4 className={'boost__block-h boost__tap-h'}>Multi tap</h4>
                        <p className={'boost__block-p boost__tap-p'}>Price<span>x1</span></p>
                    </div>
                </button>
                <button onClick={() => {
                    openModal();
                    handleEnergyLimitClick();
                }} className={'boost__block-wrapper boost__energy-wrapper'}>

                    <img className={'boost-icon'} src={'./media/lightning.svg'} alt={'cursor pointer'}/>
                    <div className={'boost__block-text boost__energy-text'}>
                        <h4 className={'boost__block-h boost__energy-h'}>Energy limit</h4>
                        <p className={'boost__block-p boost__energy-p'}>Price<span>x1</span></p>
                    </div>
                </button>
            </div>
            {showModal && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <div className={'popup-content-wrapper'}>
                            <h3>{modalContent}</h3>
                            <div>
                                <span>500</span><img className={'popup-coin'} src={'./media/coins-solid.svg'}
                                                     alt={'coin'}/>
                            </div>
                            <a onClick={closeModal} href="#" className={'modal-btn'}>Confirm</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Boost;
