document.addEventListener("DOMContentLoaded", function() {
    let preveiwContainer = document.querySelector('.products-preview');
    let previewBox = preveiwContainer.querySelectorAll('.preview');
    let categoryButtons = document.querySelectorAll('.category-buttons button');
    let products = document.querySelectorAll('.products-container .product');
    let backButton = document.querySelector('.back');

    products.forEach(product => {
        product.onclick = () => {
            preveiwContainer.style.display = 'flex';
            let name = product.getAttribute('data-name');
            previewBox.forEach(preview => {
                let target = preview.getAttribute('data-target');
                if (name == target) {
                    preview.classList.add('active');
                }
            });
        };
    });

    previewBox.forEach(close => {
        close.querySelector('.fa-times').onclick = () => {
            close.classList.remove('active');
            preveiwContainer.style.display = 'none';
        };
    });

    categoryButtons.forEach(button => {
        button.onclick = () => {
            let category = button.getAttribute('data-category');
            products.forEach(product => {
                if (category === 'All' || product.getAttribute('data-category') === category) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        };
    });

    // Adding functionality for the "Back" button
    backButton.onclick = () => {
        products.forEach(product => {
            product.style.display = 'block';
        });
    };
});

