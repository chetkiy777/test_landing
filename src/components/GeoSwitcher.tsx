import { useState } from "react";
import { Menu, MenuItem, Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const geoOptions = [
    {
        value: "ru",
        label: "Russian",
        flag: "🇷🇺",
    },
    {
        value: "en",
        label: "English",
        flag: "🇬🇧",
    },
    {
        value: "tr",
        label: "Turkish",
        flag: "🇹🇷",
    },
];

const Wrapper = styled(Box)`
  z-index: 1000;
`;

const DropdownButton = styled(Box)`
  width: 289px;
  height: 56px;
  border-radius: 8px;
  padding: 12px 16px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;
    
  background: rgba(255, 255, 255, 0.05);

  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);

  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.35);
  }
`;

const LeftSide = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const GeoSwitcher = () => {
    const { geo = "ru" } = useParams();
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const currentGeo =
        geoOptions.find((g) => g.value === geo) || geoOptions[0];

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (value: string) => {
        navigate(`/${value}`);
        handleClose();
    };

    return (
        <Wrapper>
            <DropdownButton onClick={handleOpen}>
                <LeftSide>
                    <Typography fontSize="28px">
                        {currentGeo.flag}
                    </Typography>

                    <Typography color="#fff" fontSize="20px">
                        {currentGeo.label}
                    </Typography>
                </LeftSide>

                <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
            </DropdownButton>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        mt: 1,
                        borderRadius: "14px",
                        background:
                            "linear-gradient(135deg, #1b2b4a, #14203a)",
                        color: "#fff",
                        minWidth: 260,
                    },
                }}
            >
                {geoOptions.map((option) => (
                    <MenuItem
                        key={option.value}
                        onClick={() => handleSelect(option.value)}
                        sx={{
                            display: "flex",
                            gap: 2,
                            py: 1.5,
                        }}
                    >
                        <Typography fontSize="24px">
                            {option.flag}
                        </Typography>
                        <Typography>{option.label}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Wrapper>
    );
}
