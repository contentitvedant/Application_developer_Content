// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Event listener for container (outermost element)
    document.querySelector('.container').addEventListener('click', (event) => {
        alert('Container clicked - Bubble phase');
        console.log('Container clicked - Bubble phase');
    });

    // Event listener for parent (middle element) - capturing phase
    document.querySelector('.parent').addEventListener('click', (event) => {
        alert('Parent clicked - Capture phase');
        console.log('Parent clicked - Capture phase');
    }, true);

    // Event listener for parent (middle element) - bubbling phase
    document.querySelector('.parent').addEventListener('click', (event) => {
        alert('Parent clicked - Bubble phase');
        console.log('Parent clicked - Bubble phase');
    });

    // Event listener for child (innermost element)
    document.querySelector('.child').addEventListener('click', (event) => {
        alert('Child clicked - Bubble phase');
        console.log('Child clicked - Bubble phase');
        // Stop propagation to demonstrate stopping the event flow
        event.stopPropagation();
    });

    // Event delegation on container to handle clicks on dynamically added elements
    document.querySelector('.container').addEventListener('click', (event) => {
        if (event.target.matches('.child')) {
            alert('Delegated event - Child clicked');
            console.log('Delegated event - Child clicked');
        }
    });
});
