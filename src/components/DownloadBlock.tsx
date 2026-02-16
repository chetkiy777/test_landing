import { Box, Button, Typography, Stack } from "@mui/material";
import styled from "styled-components";
import { useTranslation } from "../i18n/useTranslation";

interface Props {
    geo: string;
}

const Wrapper = styled(Box)`
  padding: 80px 20px;
  background: #0b1a2b;
  display: flex;
  justify-content: center;
`;

const Content = styled(Box)`
  max-width: 1200px;
  width: 100%;
  text-align: center;
`;

export default function DownloadBlock({ geo }: Props) {
    const t = useTranslation(geo);

    return (
        <Wrapper>
            <Content>
                <Typography
                    sx={{
                        mb: 4,
                        fontSize: {
                            xs: "22px",
                            sm: "28px",
                            md: "36px",
                            lg: "42px",
                        },
                    }}
                >
                    {t.download}
                </Typography>

                {/* Кнопки */}
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={3}
                    justifyContent="center"
                    sx={{ mb: 6 }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        disabled
                        sx={{ minWidth: 200 }}
                    >
                        {t.installApp}
                    </Button>

                    <Button
                        variant="outlined"
                        size="large"
                        disabled
                        sx={{ minWidth: 200 }}
                    >
                        {t.download}
                    </Button>
                </Stack>

                {/* Соцсети (пустые ссылки) */}
                <Stack
                    direction="row"
                    spacing={3}
                    justifyContent="center"
                >
                    <Button onClick={(e) => e.preventDefault()}>
                        Instagram
                    </Button>

                    <Button onClick={(e) => e.preventDefault()}>
                        Facebook
                    </Button>

                    <Button onClick={(e) => e.preventDefault()}>
                        Telegram
                    </Button>
                </Stack>
            </Content>
        </Wrapper>
    );
}
