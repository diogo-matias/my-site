export function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
    });
}
