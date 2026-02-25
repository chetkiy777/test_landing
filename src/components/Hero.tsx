import {Box, Stack, Typography} from "@mui/material";
import styled from "styled-components";
import { useTranslation } from "../i18n/useTranslation";
import { useState } from "react";
import GameModal from "./GameModal";
import {getButtonBackground} from "../utils/getBackground";
import LogoText from "../assets/images/logo_text.png";
import LogoImg from "../assets/images/logo_img.png";
import BgImg from "../assets/images/bg.png";

const Wrapper = styled(Box)`
    
    min-height: 910px;
    background: url(${BgImg}) no-repeat center center;
    background-size: cover;
  display: flex;
    flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MainButton = styled.button<{ geo: string}>`
    border: none;
    border-radius: 8px;
    outline: none;
    background: ${({ geo }) => getButtonBackground(geo)};
    color: #ffffff;
    padding: 18px 112px;
    margin-top: 30px;
    cursor: pointer;
    margin-bottom: 40px;
    text-transform: uppercase;
`

interface Props {
    geo: string;
}


export default function Hero({ geo }: Props) {
    const t = useTranslation(geo);
    const [open, setOpen] = useState(false);

    return (
        <Wrapper>
            <Stack
                direction="column"
                gap={2}
            >
                <img src={LogoText} alt="logo text"/>
                <img src={LogoImg} alt="logo image"/>
            </Stack>


            <MainButton geo={geo} onClick={() => setOpen(true)}>
                <Typography>{t.openGame}</Typography>
            </MainButton>

            <GameModal open={open} onClose={() => setOpen(false)} />
        </Wrapper>
    );
}
