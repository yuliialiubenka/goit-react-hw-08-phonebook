import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    wrapper: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "100px 34px 113px 28px",
        width: 350,
        height: 715,
        display: "flex",
        flexDirection: "column",
        borderRadius: 30,
        backgroundRepeat: "no-repeat",
        backgroundSize: "125%",
        backgroundPosition: "center",
        "@media (max-width: 480px)": {
            top: 0,
            left: 0,
            transform: "translate(0, 0)",
            backgroundImage: "none !important",
            width: '100%',
            padding: 0,
            height: "100%"
        }
    },
    wrapperItem: {
        height: "100%",
        background: "#fff",
        padding: "0px 12px 12px 12px",
        position: "relative",
    },
});