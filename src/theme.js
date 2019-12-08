import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Gordita Regular"
  },
  palette: {
    primary: { main: "rgb(255, 180, 50)" },
    secondary: { main: "rgb(63, 117, 198)" },
    background: {
      paper: "#fff",
      default: "#eee"
    }
  },
  overrides: {
    MuiCard: {
      root: {
        margin: "32px 0",
        minWidth: 275,
        padding: "16px",
        borderRadius: 0,
        boxShadow: "none"
      }
    },
    MuiGrid: {},
    MuiExpansionPanel: {
      root: {
        borderTop: "1px solid rgb(227, 227, 227)",
        borderBottom: "1px solid rgb(227, 227, 227)",
        boxShadow: "none",
        margin: "0",
        "&$expanded": {
          margin: "0",
          backgroundColor: "white !important"
        },
        "&::before": {
          display: "none"
        },
        "&:hover": {
          backgroundColor: "rgb(248, 248, 248)"
        }
      }
    },
    MuiExpansionPanelSummary: {
      root: {
        "&$expanded": {
          minHeight: "48px"
        }
      },
      expandIcon: {
        "&$expanded": {
          transform: 'none'
        }
      },
      content: {
        "&$expanded": {
          margin: "12px 0"
        }
      }
    },
    MuiFilledInput: {
      root: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
      }
    },
    MuiButton: {
      root: {
        borderRadius: 0,
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 600,
        padding: "12px 24px"
      },
      containedPrimary: {
        boxShadow: "none",
        backgroundColor: "rgb(236, 0, 0)",
        color: "white",
        "&:hover": {
          backgroundColor: "rgb(179, 0, 0)",
          boxShadow: "none"
        }
      },
      containedSecondary: {
        boxShadow: "none",
        backgroundColor: "white",
        border: "1px solid rgb(236, 0, 0)",
        color: "rgb(236, 0, 0)",
        "&:hover": {
          border: "1px solid rgb(179, 0, 0)",
          backgroundColor: "rgb(179, 0, 0)",
          color: "white",
          boxShadow: "none"
        }
      }
    }
  }
});
