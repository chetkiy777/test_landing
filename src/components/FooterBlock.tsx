import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { useTranslation } from "../i18n/useTranslation";
import Men from "../assets/images/men.png";
import EighteenLogo from "../assets/images/18+.png";
import LicenseLogo from "../assets/images/license.png";
import InstagramIcon from '../assets/images/instagram.png';
import TelegramIcon from '../assets/images/tg.png';
import XIcon from '../assets/images/x.png';
import MailIcon from '../assets/images/mail.png';
import BlockLogo from '../assets/images/block_logo.png';
import Arrow from '../assets/images/arrow.png';
import {GeoSwitcher} from "./GeoSwitcher";
import {getButtonBackground, getWrapperBackground} from "../utils/getBackground";

interface Props {
    geo: string;
}

const Wrapper = styled(Box)<{ geo: string }>`
  padding: 63px 32px;
  background: ${({ geo }) => getWrapperBackground(geo)};
    background-size: cover;
  display: flex;
    flex: 1;
    width: 100%;
  justify-content: space-between;
  gap: 44px;
    
    & img {
        max-height: 288px;
    }
    
    @media (max-width: 1200px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`;

const FooterText = styled(Typography)`
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
`

const ToggleFooterImage = styled.div`
    @media (max-width: 1200px) {
        display: none;
    }
`

const ToggleFooterBlock = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    
    @media (max-width: 1200px) {
        max-width: 300px;
        text-align: center;
        flex-direction: column;
    }
`


const RightSide = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 108px;
    align-items: flex-end;
    order: 2;
    max-width: 30%;
    
    @media (max-width: 1200px) {
        align-items: center;
        gap: 60px;
        order: 1;
    }
    
`

const SocialBlock = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    
    @media (max-width: 1200px) {
        align-items: center;
    }
`

const DownloadBlock = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 24px 60px;
    align-items: center;
    text-align: center;
    border: 1px dashed #FF8D6B;
    border-radius: 16px;
    max-width: 390px;
    //min-width: 350px;
    
    & h3 {
        font-size: 24px;
        font-weight: bold;
        color: #fff;
        margin-bottom: 0;
    }
`

const BlockButton = styled(Box)<{ geo: string }>`
    background: ${({ geo }) => getButtonBackground(geo)};
    padding: 12px 40px;
    display: flex;
    flex: 1;
    gap: 8px; 
    border-radius: 8px;
    cursor: pointer;
    margin-top: 16px;
    
    & img {
        max-width: 16px;    
    }
    
    & p {
        color: #ffffff;
        text-transform: none;
        font-size: 14px;
    }
`

const SocialList = styled.div`
    display: flex;
    gap: 4px;
    
    & img {
        width: 50px;
    }
`

const LinkBlockDesk = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    //min-width: 260px;
    
    order: 1;
    
    @media (max-width: 1200px) {
        display: flex;
        flex-direction: row;
        gap: 100px;
        margin-left: 60px;
        order: 2;
    }
    
    @media (max-width: 480px) {
        flex-direction: column;
        gap: 20px;
        margin-left: 0;
    }
`



export default function FooterBlock({ geo }: Props) {
    const t = useTranslation(geo);

    return (
        <Wrapper geo={geo}>

            <ToggleFooterImage>
                <img src={Men} alt="men"/>
            </ToggleFooterImage>

            <DownloadBlock>
                <img src={BlockLogo} alt="block logo"/>
                <h3>{t.download}</h3>
                <FooterText>{t.playMin}</FooterText>
                <BlockButton geo={geo}>
                    <img src={Arrow} alt="arrow"/>
                    <Typography>{t.installApp}</Typography>
                </BlockButton>
            </DownloadBlock>

            <LinkBlockDesk>

                <ToggleFooterBlock>
                    <img src={EighteenLogo} alt="18+"/>
                    <FooterText>{t.only18}</FooterText>
                </ToggleFooterBlock>

                <ToggleFooterBlock>
                    <img src={LicenseLogo} alt="license"/>
                    <FooterText>{t.liceseText}</FooterText>
                </ToggleFooterBlock>

            </LinkBlockDesk>


            <RightSide>
                <GeoSwitcher />

                <SocialBlock>
                    <FooterText>{t.useSocial}</FooterText>
                    <SocialList>
                        <img src={InstagramIcon} alt="insta"/>
                        <img src={TelegramIcon} alt="telegram"/>
                        <img src={XIcon} alt="x"/>
                        <img src={MailIcon} alt="mail"/>
                    </SocialList>
                </SocialBlock>
            </RightSide>
        </Wrapper>
    );
}
