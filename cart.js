

let logs = sessionStorage.getItem("login");
  if((logs == null) || (logs == "")){
    alert ("Please log-in first!");
    location.replace("login.html");
  }else{

let array = JSON.parse(localStorage.getItem("order"));

let unique = [...new Map (array.map(item=> [item["id"],item])).values()];
console.log(array);
console.log(unique);

if(array == null){
    let show = document.getElementById("cart");
    show.innerHTML = "Cart is Empty!";
}else{
    let show =document.getElementById("cart");

    let prod = "";
    let count = 0;

    unique.forEach(
    function (item){

        count = array.filter(existing).length;

        function existing (itemz){
            return itemz.id == item.id;
        }

            prod+= `<li>${item.product}---${item.price}---${count}</li>`;
    })
    show.innerHTML = prod;
    }
  }


