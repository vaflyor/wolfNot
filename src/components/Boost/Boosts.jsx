import React from 'react';
import './Boosts.css'

const Boost = () => {
    return (
        <div className={'boost'}>
            <h3 className={'boost-title'}>Boosters</h3>
            <div className={'boost__block-wrapper boost__tap-wrapper'}>
                <img className={'boost-icon'} src={'./media/hand-pointer-regular.svg'} alt={'cursor pointer'}/>
                <div className={'boost__block-text boost__tap-text'}>
                    <h4 className={'boost__block-h boost__tap-h'}>Multitap</h4>
                    <p className={'boost__block-p boost__tap-p'}>Price<span>x1</span></p>
                </div>
            </div>
            <div className={'boost__block-wrapper boost__energy-wrapper'}>
                <img className={'boost-icon'} src={'./media/bolt-solid.svg'} alt={'cursor pointer'}/>
                <div className={'boost__block-text boost__energy-text'}>
                    <h4 className={'boost__block-h boost__energy-h'}>Energy limit</h4>
                    <p className={'boost__block-p boost__energy-p'}>Price<span>x1</span></p>
                </div>
            </div>
        </div>
    );
};

export default Boost;