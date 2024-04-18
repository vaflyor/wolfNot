import React, { useState } from 'react';
import './Boosts.css';

const Boost = () => {
    const [modalContent, setModalContent] = useState('');

    const handleMultitapClick = () => {
        setModalContent('+1 coin for tap');
    };

    const handleEnergyLimitClick = () => {
        setModalContent('Upgrade energy limit');
    };

    return (
        <div>
            <div className={'boost'}>
                <h3 className={'boost-title'}>Boosters</h3>
                <a href={'#open-modal'} className={'boost__block-wrapper boost__tap-wrapper'} onClick={handleMultitapClick}>
                    <img className={'boost-icon'} src={'./media/hand-pointer-regular.svg'} alt={'cursor pointer'}/>
                    <div className={'boost__block-text boost__tap-text'}>
                        <h4 className={'boost__block-h boost__tap-h'}>Multitap</h4>
                        <p className={'boost__block-p boost__tap-p'}>Price<span>x1</span></p>
                    </div>
                </a>
                <a href={'#open-modal'} className={'boost__block-wrapper boost__energy-wrapper'} onClick={handleEnergyLimitClick}>
                    <img className={'boost-icon'} src={'./media/lightning.svg'} alt={'cursor pointer'}/>
                    <div className={'boost__block-text boost__energy-text'}>
                        <h4 className={'boost__block-h boost__energy-h'}>Energy limit</h4>
                        <p className={'boost__block-p boost__energy-p'}>Price<span>x1</span></p>
                    </div>
                </a>
            </div>
            <div id="open-modal" className="modal-window">
                <div>
                    <a href="#" title="Close" className="modal-close">Close</a>
                    <h2 className={'modal-h'}>Are you sure ?</h2>
                    <div>{modalContent}</div>
                    <a href="#" className={'modal-btn'}>Confirm</a>
                </div>
            </div>
        </div>
    );
};

export default Boost;
