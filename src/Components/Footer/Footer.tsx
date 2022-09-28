import React from 'react';
import './Footer.css';
import { meetUs, help, ordersAndDelivery, icons } from '../../Utils/Footer.utils';
// import { ItemMapFooter } from './ItemMapFooter/ItemMapFooter';
import { Subscribe } from './subscribe/Subscribe';
import { Icon } from './Icon/Icon';
import movecoLogo from '../../Assets/pulso.jpg';
import konstantin from '../../Assets/konstantin.jpg';

interface FooterProps {
    values: object;
}

export const Footer: React.FC<FooterProps> = ({ values }) => {
    return (
        <>
            <footer className='main-footer'>
                <div className='footer-information'>
                    <div className='footer-column'>
                        <h3>Nuestras redes</h3>
                        <div className="flex-inline">
                            {icons.map(icon => {
                                return (
                                    <Icon image={icon.image} route={icon.route} key={icon.id} />
                                )
                            })}
                        </div>
                        <img className="flex-inline-img" src={movecoLogo} />
                    </div>
                    {/* <div className='footer-column'>
                        <h3>Conocenos</h3>
                        <ItemMapFooter array={meetUs} />
                    </div> */}
                    <div className='footer-column'>
                        <h3>Desarrollado por Konstantin</h3>
                        <a href="http://www.konstantin.com" className="link-konstantin" >
                            <img src={konstantin} alt="konstantin" className="konstantin-img"/>
                        </a>
                    </div>
                </div>


            </footer>
        </>
    );
};

