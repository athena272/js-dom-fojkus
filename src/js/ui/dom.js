export const SELECTORS = {
    html: "html",
    card: ".app__card",
    banner: ".app__image",
    title: ".app__title",
    contextButtons: ".app__card-button[data-context]",
    musicToggle: "#toggle-music",
};

export function qs(selector, scope = document)
{
    const el = scope.querySelector(selector);
    if (!el) throw new Error(`Elemento não encontrado: ${selector}`);
    return el;
}

export function qsa(selector, scope = document)
{
    return Array.from(scope.querySelectorAll(selector));
}