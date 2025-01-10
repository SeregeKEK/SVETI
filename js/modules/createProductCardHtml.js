export function createProductCardHtml(postsData, cardsContainer) {
    postsData.forEach(({ productId, imgSrc, productName, productPrice }) => {
        const productCardEl = `
            <article id="${productId}" class="product-card">
                <img src="${imgSrc}" alt="Product photo" class="product-card__img">
                <div class="product-card__text">
                    <h3 class="product-card__title">${productName}</h3>
                    <span class="product-card__price">${productPrice} ₽</span>
                </div>
            </article>
        `;
        cardsContainer.insertAdjacentHTML("beforeend", productCardEl);
    });
}
