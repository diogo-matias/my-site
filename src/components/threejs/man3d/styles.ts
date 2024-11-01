type VamoDale = { [key: string]: React.CSSProperties };

function createStyle<T extends VamoDale>(styles: T) {
    return styles;
}

export const styles = createStyle({
    canvas: {
        position: "absolute",
        filter: "opacity(1)",
        height: "50vh",
        padding: 0,
        margin: 0,
        backgroundColor: "green",
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
        overflow: "hidden",
    },
    progressLoadingContainer: {
        position: "absolute",
        left: 0,
        right: 0,
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "110vh",
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
