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
            pb={2}
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
                pb={8}
                sx={{
                    width: { xs: "30%", md: "30%" },
                    height: "auto",
                }}
            />

            <Typography
                textAlign="center"
                className="font-bold text-gray-600"
                pb={4}
                sx={{
                    fontFamily: "var(--font-roboto)",
                    fontSize: "2.3rem",
                    color: "var(--color-6)",
                }}
            >
                Regalos
            </Typography>

            <Typography
                textAlign="center"
                mb={4}
                sx={{
                    fontFamily: "var(--font-opensans)",
                    fontSize: "1.1rem",
                    color: "var(--color-2)",
                    maxWidth: "80%",
                    lineHeight: 1.6,
                }}
            >
                Lo más importante es tu presencia, pero si deseas hacernos un regalo aquí
                tienes nuestros datos
            </Typography>

            {/* <Button
                onClick={() => setShowBankInfo(!showBankInfo)}
                className="bg-[#B4A19A] hover:bg-[#A69389] text-white font-medium py-3 px-8 rounded transition-colors duration-300"
            >
                Regalanos un detalle
            </Button> */}

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
                            color: "var(--color-2)",
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
                            fontSize: "1.1rem",
                            color: "var(--color-2)",
                        }}
                    >
                        N° de Cuenta: {bankInfo.cuenta}
                    </Typography>
                    <Typography
                        mb={4}
                        textAlign="center"
                        sx={{
                            fontFamily: "var(--font-opensans)",
                            fontSize: "1.1rem",
                            color: "var(--color-2)",
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