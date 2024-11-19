import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import PaypalButton from "../buttons/paypal";

const GiftCard: React.FC = () => {
    const [showBankInfo, setShowBankInfo] = useState(false);

    const bankInfo = {
        banco: "Interbank",
        cuenta: "8983316349830",
        cci: "00389801331634983045",
    };

    return (
        <Box
            pt={6}
            pb={6}
            width={{ xs: 350, sm: 450 }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
                maxWidth: "550px",
            }}
        >
            <Box
                component="img"
                src="/images/gift.png"
                alt="Regalo Icon"
                pb={4}
                sx={{
                    width: { xs: "30%", md: "30%" },
                    height: "auto",
                }}
            />

            <Typography
                textAlign="center"
                pb={2}
                sx={{
                    fontFamily: "var(--font-allura)",
                    fontSize: "3.5rem",
                    color: "var(--foreground)",
                }}
            >
                Regalos
            </Typography>

            <Typography
                textAlign="center"
                mb={4}
                sx={{
                    fontFamily: "var(--font-opensans)",
                    fontSize: "1rem",
                    color: "var(--foreground)",
                    // maxWidth: "80%",
                    lineHeight: 1.6,
                }}
            >
                Lo más importante es tu presencia, pero si deseas hacernos un regalo aquí
                tienes nuestros datos
            </Typography>          

            <Button
                variant="outlined"
                sx={{
                    color: "var(--color-1)",
                    borderColor: "var(--color-1)",
                    fontFamily: "var(--font-opensans)",
                    borderRadius: "50px",
                    padding: "8px 16px",
                    "&:hover": {
                        backgroundColor: "var(--color-4)",
                        borderColor: "var(--color-2)",
                    },
                }}
                onClick={() => setShowBankInfo(!showBankInfo)}
            >
                Regalanos un detalle
            </Button>

            {showBankInfo && (
                <Box
                    mt={4}
                    p={4}
                    sx={{
                        backgroundColor: "#F5F5F5",
                        borderRadius: "8px",
                        width: "100%",
                        maxWidth: "400px",
                    }}
                >
                    <Typography
                        textAlign="center"
                        mb={2}
                        sx={{
                            fontFamily: "var(--font-opensans)",
                            fontSize: "1.1rem",
                            color: "var(--foreground)",
                            fontWeight: "bold",
                        }}
                    >
                        Banco: {bankInfo.banco}
                    </Typography>
                    <Typography
                        textAlign="center"
                        mb={2}
                        sx={{
                            fontFamily: "var(--font-opensans)",
                            fontSize: "1rem",
                            color: "var(--foreground)",
                        }}
                    >
                        N° de Cuenta: {bankInfo.cuenta}
                    </Typography>
                    <Typography
                        mb={4}
                        textAlign="center"
                        sx={{
                            fontFamily: "var(--font-opensans)",
                            fontSize: "1rem",
                            color: "var(--foreground)",
                        }}
                    >
                        CCI: {bankInfo.cci}
                    </Typography>

                    <PaypalButton />
                </Box>
            )}
        </Box>
    );
};

export default GiftCard;