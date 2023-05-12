import React from "react";
import Box from "@mui/material/Box";

interface LogoSlideProps {
    imgs: string[];
    duration?: number;
    imgSize?: number;
    padding?: number;
    repeatCount?: number;
    reverse?: boolean;
    imgStyle?: React.CSSProperties;
}

const LogoSlide: React.FC<LogoSlideProps> = ({
    imgs = [],
    duration = 50,
    imgSize = 120,
    padding = 10,
    repeatCount = 2,
    reverse = false,
    imgStyle = {},
}) => {
    return (
        <Box
            sx={{
                "@keyframes scroll": {
                    "0%": {
                        transform: reverse
                            ? `translateX(-${
                                  (imgSize + padding * 2) * imgs.length
                              }px)`
                            : "translateX(0)",
                    },
                    "100%": {
                        transform: reverse
                            ? "translateX(0)"
                            : `translateX(-${
                                  (imgSize + padding * 2) * imgs.length
                              }px)`,
                    },
                },
                background: "white",
                m: "auto",
                overflow: "hidden",
                position: "relative",
                width: "100%",
                "::before": {
                    background:
                        "linear-gradient(to right,white 0%,rgba(255, 255, 255, 0) 100%)",
                    content: '""',
                    height: "100%",
                    position: "absolute",
                    width: "50px",
                    zIndex: 2,
                    left: 0,
                    top: 0,
                },
                "::after": {
                    background:
                        "linear-gradient(to right,white 0%,rgba(255, 255, 255, 0) 100%)",
                    content: '""',
                    height: "100%",
                    position: "absolute",
                    width: "50px",
                    zIndex: 2,
                    right: 0,
                    top: 0,
                    transform: "rotateZ(180deg)",
                },
            }}
        >
            <Box
                sx={{
                    animation: `scroll ${duration}s linear infinite`,
                    display: "flex",
                    width: `${
                        (imgSize + padding * 2) * imgs.length * repeatCount
                    }px`,
                }}
            >
                {Array(repeatCount)
                    .fill(imgs)
                    .flat()
                    .map((imgSrc, idx) => (
                        <Box
                            key={imgSrc + idx.toString()}
                            sx={{
                                height: `${imgSize + padding * 2}px`,
                                width: `${imgSize + padding * 2}px`,
                                p: `${padding}px`,
                            }}
                        >
                            <img
                                src={`${imgSrc}`}
                                width={"100%"}
                                height={"100%"}
                                style={{
                                    objectFit: "cover",
                                    borderRadius: "20px",
                                    ...imgStyle,
                                }}
                            />
                        </Box>
                    ))}
            </Box>
        </Box>
    );
};

export default LogoSlide;
