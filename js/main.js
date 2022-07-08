"use strict";
window.onload = () => {
    const eleName = document.getElementById("name");
    const elePrice = document.getElementById("price");
    const fruitslist = document.getElementById("fruitslist");
    const register = document.getElementById("register");

    register.addEventListener("click", addFruit);
    let i = 0;
    function addFruit() {
        //名前と値段 取得
        let name = eleName.value;
        let price = parseInt(elePrice.value);
        //li要素を作成
        const li = document.createElement("li");
        //price属性設定
        li.setAttribute("price", price);
        //値段が1000以上なら赤文字
        if (price >= 1000) {
            li.style.color = "red";
        }
        //テキスト設定
        li.textContent = `${name}:${price}円`;
        //fruitslistにli追加
        fruitslist.append(li);
        //値段降順に入れ替え
        let fruits = fruitslist.children;
        //li要素があれば
        for (let i = 0; i < fruits.length - 1; i++) {
            for (let j = i + 1; j < fruits.length; j++) {
                if (parseInt(fruits[i].getAttribute("price")) < parseInt(fruits[j].getAttribute("price"))) {
                    fruitslist.insertBefore(fruits[j], fruits[i]);
                }
            }
        }
    }
}