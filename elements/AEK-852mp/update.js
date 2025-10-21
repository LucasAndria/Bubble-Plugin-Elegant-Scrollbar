function(instance, properties, context) {
    if (!properties.element_id) return;
    document.getElementById("H.S.")?.remove();
    const style = `<style id='H.S.'>#${properties.element_id} {overflow-x: auto !important;}</style>`
    document.querySelector('head').innerHTML += style;
}