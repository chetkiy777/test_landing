import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";
import { useTranslation } from "../i18n/useTranslation";
import { useState } from "react";
import GameModal from "./GameModal";

const Wrapper = styled(Box)`
  min-height: 100vh;
  background: radial-gradient(circle, #001f3f, #000814);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

interface Props {
    geo: string;
}

export default function Hero({ geo }: Props) {
    const t = useTranslation(geo);
    const [open, setOpen] = useState(false);

    return (
        <Wrapper>
            <Typography
                sx={{
                    fontSize: {
                        xs: "28px",
                        sm: "36px",
                        md: "48px",
                        lg: "64px",
                    },
                }}
            >
                Casino Royale
            </Typography>

            <Button
                variant="contained"
                sx={{ mt: 4 }}
                onClick={() => setOpen(true)}
            >
                {t.openGame}
            </Button>

            <GameModal open={open} onClose={() => setOpen(false)} />
        </Wrapper>
    );
}
