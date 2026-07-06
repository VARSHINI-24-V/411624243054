import { useState, useEffect } from "react";
import ThemeService from "../../services/ThemeService";

function Content() {

    const [theme, setTheme] = useState(ThemeService.getTheme());

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
                backgroundColor: theme === "Light" ? "#ffffff" : "#333",
                color: theme === "Light" ? "black" : "white",
                padding: "20px",
                textAlign: "center",
                minHeight: "200px"
            }}
        >
            <h2>Content</h2>

            <p>This content changes based on the selected theme.</p>

            <p>Current Theme : {theme}</p>
        </div>
    );
}

export default Content;