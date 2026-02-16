import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function GameModal({ open, onClose }: Props) {
    return (
        <Dialog fullScreen open={open}>
            <IconButton
                onClick={onClose}
                sx={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    zIndex: 10,
                    color: "#fff",
                }}
            >
                <CloseIcon />
            </IconButton>

            <iframe
                src="https://gateway.eva-digital-playground.com/v0/casino/games/launch?gameId=n2-novomatic-book-of-ra-deluxe&channel=desktop&partnerKey=0wl&lobbyUrl=https://chinchincasino.com&mode=demo&language=en"
                title="Game"
                style={{ width: "100%", height: "100%", border: "none" }}
            />
        </Dialog>
    );
}
