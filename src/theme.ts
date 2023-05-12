import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export enum FontWeightValues {
  THIN = 100,
  EXTRA_LIGHT = 200,
  LIGHT = 300,
  REGULAR = 400,
  MEDIUM = 500,
  SEMI_BOLD = 600,
  BOLD = 700,
  EXTRA_BOLD = 800,
  BLACK = 900,
  EXTAR_BLACK = 950,
}


declare module "@mui/material/styles" {
    interface Palette {
        neutral: Palette["primary"];
        c333: Palette["primary"];
        notSelected: Palette["primary"];
        primaryWhite: Palette["primary"];
    }
    interface PaletteOptions {
        neutral: PaletteOptions["primary"];
        c333: PaletteOptions["primary"];
        notSelected: PaletteOptions["primary"];
        primaryWhite: PaletteOptions["primary"];
    }
    interface TypographyVariants {
        f12M: React.CSSProperties;
        f14R: React.CSSProperties;
        f14M: React.CSSProperties;
        f14SB: React.CSSProperties;
        f14B: React.CSSProperties;
        f14EB: React.CSSProperties;
        f16M: React.CSSProperties;
        f16B: React.CSSProperties;
        f18B: React.CSSProperties;
        f20SB: React.CSSProperties;
        f20B: React.CSSProperties;
        f20EB: React.CSSProperties;
        f24B: React.CSSProperties;
        f30M: React.CSSProperties;
        f30B: React.CSSProperties;
        f36SB: React.CSSProperties;
        f36B: React.CSSProperties;
        f36EB: React.CSSProperties;
        f56B: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        f12M?: React.CSSProperties;
        f14R?: React.CSSProperties;
        f14M?: React.CSSProperties;
        f14SB?: React.CSSProperties;
        f14B?: React.CSSProperties;
        f14EB?: React.CSSProperties;
        f16M?: React.CSSProperties;
        f16B?: React.CSSProperties;
        f18B?: React.CSSProperties;
        f20SB?: React.CSSProperties;
        f20B?: React.CSSProperties;
        f20EB?: React.CSSProperties;
        f24B?: React.CSSProperties;
        f30M?: React.CSSProperties;
        f30B?: React.CSSProperties;
        f36SB?: React.CSSProperties;
        f36B?: React.CSSProperties;
        f36EB?: React.CSSProperties;
        f56B?: React.CSSProperties;
    }
}
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        f12M: true;
        f14R: true;
        f14M: true;
        f14SB: true;
        f14B: true;
        f14EB: true;
        f16M: true;
        f16B: true;
        f18B: true;
        f20SB: true;
        f20B: true;
        f20EB: true;
        f24B: true;
        f30M: true;
        f30B: true;
        f36SB: true;
        f36B: true;
        f36EB: true;
        f56B: true;
    }
}
declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        neutral: true;
        c333: true;
        notSelected: true;
        primaryWhite: true;
    }
}
declare module "@mui/material/Icon" {
    interface ButtonPropsColorOverrides {
        neutral: true;
        c333: true;
        notSelected: true;
        primaryWhite: true;
    }
}
declare module "@mui/material/SvgIcon" {
    interface SvgIconPropsColorOverrides {
        neutral: true;
        c333: true;
        notSelected: true;
        primaryWhite: true;
    }
}

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: "#7149C6",
        },
        secondary: {
            main: "#FE6244",
        },
        error: {
            main: red[400],
        },
        neutral: {
            main: "#64748B",
            contrastText: "#fff",
        },
        c333: {
            main: "#333333",
            contrastText: "#f4f4f4",
        },
        text: {
            primary: "#333",
            secondary: "#666",
            disabled: "#BBB",
        },
        primaryWhite: {
            main: "#F9BD38",
            contrastText: "#fff",
        },
        notSelected: {
            main: "#F4F4F4",
            contrastText: "#BBB",
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {},
            },
            defaultProps: {
                inputProps: {
                    sx: {
                        bgcolor: "#fff",
                        borderRadius: 1,
                        py: 1.3,
                        fontSize: 14,
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    textTransform: "none",
                    fontSize: 14,
                    fontWeight: FontWeightValues.SEMI_BOLD,
                    height: 40,
                    minWidth: 0,
                    ":hover": {
                        boxShadow: "none",
                    },
                },
            },
        },

        MuiSelect: {
            defaultProps: {
                inputProps: {
                    sx: { py: 1.2, fontSize: 14 },
                },
                sx: {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#E0E0E0",
                        borderRadius: "5px",
                    },
                },
                MenuProps: {
                    PaperProps: {
                        elevation: 0,
                        sx: {
                            borderRadius: "5px",
                            border: "solid 1px #E0E0E0",
                            borderTop: "none",
                            "& .MuiMenu-list": {
                                p: 0,
                            },
                        },
                    },
                    sx: {
                        "& .MuiMenuItem-root": {
                            minHeight: 40,
                            borderTop: "solid 1px #E0E0E0",
                        },
                    },
                },
            },
        },

        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: FontWeightValues.REGULAR,
                },
            },
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    width: 40,
                    height: 20,
                    padding: 0,
                    "& .MuiSwitch-switchBase": {
                        padding: 0,
                        margin: 2,
                        transitionDuration: "200ms",

                        "&.Mui-checked": {
                            transform: "translateX(20px)",
                            color: "#fff",
                            "& + .MuiSwitch-track": {
                                opacity: 1,
                                border: 0,
                            },
                            "&.Mui-disabled + .MuiSwitch-track": {
                                opacity: 0.5,
                            },
                        },
                        "&.Mui-focusVisible .MuiSwitch-thumb": {
                            border: "6px solid #fff",
                        },
                        "&.Mui-disabled .MuiSwitch-thumb": {
                            color: "#999",
                        },
                        "&.Mui-disabled + .MuiSwitch-track": {
                            opacity: 0.7,
                        },
                    },
                    "& .MuiSwitch-thumb": {
                        boxSizing: "border-box",
                        boxShadow: "none",
                        width: 16,
                        height: 16,
                    },
                    "& .MuiSwitch-track": {
                        borderRadius: 20 / 2,
                        backgroundColor: "#E0E0E0",
                        opacity: 1,
                    },
                },
            },
        },
    },
    typography: {
        fontFamily: "Apple SD Gothic Neo, sans-serif, SweetRomance",

        f12M: {
            fontWeight: FontWeightValues.MEDIUM,
            fontSize: "12px",
            letterSpacing: "-0.04em",
            wordBreak: "keep-all",
            lineHeight: 1.3,
        },
        f14R: {
            fontWeight: FontWeightValues.REGULAR,
            fontSize: "14px",
            letterSpacing: "-0.04em",
            wordBreak: "keep-all",
            lineHeight: 1.3,
        },
        f14M: {
            fontWeight: FontWeightValues.MEDIUM,
            fontSize: "14px",
            letterSpacing: "-0.04em",
            wordBreak: "keep-all",
            lineHeight: 1.3,
        },
        f14SB: {
            fontWeight: FontWeightValues.SEMI_BOLD,
            fontSize: "14px",
            letterSpacing: "-0.03em",
            wordBreak: "keep-all",
            lineHeight: 1.3,
        },
        f14B: {
            fontWeight: FontWeightValues.BOLD,
            fontSize: "14px",
            letterSpacing: "-0.03em",
            wordBreak: "keep-all",
            lineHeight: 1.3,
        },
        f14EB: {
            fontWeight: FontWeightValues.EXTRA_BOLD,
            fontSize: "14px",
            letterSpacing: "-0.03em",
            wordBreak: "keep-all",
            lineHeight: 1.3,
        },
        f16M: {
            fontWeight: FontWeightValues.MEDIUM,
            fontSize: "16px",
            letterSpacing: "-0.04em",
            wordBreak: "keep-all",
            lineHeight: 1.3,
        },
        f16B: {
            fontWeight: FontWeightValues.BOLD,
            fontSize: "16px",
            letterSpacing: "-0.04em",
            wordBreak: "keep-all",
            lineHeight: 1.3,
        },
        f18B: {
            fontWeight: FontWeightValues.BOLD,
            fontSize: "18px",
            letterSpacing: "-0.04em",
            wordBreak: "keep-all",
            lineHeight: 1.3,
        },
        f20SB: {
            fontWeight: FontWeightValues.SEMI_BOLD,
            fontSize: "20px",
            letterSpacing: "-0.04em",
            wordBreak: "keep-all",
            lineHeight: 1.3,
        },
        f20B: {
            fontWeight: FontWeightValues.BOLD,
            fontSize: "20px",
            letterSpacing: "-0.04em",
            wordBreak: "keep-all",
            lineHeight: 1.3,
        },
        f20EB: {
            fontWeight: FontWeightValues.EXTRA_BOLD,
            fontSize: "20px",
            letterSpacing: "-0.04em",
            wordBreak: "keep-all",
            lineHeight: 1.3,
        },
        f24B: {
            fontWeight: FontWeightValues.BOLD,
            fontSize: "24px",
            letterSpacing: "-0.04em",
            wordBreak: "keep-all",
            lineHeight: 1.3,
        },
        f30M: {
            fontWeight: FontWeightValues.MEDIUM,
            fontSize: "30px",
            letterSpacing: "-0.04em",
            wordBreak: "keep-all",
            lineHeight: 1.3,
        },
        f30B: {
            fontWeight: FontWeightValues.BOLD,
            fontSize: "30px",
            letterSpacing: "-0.04em",
            wordBreak: "keep-all",
            lineHeight: 1.3,
        },
        f36SB: {
            fontWeight: FontWeightValues.SEMI_BOLD,
            fontSize: "36px",
            letterSpacing: "-0.04em",
            wordBreak: "keep-all",
            lineHeight: 1.3,
        },
        f36B: {
            fontWeight: FontWeightValues.BOLD,
            fontSize: "36px",
            letterSpacing: "-0.04em",
            wordBreak: "keep-all",
            lineHeight: 1.3,
        },

        f36EB: {
            fontWeight: FontWeightValues.EXTRA_BOLD,
            fontSize: "36px",
            letterSpacing: "-0.04em",
            wordBreak: "keep-all",
            lineHeight: 1.3,
        },
        f56B: {
            fontWeight: FontWeightValues.BOLD,
            fontSize: "56px",
            letterSpacing: "-0.04em",
            wordBreak: "keep-all",
            lineHeight: 1.3,
        },
    },
});

export default theme;
