import Text from "../atoms/Text";

function ThemeLabel({ theme }) {
    return (
        <Text
            color={theme === "Light" ? "black" : "white"}
            size="20px"
        >
            Current Theme : {theme}
        </Text>
    );
}

export default ThemeLabel;