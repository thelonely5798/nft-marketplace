export const contractName = (name:string) => {
    return name.substring(0, 7) + "..." + name.substring(37)
}


export const toggleLoadingOverlay = () => {
    let overlay = document.getElementsByClassName('loading-overlay')[0]
    overlay.classList.toggle('is-active')
}