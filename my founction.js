// بداية jqury
$(document).ready(function () {

    $(".btn-detail").click(function () {

        $(this).closest("tr").next(".car-details").toggle();

    });

});
// نهاية jqury

// بداية قسم الحجز
const continue_btn = document.getElementById("continue");
const booking_form = document.getElementById("booking-section");
const close_form = document.getElementById("close-form")
continue_btn.addEventListener("click", function () {
    const selected_cars = document.querySelectorAll(".checkbox-cell:checked");
    if (selected_cars.length === 0) {
        alert("الرجاء اختيار سيارة واحدة على الأقل")
    }
    else{
    booking_form.style.display = "flex";
    }
})
close_form.addEventListener("click",function () {
    booking_form.style.display = "none"  
});

let full_name = document.getElementById("full-name");
let nation_id = document.getElementById("nation-id")
let start_date = document.getElementById("start-date")
let end_date = document.getElementById("end-date");
let phone = document.getElementById("phone-number");
let email = document.getElementById("email-add");
full_name.addEventListener("blur" ,function () {
    if(!/^[\u0621-\u064A\s]+$/.test(full_name.value)){
        alert("اكتب الاسم بالعربية و تأكد من صحته");
    }
});
nation_id.addEventListener("blur" ,function (){
    let first_two = Number(nation_id.value[0] + nation_id.value[1])
    if(nation_id.value.length !=11){
        alert("الرقم الوطني يجب ان يتكون من 11 خانة")
    }
    else if(first_two < 1 || first_two > 14){
        alert("اول خانتين يجب ان يكون بين 01 و 14")
    }
})
end_date.addEventListener("blur", function (){
    if(start_date.value == "" || end_date.value == ""){
        alert("الرجاء ادخال تاريخ البداية و تاريخ النهاية")
    }
    else if(end_date.value <= start_date.value){
        alert("تاريخ النهاية يجب ان يكون بعد تاريخ البداية")
    }
})
phone.addEventListener("blur", function () {
    if(phone.value.length !=10 || phone.value[0] !="0" || phone.value[1] != "9" || (phone.value[2] != "3" && phone.value[2] != "4" && phone.value[2] != "5" && phone.value[2] != "6" && phone.value[2] != "8" && phone.value[2] != "9")){
        alert("رقم الهاتف غير صحيح")
    }
});
email.addEventListener("blur" ,function (){
    if(!email.value.includes("@") || !email.value.includes(".")){
        alert("البريد الالكتروني غير صحيح")
    }
})

const send =document.getElementById("send");
send.addEventListener("click" , function () {
    if(nation_id.value == "" || start_date.value == "" || end_date.value== ""){
        alert("يرجى أدخال الحقول اللازمة")
    }
    else{
        let new_start_date = new Date(start_date.value)
        let new_end_date = new Date(end_date.value)
        let days = (new_end_date - new_start_date) / 86400000

        let cars = document.querySelectorAll(".checkbox-cell:checked")
        let all_cars_name = document.querySelectorAll(".car-name");
        let all_prices = document.querySelectorAll(".car-price");
        let total = 0;
        let car_name = "";
        for(let i = 0 ;i < cars.length; i++){
            if(cars[i].checked){
                car_name += " - " + all_cars_name[i].textContent
                let price = parseInt(all_prices[i].textContent)
                let cost = price * days;
                total = total + cost;
            }
        }

        if(days > 7){
            total_after = total * 0.9;
            alert(` اسماء السيارات المستأجرة : ${car_name}\nعدد الايام : ${days} \nالمجموع الكلي مع خصم : ${total_after}\n
            `);
        }
        else{
            alert(` اسماء السيارات المستأجرة : ${car_name}\nعدد الايام : ${days} \nالمجموع الكلي بدون خصم : ${total}\n`);
        }
    }
});