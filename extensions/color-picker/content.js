document.addEventListener('mouseover', (event) => {
    const element = event.target;
    element.style.outline = '2px solid red';
    console.log(31);

    element.addEventListener('mouseout', () => {
        element.style.outline = '';
    }, { once: true });
});
