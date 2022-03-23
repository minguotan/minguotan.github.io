        //输入框点击清空
        var clear=document.querySelector('.searchbar');
        search_hint = '筑语搜索...';
        clear.value=search_hint;
        clear.onfocus = function(){
            if(this.value==search_hint){
            this.style.color="black";
            this.value='';
            }
        }
        clear.onblur=function(){
            if(this.value==''){
            this.style.color= "rgb(192, 192, 192)";
            this.value=search_hint;
            }
        }
        var i=0;
        function change(){
            switch(i){
                case 0 :
               document.getElementById("num").src=
               "https://cvws.icloud-content.com/S/AWKoIo_bnHaSkW3ZwzH7B_r2dxaK/3800278A-9A62-4E62-9833-0C0F5F1E3287.JPG?o=ApkhlIhmM9mxqhjxrlnwHAaYLFX0IiphVyy5fCw2Vbfm&v=1&z=https%3A%2F%2Fp37-content.icloud.com%3A443&x=1&a=CAogg-5_PkvlT0842dZIN3qF-uUSo0JPKqiZjNDbGFYPw78SaRC9jtWE-y8YvaXoifsvIgEAUgT2dxaKaiemJkqeO6DIZxYQ4FnB3navFDet9uDRl8Gyc7w5WdtuHkpEMLLiW_xyJ9MXY_rv7Py6vRP1M4sUAJ_l2Xl_qEBfn28YElP3ZQ9q9sovnagScA&e=1647945847&r=48f90cc1-511d-47e7-b19b-c4392df9551e-5&s=oY1Tg_8XPZL1bLWhW-lBoNGSwaI";
               break;
               case 1 :
               document.getElementById("num").src=
               "https://cvws.icloud-content.com/S/Aee7i1GLQ7tPrUx8Fp6IDAb8hxWo/CB9B2037-8831-4EE7-A124-2E41B9AB1E19.JPG?o=AggrfO7i3cyhKXlvL8KLWtj7jDTrwd4ePjLeFoQYFdII&v=1&z=https%3A%2F%2Fp37-content.icloud.com%3A443&x=1&a=CAog8gCmerfBllfJRxwnlgsPzXvl7sWJj-ut6c8IR16yeuUSaRC_jtWE-y8Yv6XoifsvIgEAUgT8hxWoaicgLenwGHwg6eN1bZQMHGjY2rC_LVxrBaj4XfGH-fyBmipIJzB2ycdyJ1uUPIumMcHnGYk7wm37CzlIp3WQRaM5_6pjsusW_hklsC1UuFhf7A&e=1647945847&r=48f90cc1-511d-47e7-b19b-c4392df9551e-10&s=KANGWW0-CSSMLKqkbBBeip1JkPw";
               break;
               case 2 :
               document.getElementById("num").src=
               "https://cvws.icloud-content.com/S/AVVw407Qq40wTxOvMsomYWv93MpU/94BF0625-8952-4FFE-986E-8C23222E858C.JPG?o=AvPeyZYOp3Xz5_b6XOYh3cMaorLEICf53ht4mmz96IqY&v=1&z=https%3A%2F%2Fp37-content.icloud.com%3A443&x=1&a=CAogWT4acMbNrGB2iWxjTxXPxgZw8Pc3AFUXJ4K-g5iM3vkSaRC8jtWE-y8YvKXoifsvIgEAUgT93MpUaiekSdIrVWEaUnCVCtz06Xlv7MWdKrAw0DOwvhr5o9K-e6aA_Y2T-EtyJ6AvHFLj84wtDOSXbpGc5iLRxRHsQFGSP4YXDJZivZ6QbC0PYC-LHA&e=1647945847&r=48f90cc1-511d-47e7-b19b-c4392df9551e-1&s=DeHjJsL4rYGFwvoLBBnDf3tJYLA";
               break;
               case 3 :
               document.getElementById("num").src=
               "https://cvws.icloud-content.com/S/AWZxbbkfyhoJmXZjmqvVrVaNkdMn/EBC54208-C79E-48A3-B83F-9747E6FBDE35.JPG?o=AqOlHQFuumusysQPHIIOCp6r8xjTNLWH1KXoZvAmZeGN&v=1&z=https%3A%2F%2Fp37-content.icloud.com%3A443&x=1&a=CAogXxZDbf7pfa0U3ytXhRa2EeDsZNuO764CxOebDWkkHXESaRC9jtWE-y8YvaXoifsvIgEAUgSNkdMnaieoLFPY-BBRo8y_tiBKeJanUmLY5q0x8DdMjoYlH3HdTeldLZRKskJyJwQE2nck6JvVdzVqqjLbNiUilLvfAIY8aoW9vqP6ZdMXC8I6uitUqw&e=1647945847&r=48f90cc1-511d-47e7-b19b-c4392df9551e-4&s=wm9fRj-qLnyG4FYEdzG6uzowfcg";
               break;
               default:
               document.getElementById("num").src=
               "https://cvws.icloud-content.com/S/AWKoIo_bnHaSkW3ZwzH7B_r2dxaK/3800278A-9A62-4E62-9833-0C0F5F1E3287.JPG?o=ApkhlIhmM9mxqhjxrlnwHAaYLFX0IiphVyy5fCw2Vbfm&v=1&z=https%3A%2F%2Fp37-content.icloud.com%3A443&x=1&a=CAogg-5_PkvlT0842dZIN3qF-uUSo0JPKqiZjNDbGFYPw78SaRC9jtWE-y8YvaXoifsvIgEAUgT2dxaKaiemJkqeO6DIZxYQ4FnB3navFDet9uDRl8Gyc7w5WdtuHkpEMLLiW_xyJ9MXY_rv7Py6vRP1M4sUAJ_l2Xl_qEBfn28YElP3ZQ9q9sovnagScA&e=1647945847&r=48f90cc1-511d-47e7-b19b-c4392df9551e-5&s=oY1Tg_8XPZL1bLWhW-lBoNGSwaI";
            }
        }
        function slide(){
           if(i != 3){
               i=i+1;
           }
           else{
               i=0
           }
             change();       
        }
        function slide2(){
            if(i == 0){
                i=3;
            }
            else{
                i=i-1;
            }
            change();
        }
