import React from "react";
import { Button, Dialog, DialogContent, Divider, Typography } from "@mui/material";
import html2canvas from "html2canvas";
import { toast } from "sonner";

interface ReceptionModalProps {
    open: boolean;
    onClose: () => void;
    numInvitados: number;
}

export const ReceptionModal: React.FC<ReceptionModalProps> = ({
    open,
    onClose,
    numInvitados,
}) => {
    const saveAsImage = async () => {
        const element = document.getElementById("reception-content");
        if (!element) return;

        try {
            // Espera a que las fuentes se hayan cargado
            await document.fonts.ready;

            // Una vez las fuentes estén listas, procedemos a crear la imagen
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

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogContent>
                <div id="reception-content" className="p-6 bg-white rounded-lg ">
                    <img
                        src="/images/reception.png"
                        alt="Capilla"
                        className="w-48 mx-auto"
                    />

                    <div className="text-center space-y-8">
                        {/* Titulo con fuente Allura */}
                        <Typography
                            variant="h2"
                            sx={{
                                fontFamily: "var(--font-allura)",
                                fontSize: "3.5rem",
                                color: "var(--foreground)",
                                // fontStyle: "italic",
                            }}
                        >
                            Recepción
                        </Typography>

                        {/* Descripción con fuente Open Sans */}
                        <Typography
                            sx={{
                                fontFamily: "var(--font-opensans)",
                                fontSize: "0.8rem",
                                color: "var(--foreground)", // Gris suave
                            }}
                        >
                            LUEGO DE LA CEREMONIA NOS ENCANTARÍA CELEBRAR JUNTO A TI EN:
                        </Typography>

                        <div className="space-y-2 pt-2 pb-2">
                            <Divider />
                            <Typography
                                sx={{
                                    fontFamily: "var(--font-roboto)",
                                    fontSize: "0.9rem",
                                    color: "var(--foreground)",
                                }}
                            >
                                LA ESTANCIA "LA ENCALADA"
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "var(--font-roboto)",
                                    fontSize: "0.9rem",
                                    color: "var(--foreground)",
                                }}
                            >
                                AV. FÁTIMA 422 LA ENCALADA
                                <br />
                                TRUJILLO - LA LIBERTAD
                            </Typography>
                            <Divider />
                        </div>

                        <div className="space-y-2">
                            <Typography
                                sx={{
                                    fontFamily: "var(--font-roboto)",
                                    fontSize: "0.8rem",
                                    color: "var(--foreground)",
                                }}
                            >
                                PASE PARA ({numInvitados}) PERSONA{numInvitados > 1 ? "S" : ""}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "var(--font-roboto)",
                                    fontSize: "0.8rem",
                                    color: "var(--foreground)",
                                    // fontStyle: "italic",
                                }}
                            >
                                DRESS CODE: ELEGANTE
                                <br />
                                SOLO ADULTOS
                            </Typography>
                        </div>
                    </div>
                </div>

                <Button
                    onClick={saveAsImage}
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: 0,
                        backgroundColor: "#1a1a1a",
                        "&:hover": {
                            backgroundColor: "#333",
                        },
                    }}
                >
                    Guardar como imagen
                </Button>
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

