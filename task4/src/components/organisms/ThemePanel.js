import { useState, useEffect } from "react";
import ThemeService from "../../services/ThemeService";
import ThemeLabel from "../molecules/ThemeLabel";
import Button from "../atoms/Button";

function ThemePanel() {

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
                backgroundColor: theme === "Light" ? "#ffffff" : "#444",
                color: theme === "Light" ? "black" : "white",
                padding: "20px",
                textAlign: "center"
            }}
        >
            <h2>Theme Panel</h2>

            <ThemeLabel theme={theme} />

            <Button
                text="Toggle Theme"
                onClick={() => ThemeService.toggleTheme()}
            />
        </div>
    );
}

export default ThemePanel;