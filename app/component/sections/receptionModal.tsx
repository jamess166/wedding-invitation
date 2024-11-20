import React, { useState, useEffect } from "react";
import { Button, Dialog, DialogContent, Typography } from "@mui/material";
import html2canvas from "html2canvas";
import { toast } from "sonner";

interface ReceptionModalProps {
    open: boolean;
    onClose: () => void;
    name: string;
    numInvitados: number;
}

export const ReceptionModal: React.FC<ReceptionModalProps> = ({
    open,
    onClose,
    name,
    numInvitados,
}) => {
    const imageSrc = `/download/Recepcion_${String(numInvitados).padStart(2, "0")}.png`;

    const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

    useEffect(() => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => {
            setImageDimensions({ width: img.width, height: img.height });
        };
    }, [imageSrc]);

    const saveAsImage = async () => {
        const element = document.getElementById("reception-content");
        if (!element) return;

        try {
            await document.fonts.ready; // Asegura que las fuentes se carguen antes de capturar
            const canvas = await html2canvas(element);
            const image = canvas.toDataURL("image/png", 1.0);
            const link = document.createElement("a");
            link.download = "reception-details.png";
            link.href = image;
            link.click();

            toast.success("¡Guardado exitoso!", {
                description: "Los detalles de la recepción se han guardado como imagen.",
            });
        } catch (error) {
            toast.error("Error al guardar", {
                description: "No se pudo guardar la imagen. Por favor, intente nuevamente.",
            });
        }
    };

    const calculateImageStyle = () => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        // Calcular el 80% del ancho y la altura de la pantalla
        const maxWidth = screenWidth * 0.8;
        const maxHeight = screenHeight * 0.8;

        // Si el ancho de la imagen supera el 80% del ancho de la pantalla, ajustamos la altura para que no sobrepase el 80% de la pantalla
        if (imageDimensions.width > maxWidth) {
            const width = maxWidth; // Establece el ancho al 80% de la pantalla
            const height = (imageDimensions.height / imageDimensions.width) * width; // Mantiene la proporción
            return { width: `${width}px`, height: `${height}px` };
        }
        // Si la altura de la imagen supera el 80% de la altura de la pantalla, ajustamos el ancho para que no sobrepase el 80% de la pantalla
        else if (imageDimensions.height > maxHeight) {
            const height = maxHeight; // Establece la altura al 80% de la pantalla
            const width = (imageDimensions.width / imageDimensions.height) * height; // Mantiene la proporción
            return { width: `${width}px`, height: `${height}px` };
        }
        // Si la imagen no supera el 80% del ancho ni la altura, la mostramos en su tamaño original, pero sin exceder los límites establecidos
        else {
            return { width: `${imageDimensions.width}px`, height: `${imageDimensions.height}px` };
        }
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxHeight: "90vh",
                    overflow: "auto", // Asegura que el contenido no se recorte en pantallas grandes
                    padding: 0,
                }}
            >
                <div
                    id="reception-content"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "16px",
                        width: "100%",
                        maxHeight: "calc(90vh - 56px)", // Deja espacio para el botón
                        overflow: "hidden",
                    }}
                >
                    <img
                        src={imageSrc}
                        alt={`Recepción ${numInvitados} persona${numInvitados > 1 ? "s" : ""}`}
                        style={{
                            ...calculateImageStyle(),
                            objectFit: "contain", // Ajusta el contenido para que encaje sin recortar ni distorsionar
                        }}
                    />
                    <Typography
                        variant="h2"
                        sx={{
                            fontFamily: "var(--font-allura)",
                            fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
                            color: "var(--foreground)",
                            marginTop: { xs: "-20px", sm: "-30px", md: "-40px" },
                            marginBottom: { xs: "20px", sm: "40px", md: "50px" },
                            textAlign: "center",
                        }}
                    >
                        {name}
                    </Typography>
                </div>

                <div
                    style={{
                        padding: "16px", // Espaciado externo entre el botón y los bordes del modal
                        width: "100%", // Asegura que el botón ocupe el ancho total
                        boxSizing: "border-box", // Evita que el padding afecte el tamaño total
                    }}
                >
                    <Button
                        onClick={saveAsImage}
                        fullWidth
                        variant="contained"
                        sx={{
                            backgroundColor: "#1a1a1a",
                            "&:hover": {
                                backgroundColor: "#333",
                            },
                        }}
                    >
                        Guardar como imagen
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};




// import React from "react";
// import { Button, Dialog, DialogContent, Divider, Typography } from "@mui/material";
// import html2canvas from "html2canvas";
// import { toast } from "sonner";

// interface ReceptionModalProps {
//     open: boolean;
//     onClose: () => void;
//     numInvitados: number;
// }


// export const ReceptionModal: React.FC<ReceptionModalProps> = ({
//     open,
//     onClose,
//     numInvitados,
// }) => {
//     const saveAsImage = async () => {
//         const element = document.getElementById("reception-content");
//         if (!element) return;

//         try {
//             const canvas = await html2canvas(element);
//             const image = canvas.toDataURL("image/png", 1.0);
//             const link = document.createElement("a");
//             link.download = "reception-details.png";
//             link.href = image;
//             link.click();

//             toast.success("¡Guardado exitoso!", {
//                 description: "Los detalles de la recepción se han guardado como imagen.",
//             });
//         } catch (error) {
//             toast.error("Error al guardar", {
//                 description: "No se pudo guardar la imagen. Por favor, intente nuevamente.",
//             });
//         }
//     };

//     return (
//         <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
//             <DialogContent>
//                 <div id="reception-content" className="p-6 bg-white rounded-lg ">
//                     <img
//                         src="/images/reception.png"
//                         alt="Capilla"
//                         className="w-48 mx-auto"
//                     />

//                     <div className="text-center space-y-8">
//                         {/* Titulo con fuente Allura */}
//                         <Typography
//                             variant="h2"
//                             sx={{
//                                 fontFamily: "var(--font-allura)",
//                                 fontSize: "3.5rem",
//                                 color: "var(--foreground)",
//                                 // fontStyle: "italic",
//                             }}
//                         >
//                             Recepción
//                         </Typography>

//                         {/* Descripción con fuente Open Sans */}
//                         <Typography
//                             sx={{
//                                 fontFamily: "var(--font-opensans)",
//                                 fontSize: "0.8rem",
//                                 color: "var(--foreground)", // Gris suave
//                             }}
//                         >
//                             LUEGO DE LA CEREMONIA NOS ENCANTARÍA CELEBRAR JUNTO A TI EN:
//                         </Typography>

//                         <div className="space-y-2 pt-2 pb-2">
//                             <Divider/>
//                             <Typography
//                                 sx={{
//                                     fontFamily: "var(--font-roboto)",
//                                     fontSize: "0.9rem",
//                                     color: "var(--foreground)",
//                                 }}
//                             >
//                                 LA ESTANCIA "LA ENCALADA"
//                             </Typography>
//                             <Typography
//                                 sx={{
//                                     fontFamily: "var(--font-roboto)",
//                                     fontSize: "0.9rem",
//                                     color: "var(--foreground)",
//                                 }}
//                             >
//                                 AV. FÁTIMA 422 LA ENCALADA
//                                 <br />
//                                 TRUJILLO - LA LIBERTAD
//                             </Typography>
//                             <Divider />
//                         </div>

//                         <div className="space-y-2">
//                             <Typography
//                                 sx={{
//                                     fontFamily: "var(--font-roboto)",
//                                     fontSize: "0.8rem",
//                                     color: "var(--foreground)",
//                                 }}
//                             >
//                                 PASE PARA ({numInvitados}) PERSONA{numInvitados > 1 ? "S" : ""}
//                             </Typography>
//                             <Typography
//                                 sx={{
//                                     fontFamily: "var(--font-roboto)",
//                                     fontSize: "0.8rem",
//                                     color: "var(--foreground)",
//                                     //   fontStyle: "italic",
//                                 }}
//                             >
//                                 DRESS CODE: ELEGANTE
//                                 <br />
//                                 SOLO ADULTOS
//                             </Typography>
//                         </div>
//                     </div>
//                 </div>

//                 <Button
//                     onClick={saveAsImage}
//                     fullWidth
//                     variant="contained"
//                     sx={{
//                         mt: 0,
//                         backgroundColor: "#1a1a1a",
//                         "&:hover": {
//                             backgroundColor: "#333",
//                         },
//                     }}
//                 >
//                     Guardar como imagen
//                 </Button>
//             </DialogContent>
//         </Dialog>
//     );
// };

// import React from "react";
// import { Button, Dialog, DialogContent, Divider, Typography } from "@mui/material";
// import { toast } from "sonner";
// import * as domtoimage from 'dom-to-image';

// interface ReceptionModalProps {
//     open: boolean;
//     onClose: () => void;
//     numInvitados: number;
// }

// declare module 'dom-to-image' {
//     export function toPng(node: HTMLElement, options?: any): Promise<string>;
//     export function toJpeg(node: HTMLElement, options?: any): Promise<string>;
//     export function toSvg(node: HTMLElement, options?: any): Promise<string>;
// }

// export const ReceptionModal: React.FC<ReceptionModalProps> = ({
//     open,
//     onClose,
//     numInvitados,
// }) => {
//     const saveAsImage = async () => {
//         const element = document.getElementById("reception-content");
//         if (!element) return;

//         try {
//             // Usando dom-to-image para generar la imagen
//             const dataUrl = await domtoimage.toPng(element); // Renderiza el contenido como PNG
//             const link = document.createElement("a");
//             link.download = "reception-details.png";  // Nombre del archivo de imagen
//             link.href = dataUrl;  // Establecer el dataUrl generado como el enlace para descarga
//             link.click();  // Iniciar la descarga

//             toast.success("¡Guardado exitoso!", {
//                 description: "Los detalles de la recepción se han guardado como imagen.",
//             });
//         } catch (error) {
//             toast.error("Error al guardar", {
//                 description: "No se pudo guardar la imagen. Por favor, intente nuevamente.",
//             });
//         }
//     };

//     return (
//         <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
//             <DialogContent>
//                 <div id="reception-content" className="p-6 bg-white rounded-lg ">
//                     <img
//                         src="/images/reception.png"
//                         alt="Capilla"
//                         className="w-48 mx-auto"
//                     />

//                     <div className="text-center space-y-8">
//                         {/* Titulo con fuente Allura */}
//                         <Typography
//                             variant="h2"
//                             sx={{
//                                 fontFamily: "var(--font-allura)",
//                                 fontSize: "3.5rem",
//                                 color: "var(--foreground)",
//                             }}
//                         >
//                             Recepción
//                         </Typography>

//                         {/* Descripción con fuente Open Sans */}
//                         <Typography
//                             sx={{
//                                 fontFamily: "var(--font-opensans)",
//                                 fontSize: "0.8rem",
//                                 color: "var(--foreground)", // Gris suave
//                             }}
//                         >
//                             LUEGO DE LA CEREMONIA NOS ENCANTARÍA CELEBRAR JUNTO A TI EN:
//                         </Typography>

//                         <div className="space-y-2 pt-2 pb-2">
//                             <Divider />
//                             <Typography
//                                 sx={{
//                                     fontFamily: "var(--font-roboto)",
//                                     fontSize: "0.9rem",
//                                     color: "var(--foreground)",
//                                 }}
//                             >
//                                 LA ESTANCIA "LA ENCALADA"
//                             </Typography>
//                             <Typography
//                                 sx={{
//                                     fontFamily: "var(--font-roboto)",
//                                     fontSize: "0.9rem",
//                                     color: "var(--foreground)",
//                                 }}
//                             >
//                                 AV. FÁTIMA 422 LA ENCALADA
//                                 <br />
//                                 TRUJILLO - LA LIBERTAD
//                             </Typography>
//                             <Divider />
//                         </div>

//                         <div className="space-y-2">
//                             <Typography
//                                 sx={{
//                                     fontFamily: "var(--font-roboto)",
//                                     fontSize: "0.8rem",
//                                     color: "var(--foreground)",
//                                 }}
//                             >
//                                 PASE PARA ({numInvitados}) PERSONA{numInvitados > 1 ? "S" : ""}
//                             </Typography>
//                             <Typography
//                                 sx={{
//                                     fontFamily: "var(--font-roboto)",
//                                     fontSize: "0.8rem",
//                                     color: "var(--foreground)",
//                                 }}
//                             >
//                                 DRESS CODE: ELEGANTE
//                                 <br />
//                                 SOLO ADULTOS
//                             </Typography>
//                         </div>
//                     </div>
//                 </div>

//                 <Button
//                     onClick={saveAsImage}
//                     fullWidth
//                     variant="contained"
//                     sx={{
//                         mt: 0,
//                         backgroundColor: "#1a1a1a",
//                         "&:hover": {
//                             backgroundColor: "#333",
//                         },
//                     }}
//                 >
//                     Guardar como imagen
//                 </Button>
//             </DialogContent>
//         </Dialog>
//     );
// };

// import React from "react";
// import { Button, Dialog, DialogContent, Divider, Typography } from "@mui/material";
// import { toast } from "sonner";
// import * as domtoimage from 'dom-to-image';

// interface ReceptionModalProps {
//     open: boolean;
//     onClose: () => void;
//     numInvitados: number;
// }

// declare module 'dom-to-image' {
//     export function toPng(node: HTMLElement, options?: any): Promise<string>;
//     export function toJpeg(node: HTMLElement, options?: any): Promise<string>;
//     export function toSvg(node: HTMLElement, options?: any): Promise<string>;
// }

// export const ReceptionModal: React.FC<ReceptionModalProps> = ({
//     open,
//     onClose,
//     numInvitados,
// }) => {
//     const saveAsImage = async () => {
//         const element = document.getElementById("reception-content");
//         if (!element) return;

//         try {
//             // Usando dom-to-image para generar la imagen
//             const dataUrl = await domtoimage.toPng(element); // Renderiza el contenido como PNG
//             const link = document.createElement("a");
//             link.download = "reception-details.png";  // Nombre del archivo de imagen
//             link.href = dataUrl;  // Establecer el dataUrl generado como el enlace para descarga
//             link.click();  // Iniciar la descarga

//             toast.success("¡Guardado exitoso!", {
//                 description: "Los detalles de la recepción se han guardado como imagen.",
//             });
//         } catch (error) {
//             toast.error("Error al guardar", {
//                 description: "No se pudo guardar la imagen. Por favor, intente nuevamente.",
//             });
//         }
//     };

//     return (
//         <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
//             <DialogContent>
//                 <div id="reception-content" className="p-6 bg-white rounded-lg ">
//                     <img
//                         src="/images/reception.png"
//                         alt="Capilla"
//                         className="w-48 mx-auto"
//                     />

//                     <div className="text-center space-y-8">
//                         {/* Titulo con fuente Allura */}
//                         <Typography
//                             variant="h2"
//                             sx={{
//                                 fontFamily: "var(--font-allura)",
//                                 fontSize: "3.5rem",
//                                 color: "var(--foreground)",
//                             }}
//                         >
//                             Recepción
//                         </Typography>

//                         {/* Descripción con fuente Open Sans */}
//                         <Typography
//                             sx={{
//                                 fontFamily: "var(--font-opensans)",
//                                 fontSize: "0.8rem",
//                                 color: "var(--foreground)", // Gris suave
//                             }}
//                         >
//                             LUEGO DE LA CEREMONIA NOS ENCANTARÍA CELEBRAR JUNTO A TI EN:
//                         </Typography>

//                         <div className="space-y-2 pt-2 pb-2">
//                             <Divider />
//                             <Typography
//                                 sx={{
//                                     fontFamily: "var(--font-roboto)",
//                                     fontSize: "0.9rem",
//                                     color: "var(--foreground)",
//                                 }}
//                             >
//                                 LA ESTANCIA "LA ENCALADA"
//                             </Typography>
//                             <Typography
//                                 sx={{
//                                     fontFamily: "var(--font-roboto)",
//                                     fontSize: "0.9rem",
//                                     color: "var(--foreground)",
//                                 }}
//                             >
//                                 AV. FÁTIMA 422 LA ENCALADA
//                                 <br />
//                                 TRUJILLO - LA LIBERTAD
//                             </Typography>
//                             <Divider />
//                         </div>

//                         <div className="space-y-2">
//                             <Typography
//                                 sx={{
//                                     fontFamily: "var(--font-roboto)",
//                                     fontSize: "0.8rem",
//                                     color: "var(--foreground)",
//                                 }}
//                             >
//                                 PASE PARA ({numInvitados}) PERSONA{numInvitados > 1 ? "S" : ""}
//                             </Typography>
//                             <Typography
//                                 sx={{
//                                     fontFamily: "var(--font-roboto)",
//                                     fontSize: "0.8rem",
//                                     color: "var(--foreground)",
//                                 }}
//                             >
//                                 DRESS CODE: ELEGANTE
//                                 <br />
//                                 SOLO ADULTOS
//                             </Typography>
//                         </div>
//                     </div>
//                 </div>

//                 <Button
//                     onClick={saveAsImage}
//                     fullWidth
//                     variant="contained"
//                     sx={{
//                         mt: 0,
//                         backgroundColor: "#1a1a1a",
//                         "&:hover": {
//                             backgroundColor: "#333",
//                         },
//                     }}
//                 >
//                     Guardar como imagen
//                 </Button>
//             </DialogContent>
//         </Dialog>
//     );
// };

