import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Future Now, Arial, sans-serif",
    allVariants: {
      color: "#fff", // يجعل كل أنواع النصوص أبيض تلقائيًا
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff", // لون النص داخل الزر بشكل عام
          textTransform: "none", // منع الحروف الكبيرة تلقائيًا
          borderRadius: "8px",
        },
        contained: {
          backgroundColor: "#193a51", // 🎨 لون الزر الرئيسي
          color: "#ffffff", // لون النص داخل الزر
          "&:hover": {
            backgroundColor: "#102733", // لون عند التحويم (أغمق شوي)
          },
        },
      },
    },
  },
});

export default theme;
