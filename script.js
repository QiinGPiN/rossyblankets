const container = document.getElementById("imageContainer");
const modal = document.getElementById("checkoutModal");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const confirmBtn = document.getElementById("confirmOrder");
const closeBtn = document.querySelector(".close");

const phone = "254711321125";

// PRODUCTS
const products = [
    {name: "Luxury Blanket", price: "Ksh 2500", img: "assets/blanket1.jpg"},
    {name: "Soft Warm Blanket", price: "Ksh 2000", img: "assets/blanket2.jpg"},
    {name: "Premium Fleece Blanket", price: "Ksh 3000", img: "assets/blanket3.jpg"}
];

// LOAD PRODUCTS

const image=[
"assets/p1 (1).jpg",
"assets/p1 (2).jpg",
"assets/p1 (3).jpg",
"assets/p1 (4).jpg",
"assets/p1 (5).jpg",
"assets/p1 (6).jpg",
"assets/p1 (7).jpg",
"assets/p1 (8).jpg",
"assets/p1 (9).jpg",
"assets/p1 (10).jpg",
"assets/p1 (11).jpg",
"assets/p1 (12).jpg",
"assets/p1 (13).jpg",
"assets/p1 (14).jpg",
"assets/p1 (15).jpg",
"assets/p1 (16).jpg",
"assets/p1 (17).jpg",
"assets/p1 (18).jpg",
"assets/p1 (19).jpg",
"assets/p1 (20).jpg",
"assets/p1 (21).jpg",
"assets/p1 (22).jpg",
"assets/p1 (23).jpg",
"assets/p1 (24).jpg",
"assets/p1 (25).jpg",
"assets/p1 (26).jpg",
"assets/p1 (27).jpg",
"assets/p1 (28).jpg",
"assets/p1 (29).jpg",
"assets/p1 (30).jpg",
"assets/p1 (31).jpg",
"assets/p1 (32).jpg",
"assets/p1 (33).jpg",
"assets/p1 (34).jpg",
"assets/p1 (35).jpg",
"assets/p1 (36).jpg",
"assets/p1 (37).jpg",
"assets/p1 (38).jpg",
"assets/p1 (39).jpg",
"assets/p1 (40).jpg",
"assets/p1 (41).jpg",
"assets/p1 (42).jpg",
"assets/p1 (43).jpg",
"assets/p1 (44).jpg",
"assets/p1 (45).jpg",
"assets/p1 (46).jpg",
"assets/p1 (47).jpg",
"assets/p1 (48).jpg",
"assets/p1 (49).jpg",
"assets/p1 (50).jpg",
"assets/p1 (51).jpg",
"assets/p1 (52).jpg",
"assets/p1 (53).jpg",
"assets/p1 (54).jpg",
"assets/p1 (55).jpg",
"assets/p1 (56).jpg",
"assets/p1 (57).jpg",
"assets/p1 (58).jpg",
"assets/p1 (59).jpg",
"assets/p1 (60).jpg",
"assets/p1 (61).jpg",
"assets/p1 (62).jpg",
"assets/p1 (63).jpg",
"assets/p1 (64).jpg",
"assets/p1 (65).jpg",
"assets/p1 (66).jpg",
"assets/p1 (67).jpg",
"assets/p1 (68).jpg",
"assets/p1 (69).jpg",
"assets/p1 (70).jpg",
"assets/p1 (71).jpg",
"assets/p1 (72).jpg",
"assets/p1 (73).jpg",
"assets/p1 (74).jpg",
"assets/p1 (75).jpg",
"assets/p1 (76).jpg",
"assets/p1 (77).jpg",
"assets/p1 (78).jpg",
"assets/p1 (79).jpg",
];

products.forEach(p => {
    let div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <button onclick="openCheckout('${p.name}', '${p.price}')">Buy Now</button>
    `;

    container.appendChild(div);
});

// OPEN CHECKOUT
function openCheckout(name, price) {
    modal.style.display = "block";
    productName.innerText = name;
    productPrice.innerText = price;

    confirmBtn.onclick = () => {
        let msg = `Hello, I want to order: ${name} - ${price}`;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
    };
}

// CLOSE MODAL
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => {
    if (e.target == modal) modal.style.display = "none";
};