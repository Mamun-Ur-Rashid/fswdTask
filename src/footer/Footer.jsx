import React from 'react';
import { FooterContainer, SocialIcons, SocialIcon, FooterText } from '../component/styles/FooterStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>© 2023 Your Company. All rights reserved.</FooterText>
            <SocialIcons>
                <SocialIcon href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                </SocialIcon>
                <SocialIcon href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                </SocialIcon>
                <SocialIcon href="#">
                    <FontAwesomeIcon icon={faLinkedin} />
                </SocialIcon>
                <SocialIcon href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                </SocialIcon>
            </SocialIcons>
        </FooterContainer>
    );
};

export default Footer;