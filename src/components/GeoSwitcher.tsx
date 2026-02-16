import { MenuItem, Select, SelectChangeEvent, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const geoOptions = [
    { value: "ru", label: "RU" },
    { value: "en", label: "EN" },
    { value: "de", label: "DE" },
];

export const GeoSwitcher = () => {
    const navigate = useNavigate();
    const { geo = "ru" } = useParams();

    const handleChange = (event: SelectChangeEvent) => {
        const newGeo = event.target.value;
        navigate(`/${newGeo}`);
    };

    return (
        <Box
            sx={{
                position: "fixed",
                top: 20,
                right: 20,
                zIndex: 1000,
                background: "#ffffff10",
                backdropFilter: "blur(5px)",
                borderRadius: "8px",
            }}
        >
            <Select
                value={geo}
                onChange={handleChange}
                size="small"
                sx={{
                    color: "#fff",
                    ".MuiOutlinedInput-notchedOutline": {
                        borderColor: "#fff",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#fff",
                    },
                }}
            >
                {geoOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    );
}
