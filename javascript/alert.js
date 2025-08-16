// alert("Hello I am alert box");
let bmiForm=document.querySelector(".bmi-form");
bmiForm.addEventListener("submit",function(e){
e.preventDefault();
const form=e.target;
const name=+(form.querySelector("#name").value);
const weight=+(form.querySelector("#weight").value);
const height=+(form.querySelector("#height").value);
let heightInMeters=height/100;
let bmi=+(weight/(heightInMeters**2).toFixed(2))
console.log("bmi:",bmi);
let result;
if(bmi<18.5){
    console.log("Thin");
    result="Thin";
}
else if(bmi>25){
    console.log("Fat");
    result="Fat";
}else{
    console.log("Normal");
    result="Normal";
}
form.querySelector("#result").textContent=`${name},you are ${result}`;
});
document.querySelector("#reset").addEventListener("click",function(e){
    bmiForm.querySelector("#name").value="";
    bmiForm.querySelector("#weight").value="";
    bmiForm.querySelector("#height").value="";
    bmiForm.querySelector("#result").textContent="";

});