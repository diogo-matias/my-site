type VamoDale = { [key: string]: React.CSSProperties };

function createStyle<T extends VamoDale>(styles: T) {
    return styles;
}

export const styles = createStyle({
    canvas: {
        position: "absolute",
        zIndex: "-2",
        filter: "opacity(1)",
        height: "100vh",
        overflow: "hidden",
        padding: 0,
        margin: 0,
    },
    loadingContainer: {
        paddingLeft: 200,
        paddingTop: 100,
        position: "absolute",
        zIndex: -1,
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
        width: "100%",
        height: "100vh",
        // backgroundColor: "red",
        overflow: "hidden",
    },
    imageContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },
});
