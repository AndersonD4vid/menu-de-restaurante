const menuData = [
   {
      id: 1,
      titulo: "BurguerX",
      categoria: "Lanches",
      img: "https://img.freepik.com/fotos-gratis/vista-frontal-deliciosas-%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20batatas-fritas-com-cheeseburgers-em-fundo-escuro-lanche-prato-fast-%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20food-torrada-hamburguer-jantar_140725-158687.jpg?w=2000",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      preco: 12.99
   },
   {
      id: 2,
      titulo: "Big Salada",
      categoria: "Lanches",
      img: "https://inovapapan.com.br/wp-content/uploads/2019/06/manter-sabor-delivery-1024x683-1.jpg",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      preco: 12.00
   },
   {
      id: 3,
      titulo: "2 Lanches pelo preço de 1",
      categoria: "Lanches",
      img: "https://hamburguerdesucesso.com.br/wp-content/uploads/2021/05/lanches-mais-vendidos-no-brasil.jpg",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      preco: 17.99
   },
   {
      id: 4,
      titulo: "Milkshake Morango",
      categoria: "milkshake",
      img: "https://receitastodahora.com/wp-content/uploads/2022/07/milk-shake-de-morango.webp",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      preco: 12.50
   },
   {
      id: 5,
      titulo: "Milkshake Chocolate",
      categoria: "milkshake",
      img: "https://blog.finamac.com/wp-content/uploads/2019/10/309956-como-oferecer-os-melhores-sabores-de-milkshake-para-os-clientes.jpg",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      preco: 12.50
   },
   {
      id: 6,
      titulo: "Milkshake Ovomaltine",
      categoria: "milkshake",
      img: "https://i.ytimg.com/vi/PIPKjJRGRJU/maxresdefault.jpg",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      preco: 22
   },
   {
      id: 7,
      titulo: "Macarrão",
      categoria: "jantar",
      img: "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2022/08/19/923202347-shutterstock631925096-2.jpg",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      preco: 29.00
   },
   {
      id: 8,
      titulo: "Combo 1",
      categoria: "café",
      img: "https://minhasaude.proteste.org.br/wp-content/uploads/2022/11/mesa-cafe-manha.png",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      preco: 29.00
   },
   {
      id: 9,
      titulo: "Combo 2",
      categoria: "café",
      img: "https://ichef.bbci.co.uk/news/640/cpsprodpb/11AA1/production/_126635327_gettyimages-938158500.jpg",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      preco: 29.00
   },
]

const itemImagem = document.getElementById("item-img");
const itemNome = document.getElementById("item-nome");
const itemDescricao = document.getElementById("item-descricao");
const itemPreco = document.getElementById("item-preco");

const containerItens = document.querySelector(".container-itens");
const containerBotoes = document.querySelector(".containerBotoesDeFiltro");

// carregar lista de itens ao iniciar a páginá
window.addEventListener("DOMContentLoaded", function () {
   displayMenuItens(menuData);
   displayMenuBotoes();
   // console.log(categorias)
});


function displayMenuItens(menuItens) {
   let displayMenu = menuItens.map(function (item) {

      return `<article class="item" >
         <img src=${item.img} alt=${item.titulo} class="img" id="item-img">
            <div class="infors">
               <strong id="item-nome">${item.titulo}</strong>
               <span id="item-descricao">${item.descricao}</span>
               <strong id="item-preco">$ ${item.preco.toFixed(2)}</strong>
            </div>
         </article>`;
   });
   // inserindo e mostrando itens
   displayMenu = displayMenu.join("");
   containerItens.innerHTML = displayMenu;
}

function displayMenuBotoes() {
   //displayBotoesFiltro();
   const categorias = menuData.reduce(function (values, item) {
      if (!values.includes(item.categoria)) {
         values.push(item.categoria);
      }
      return values;
   }, ["todos"]);
   const categoriaBotoes = categorias.map(function (categoria) {
      return `<button data-id=${categoria} class="filter-btn" type="button">${categoria}</button>`;
   }).join("");
   containerBotoes.innerHTML = categoriaBotoes;
   const filtrarBotoes = containerBotoes.querySelectorAll(".filter-btn");
   // carregar botões de filtro
   filtrarBotoes.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
         const categoria = e.currentTarget.dataset.id;
         const menuCategoria = menuData.filter(function (menuItem) {
            //console.log(menuItem.categoria);
            if (menuItem.categoria === categoria) {
               return menuItem;
            }

         });
         if (categoria === "todos") {
            displayMenuItens(menuData);
         } else {
            displayMenuItens(menuCategoria)
         }

         //console.log(e.currentTarget.dataset.id);
         //console.log(menuCategoria);
      });
   });
}