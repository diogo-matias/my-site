export function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
    });
}

export async function scrollToWithPadding(id: string, padding = 0) {
    var element = document.getElementById(id);
    var rect = element?.getBoundingClientRect();

    const y = Number(rect?.y) + window.scrollY;

    window.scrollTo({
        top: y - padding,
        behavior: "smooth",
    });
}
