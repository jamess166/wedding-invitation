import React from "react";
import { Box, Divider } from "@mui/material";
import CeremonyCard from "../cards/ceremonyCard";
import ReceptionCard from "../cards/receptionCard";
import DressCodeCard from "../cards/dresscodeCard";
import GiftCard from "../cards/giftCard";
import { useSearchParams } from "next/navigation";


const VerticalCardList: React.FC = () => {

    const searchParams = useSearchParams(); // Obtener los parámetros de la URL
    const nameFromUrl = searchParams.get('name') || '';
    const guestsFromUrl = parseInt(searchParams.get('guests') || '1', 10);

    return (
        <Box
            mt={{ xs: 18, sm: 24 }}
            sx={{
                maxWidth: 1800,
                padding: { xs: "0 16px", sm: "0 16px", md: 0 },
                margin: "0 auto",
                display: "flex",
                flexDirection: "column", // Apila en columna
                alignItems: "center", // Centra horizontalmente
                gap: 3, // Espaciado entre los elementos
            }}
        >
            {/* Divider después de la primera card */}
            {/* <Divider sx={{ width: "50%", height: "3px", backgroundColor: "divider" }} /> */}

            {/* Primera Card */}
            {/* <CeremonyCard /> */}

            {/* Mostrar CeremonyCard solo si hay valores válidos */}
            {nameFromUrl && guestsFromUrl > 0 && (
                <>
                    <Divider sx={{ width: "50%", height: "3px", backgroundColor: "divider" }} />
                    <CeremonyCard />
                </>
            )}

            {/* Divider después de la primera card */}
            <Divider sx={{ width: "50%", height: "3px", backgroundColor: "divider" }} />

            {/* Segunda Card */}
            <ReceptionCard />

            {/* Divider después de la segunda card */}
            <Divider sx={{ width: "50%", height: "3px", backgroundColor: "divider" }} />

            {/* Tercera Card */}
            <DressCodeCard />

            {/* Divider después de la tercera card */}
            <Divider sx={{ width: "50%", height: "3px", backgroundColor: "divider" }} />

            {/* Cuarta Card */}
            {/* <GiftCard /> */}

            {/* Divider después de la cuarta card */}
            {/* <Divider sx={{ width: "50%", height: "3px", backgroundColor: "divider" }} /> */}
        </Box>
    );
};

export default VerticalCardList;