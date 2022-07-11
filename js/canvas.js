"use strict";
const cvs = document.getElementById("cvs");
const ctx = cvs.getContext("2d");
cvs.width = 400;
cvs.height = 300;
let r = 30; //半径
let posX = 100; //始まりのX座標
let posY = 100; //始まりのY座標
let width = 130; //横の長さ
//パス描画開始
ctx.beginPath();
ctx.arc(posX, posY, r, (-1 * Math.PI) / 2, Math.PI / 2, true);
// ctx.lineTo(posX + width, posY + r);
ctx.arc(posX + width, posY, r, Math.PI / 2, (-1 * Math.PI) / 2, true);
ctx.closePath();
//描画ここまで
ctx.lineWidth = 3;
ctx.stroke(); //パスの枠線
ctx.fillStyle = "red";
ctx.fill(); //赤で塗りつぶし
ctx.fillStyle = "yellow";
ctx.fillRect(posX, posY - r, width, r * 2); //四角に黄色に塗りつぶし
