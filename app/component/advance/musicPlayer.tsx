import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Slider,
  Typography,
  Popper,
  Fade,
  Paper,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const volumeButtonRef = useRef<HTMLButtonElement>(null); // Ref para el botón de volumen
  const popperRef = useRef<HTMLDivElement>(null); // Ref para el Popper

  // Reproduce la música automáticamente al cargar la página
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });

      audioRef.current.volume = volume / 100;
      audioRef.current.ontimeupdate = () => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
        }
      };
      audioRef.current.onloadedmetadata = () => {
        if (audioRef.current) {
          setDuration(audioRef.current.duration);
        }
      };
    }

    // Detectar clic fuera del Popper para cerrarlo
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popperRef.current &&
        !popperRef.current.contains(event.target as Node) &&
        volumeButtonRef.current &&
        !volumeButtonRef.current.contains(event.target as Node)
      ) {
        setShowVolumeSlider(false);
      }
    };

    // Añadir el evento de click global
    document.addEventListener("click", handleClickOutside);

    // Limpiar el evento al desmontar el componente
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Maneja la reproducción y pausa
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Maneja el volumen
  const handleVolumeChange = (event: Event, newValue: number | number[]) => {
    const newVolume = Array.isArray(newValue) ? newValue[0] : newValue;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  // Control de la canción
  const handleSeekChange = (event: Event, newValue: number | number[]) => {
    const newTime = Array.isArray(newValue) ? newValue[0] : newValue;
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  // Formato de tiempo (minutos:segundos)
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  // Mostrar el slider de volumen
  const handleVolumeClick = () => {
    setShowVolumeSlider(!showVolumeSlider);
  };

  // Efecto para sincronizar el slider con el tiempo de la canción
  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    }, 1000); // Actualiza el tiempo cada segundo

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        justifyContent: "center",
        width: "100%",
        mt: { xs: 2, md: 8 },
        mb: { xs: 8, md: 12 },
      }}
    >
      {/* Reproductor de audio */}
      <audio ref={audioRef} src="/music/music2.mp3" autoPlay loop />

      {/* Botón Play/Pause */}
      <IconButton onClick={handlePlayPause}>
        {isPlaying ? (
          <PauseIcon sx={{ color: "black", fontSize: "40px" }} />
        ) : (
          <PlayArrowIcon sx={{ color: "black",fontSize: "40px" }} />
        )}
      </IconButton>

      {/* Minutos transcurridos */}
      <Typography sx={{ color: "black" }}>
        {formatTime(currentTime)} / {formatTime(duration)}
      </Typography>

      {/* Slider de progreso de la canción */}
      <Slider
        value={currentTime}
        min={0}
        max={duration}
        onChange={handleSeekChange}
        sx={{
          width: {xs:120, md:200},
          "& .MuiSlider-rail": {
            backgroundColor: "#444", // Color de la raíl (fondo)
          },
          "& .MuiSlider-track": {
            backgroundColor: "#000", // Color de la pista (barra activa)
          },
          "& .MuiSlider-thumb": {
            backgroundColor: "#000", // Color del pulgar (el control deslizante)
          },
        }}
      />

      {/* Volumen */}
      <IconButton onClick={handleVolumeClick} ref={volumeButtonRef}>
        <VolumeUpIcon sx={{ color: "black", fontSize: "40px" }} />
      </IconButton>

      {/* Popper flotante con el slider de volumen */}
      <Popper
        open={showVolumeSlider}
        anchorEl={volumeButtonRef.current}
        placement="top"
        transition
        sx={{
          zIndex: 1300, // Aseguramos que el Popper esté encima de otros elementos
        }}
        ref={popperRef}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ padding: 1, backgroundColor: "white", boxShadow: 3 }}>
              <Slider
                value={volume}
                onChange={handleVolumeChange}
                aria-labelledby="volume-slider"
                sx={{
                  width: 120,
                  "& .MuiSlider-rail": {
                    backgroundColor: "#444",
                  },
                  "& .MuiSlider-track": {
                    backgroundColor: "#000",
                  },
                  "& .MuiSlider-thumb": {
                    backgroundColor: "#000",
                  },
                }}
              />
            </Paper>
          </Fade>
        )}
      </Popper>
    </Box>
  );
};

export default MusicPlayer;
