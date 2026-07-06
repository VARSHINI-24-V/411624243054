function Text({ children, color, size }) {
    return (
        <p
            style={{
                color: color,
                fontSize: size
            }}
        >
            {children}
        </p>
    );
}

export default Text;