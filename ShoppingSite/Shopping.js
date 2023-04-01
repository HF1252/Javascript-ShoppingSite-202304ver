// 写真＆金額＆タイトル表示
const product = [
    {
        id: 0,
        image: 'image/01.jpg',
        title: 'Cup Cake',
        price: 19,
    },
    {
        id: 1,
        image: 'image/02.jpg',
        title: 'Tafel Schokolade',
        price: 16,
    },
    {
        id: 2,
        image: 'image/03.jpg',
        title: 'Praline am Stiel',
        price: 15,
    },
    {
        id: 3,
        image: 'image/04.jpg',
        title: 'Runde Schokolade',
        price: 18,
    }
];
const categories = [...new Set(product.map((item) => {return item}))]
    let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var {image, title, price} = item;
    return(
        `
        <div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>€ ${price}.00</h2>`+
                "<button onclick='addtocart("+(i++)+")'>Hinzufügend</button>"+`
            </div>
        </div>
        `
    )
}).join('')

// カート＆金額へ追加＆カウントアップダウン
var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j = 0, total = 0;
    document.getElementById("count").innerHTML=cart.length;

    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Mein WarenKorb ist leer";

        document.getElementById('total').innerHTML = "€ "+0+".00";
    }
    else {
        document.getElementById('cartItem').innerHTML = cart.map((items) => {
            var {image, title, price} = items;

            total=total+price;
            document.getElementById("total").innerHTML = "€ "+total+".00";

            return(
                `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>€ ${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            )
        }).join('')
    }
}