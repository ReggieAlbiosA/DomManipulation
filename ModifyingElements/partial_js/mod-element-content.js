document.addEventListener('DOMContentLoaded', function() {
    const productElements = document.querySelectorAll('.product-info p');

    productElements.forEach(product => {
        let clickCount = 0;

        product.addEventListener('click', function() {
            clickCount++;

            const productContainer = this.parentElement;
            const productDiv = productContainer.parentElement;
            const productName = productDiv.getAttribute('data-product');
            const productPrice = productDiv.getAttribute('data-price');

            if (clickCount === 1) {
                this.innerHTML = `<strong>${productName}</strong>`;

                // Add price span
                const price = document.createElement('span');
                price.classList.add('price');
                price.textContent = productPrice;
                productContainer.appendChild(price);

                // Add description with inline styles
                const description = document.createElement('p');
                description.style.all = "initial";
                description.style = "all: initial; font-size: 1rem; color: #a3a6a9; font-weight: 400; text-align: center; padding-inline: 7%; font-family: Arial, Helvetica, sans-serif;";
                description.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";
                productContainer.appendChild(description);
            } else {
                this.textContent = `Product ${[...productElements].indexOf(this) + 1}`;
                clickCount = 0;

                // Remove price and description
                productContainer.removeChild(this.nextElementSibling);
                productContainer.removeChild(this.nextElementSibling);
            }
        });
    });
});