function(instance, properties, context) {
    const elementId = properties.element_id ? `#${properties.element_id}` : "";
    document.getElementById("E.S.")?.remove();    
    document.getElementById("E.S.element")?.remove();


    // Setup the styles balise
    const style = `
      <style id="E.S.element">
        ${elementId || "*"}::-webkit-scrollbar {
          width: var(--width);
          height: var(--height);
        }

        ${elementId || "*"}::-webkit-scrollbar-track {
          background-color: var(--track-color);
          border-radius: var(--track-border-radius);
        }

        ${elementId || "*"}::-webkit-scrollbar-thumb {
          background-color: var(--thumb-color);
          border-radius: var(--thumb-border-radius);
        }

        ${elementId || "*"}::-webkit-scrollbar-thumb:hover {
          background-color: var(--thumb-hover-color);
        }
      </style>
      `;

    // Add the style in the head html
    document.querySelector("head").innerHTML += style;
}