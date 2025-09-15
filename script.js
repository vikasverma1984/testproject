const products = [
    {
        id: 'p1',
        title: 'Vintage Camera',
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1519183071298-a2962be96f83?q=80&w=1200&auto=format&fit=crop',
        tag: 'Popular'
    },
    {
        id: 'p2',
        title: 'Leather Backpack',
        price: 89.5,
        image: 'https://images.unsplash.com/photo-1514477917009-389c76a86b68?q=80&w=1200&auto=format&fit=crop',
        tag: 'New'
    },
    {
        id: 'p3',
        title: 'Wireless Headphones',
        price: 149.0,
        image: 'https://images.unsplash.com/photo-1518444055433-8ce0a125f468?q=80&w=1200&auto=format&fit=crop',
        tag: 'Bestseller'
    },
    {
        id: 'p4',
        title: 'Ceramic Mug',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1520986606214-8b456906c813?q=80&w=1200&auto=format&fit=crop',
        tag: 'Sale'
    },
    {
        id: 'p5',
        title: 'Minimal Watch',
        price: 199.0,
        image: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?q=80&w=1200&auto=format&fit=crop',
        tag: 'Featured'
    },
    {
        id: 'p6',
        title: 'Desk Plant',
        price: 24.5,
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1200&auto=format&fit=crop',
        tag: 'Eco'
    }
];

function formatCurrency(value) {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(value);
}

function createCard(product) {
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('tabindex', '0');

    const img = document.createElement('img');
    img.className = 'media';
    img.loading = 'lazy';
    img.alt = product.title;
    img.src = product.image;

    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = product.tag;

    const body = document.createElement('div');
    body.className = 'card-body';

    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = product.title;

    const priceRow = document.createElement('div');
    priceRow.className = 'price-row';

    const price = document.createElement('div');
    price.className = 'price';
    price.textContent = formatCurrency(product.price);

    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Add to cart';
    button.style.padding = '8px 10px';
    button.style.borderRadius = '10px';
    button.style.border = '1px solid #d1d5db';
    button.style.background = '#fff';
    button.style.cursor = 'pointer';
    button.addEventListener('click', () => alert(`${product.title} added!`));

    priceRow.append(price, button);
    body.append(title, priceRow);
    card.append(img, tag, body);
    return card;
}

function renderProducts(list) {
    const container = document.getElementById('gallery');
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();
    list.forEach((p) => fragment.appendChild(createCard(p)));
    container.appendChild(fragment);
}

function setupSearch() {
    const input = document.getElementById('searchInput');
    input.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = products.filter((p) => p.title.toLowerCase().includes(term));
        renderProducts(filtered);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    setupSearch();
});

