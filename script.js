const container = document.getElementById("imageContainer");
const modal = document.getElementById("checkoutModal");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const confirmBtn = document.getElementById("confirmOrder");
const closeBtn = document.querySelector(".close");

const phone = "254711321125";

// PRODUCTS
const products = [
    {name: "Luxury Blanket", price: "Ksh 2500", img: "assets/p1 (31).jpg"},
    {name: "Soft Warm Blanket", price: "Ksh 2000", img: "assets/p1 (58).jpg"},
    {name: "Premium Fleece Blanket", price: "Ksh 3000", img: "assets/p1 (51).jpg"},

{img:"assets/p1 (1).jpg"},
{img:"assets/p1 (2).jpg"},
{img:"assets/p1 (3).jpg"},
{img:"assets/p1 (4).jpg"},
{img:"assets/p1 (5).jpg"},
{img:"assets/p1 (6).jpg"},
{img:"assets/p1 (7).jpg"},
{img:"assets/p1 (8).jpg"},
{img:"assets/p1 (9).jpg"},
{img:"assets/p1 (10).jpg"},
{img:"assets/p1 (11).jpg"},
{img:"assets/p1 (12).jpg"},
{img:"assets/p1 (13).jpg"},
{img:"assets/p1 (14).jpg"},
{img:"assets/p1 (15).jpg"},
{img:"assets/p1 (16).jpg"},
{img:"assets/p1 (17).jpg"},
{img:"assets/p1 (18).jpg"},
{img:"assets/p1 (19).jpg"},
{img:"assets/p1 (20).jpg"},
{img:"assets/p1 (21).jpg"},
{img:"assets/p1 (22).jpg"},
{img:"assets/p1 (23).jpg"},
{img:"assets/p1 (24).jpg"},
{img:"assets/p1 (25).jpg"},
{img:"assets/p1 (26).jpg"},
{img:"assets/p1 (27).jpg"},
{img:"assets/p1 (28).jpg"},
{img:"assets/p1 (29).jpg"},
{img:"assets/p1 (30).jpg"},
{img:"assets/p1 (31).jpg"},
{img:"assets/p1 (32).jpg"},
{img:"assets/p1 (33).jpg"},
{img:"assets/p1 (34).jpg"},
{img:"assets/p1 (35).jpg"},
{img:"assets/p1 (36).jpg"},
{img:"assets/p1 (37).jpg"},
{img:"assets/p1 (38).jpg"},
{img:"assets/p1 (39).jpg"},
{img:"assets/p1 (40).jpg"},
{img:"assets/p1 (41).jpg"},
{img:"assets/p1 (42).jpg"},
{img:"assets/p1 (43).jpg"},
{img:"assets/p1 (44).jpg"},
{img:"assets/p1 (45).jpg"},
{img:"assets/p1 (46).jpg"},
{img:"assets/p1 (47).jpg"},
{img:"assets/p1 (48).jpg"},
{img:"assets/p1 (49).jpg"},
{img:"assets/p1 (50).jpg"},
{img:"assets/p1 (51).jpg"},
{img:"assets/p1 (52).jpg"},
{img:"assets/p1 (53).jpg"},
{img:"assets/p1 (54).jpg"},
{img:"assets/p1 (55).jpg"},
{img:"assets/p1 (56).jpg"},
{img:"assets/p1 (57).jpg"},
{img:"assets/p1 (58).jpg"},
{img:"assets/p1 (59).jpg"},
{img:"assets/p1 (60).jpg"},
{img:"assets/p1 (61).jpg"},
{img:"assets/p1 (62).jpg"},
{img:"assets/p1 (63).jpg"},
{img:"assets/p1 (64).jpg"},
{img:"assets/p1 (65).jpg"},
{img:"assets/p1 (66).jpg"},
{img:"assets/p1 (67).jpg"},
{img:"assets/p1 (68).jpg"},
{img:"assets/p1 (69).jpg"},
{img:"assets/p1 (70).jpg"},
{img:"assets/p1 (71).jpg"},
{img:"assets/p1 (72).jpg"},
{img:"assets/p1 (73).jpg"},
{img:"assets/p1 (74).jpg"},
{img:"assets/p1 (75).jpg"},
{img:"assets/p1 (76).jpg"},
{img:"assets/p1 (77).jpg"},
{img:"assets/p1 (78).jpg"},
{img:"assets/p1 (79).jpg"},
];

// LOAD PRODUCTS



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
