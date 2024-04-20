import React, { useState, useEffect } from 'react';
import './Boosts.css';
import { useTelegram } from "../../hooks/useTelegram";
import { boostInfo, boostUpdate } from "../../hooks/api";

const Boost = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [operationType, setOperationType] = useState('');
    const [operationPrice, setOperationPrice] = useState(0);
    const { tg } = useTelegram();

    const [userBoost, setUserBoost] = useState([]);
    const [userStaminaLimit, setUserStaminaLimit] = useState([]);
    const [tapPrices, setTapPrices] = useState([]);
    const [energyPrices, setEnergyPrices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tgId = tg?.initDataUnsafe?.user?.id || 544362566;
                const boostPrices = await boostInfo({ tgId: tgId });
                const staminaPrices = boostPrices.data.staminaPrice;
                const tapPricesData = boostPrices.data.tapPrice;

                setUserBoost(boostPrices.data.userBoost);
                setUserStaminaLimit(boostPrices.data.userStaminaLimit);

                setTapPrices(tapPricesData);
                setEnergyPrices(staminaPrices);

            } catch (e) {
                console.error('Error fetching user data:', e);
            }
        };

        fetchData();
    }, [tg]);

    const handleMultitapClick = () => {
        setOperationType('multitap');
        setOperationPrice(getNextPrice(userBoost, tapPrices));
        setModalContent('+1 coin for tap ?');
    };

    const handleEnergyLimitClick = () => {
        setOperationType('energyLimit');
        setOperationPrice(getNextPrice(userStaminaLimit, energyPrices));
        setModalContent('Upgrade energy limit ?');
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setOperationType('');
        setOperationPrice(0);
    };

    const handleConfirm = async () => {
        try {
            const tgId = tg?.initDataUnsafe?.user?.id || 544362566;
            if (operationType === 'multitap') {
                window.location.reload();
                await boostUpdate({ tgId: tgId, boost: userBoost + 1 });
            } else if (operationType === 'energyLimit') {
                window.location.reload();
                await boostUpdate({ tgId: tgId, staminaLimit: userStaminaLimit + 1000 });
            }
        } catch (error) {
            console.error('Error confirming boost:', error);
        }
    };

    const getNextPrice = (currentLimit, prices) => {
        const priceKeys = Object.keys(prices);
        const currentIndex = priceKeys.indexOf(currentLimit.toString());
        const nextKey = priceKeys[currentIndex + 1];
        return prices[nextKey];
    };

    return (
        <div>
            <div className={'boost'}>
                <h3 className={'boost-title'}>Boosters</h3>
                <button onClick={() => {
                    openModal();
                    handleMultitapClick();
                }} className={`boost__block-wrapper boost__energy-wrapper ${userBoost >= 10 ? 'disabled' : ''}`}>

                    <img className={'boost-icon'} src={'./media/hand-pointer-regular.svg'} alt={'cursor pointer'} />
                    <div className={'boost__block-text boost__tap-text'}>
                        <h4 className={'boost__block-h boost__tap-h'}>Multi tap</h4>
                        <p className={'boost-block-upgrade'}>Upgrade to <span>{userBoost + 1}x</span></p>
                        <p className={'boost__block-p boost__tap-p'}>Price: {getNextPrice(userBoost, tapPrices)}</p>
                    </div>
                </button>
                <button onClick={() => {
                    openModal();
                    handleEnergyLimitClick();
                }} className={`boost__block-wrapper boost__energy-wrapper ${userStaminaLimit >= 10000 ? 'disabled' : ''}`}>

                    <img className={'boost-icon'} src={'./media/lightning.svg'} alt={'cursor pointer'} />
                    <div className={'boost__block-text boost__energy-text'}>
                        <h4 className={'boost__block-h boost__energy-h'}>Energy limit</h4>
                        <p className={'boost-block-upgrade'}>Upgrade to <span>{userStaminaLimit + 1000}</span></p>
                        <p className={'boost__block-p boost__energy-p'}>Price: {getNextPrice(userStaminaLimit, energyPrices)}</p>
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
                                <span>{operationPrice}</span><img className={'popup-coin'} src={'./media/coins-solid.svg'} alt={'coin'} />
                            </div>
                            {/*<button onClick={handleConfirm} className={'modal-btn'}>Confirm</button>*/}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Boost;
