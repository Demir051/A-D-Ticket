function buyutBasHarfi(text) {
    return text.length > 0 ? text.charAt(0).toUpperCase() + text.slice(1) : text;
}

module.exports = {
    buyutBasHarfi
};