import { useState, useEffect } from "react";
import ThemeService from "../../services/ThemeService";

function Footer() {

    const [theme, setTheme] =useState(ThemeService.getTheme());

    useEffect(() => {

        const updateTheme = (newTheme) => {
            setTheme(newTheme);
        };

        ThemeService.attach(updateTheme);

        return () => {
            ThemeService.detach(updateTheme);
        };

    }, []);

    return (
        <div
            style={{
                backgroundColor: theme === "Light" ? "#f0f0f0" : "#222",
                color: theme === "Light" ? "black" : "white",
                padding: "20px",
                textAlign: "center"
            }}
        >
            <h3>Footer</h3>

            <p>Current Theme : {theme}</p>
        </div>
    );
}

export default Footer;