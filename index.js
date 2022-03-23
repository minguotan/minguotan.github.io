        //输入框点击清空
        
        var clear=document.querySelector('.searchbar');
    
        // console.log(clear);//此处为啥是null
        clear.onfocus=function(){
            this.style.color="black";  
        }
        clear.onblur=function(){            
            this.style.color= "rgb(192, 192, 192)";  
        }
        var i=0;
        pic= document.getElementById("num");
        function change(){
            switch(i){
                case 0 :
               pic.src=
               "https://cvws.icloud-content.com/S/AWKoIo_bnHaSkW3ZwzH7B_r2dxaK/3800278A-9A62-4E62-9833-0C0F5F1E3287.JPG?o=AjMLO0HDeFF1SbkTMLW_V-bA0vtL43gvQw5TFSxDZE1W&v=1&z=https%3A%2F%2Fp37-content.icloud.com%3A443&x=1&a=CAogleFdL6lyWQwZ369ng4614rcls-m-2JXTK3alcwZoa6YSaRCYx_yw-y8YmN6PtvsvIgEAUgT2dxaKaic7GbCLV7IJEG6CwrHcsvQuZOtgU4NdfsHIypTXiYxuCcpVGMswLYNyJ6zFL6tzr71Qp6eNW28bmES7MrDQuG0n5HjGOB17iHCY1UFd8EIkqw&e=1648038768&r=0576db7c-6d51-48cb-adaf-39c9a7d99518-1&s=4Pw2Z8yNpIn6Y9wBm3QnXUb4BY4";
               break;
               case 1 :
               pic.src=
               "https://cvws.icloud-content.com/S/Aee7i1GLQ7tPrUx8Fp6IDAb8hxWo/CB9B2037-8831-4EE7-A124-2E41B9AB1E19.JPG?o=At8971w5BAKKV1PLShRRDwtaG-L-h81M05djE6B9-Ogn&v=1&z=https%3A%2F%2Fp37-content.icloud.com%3A443&x=1&a=CAoggvte7pAGTT8uNddln93IsDkX0LpJEhS9qfq6CVi6bo0SaRCax_yw-y8Ymt6PtvsvIgEAUgT8hxWoaidhkkNnyUqt55U-cqYRaEg2BQk5rGYrD7_rc34GYuL6NB3ZwHKkrsJyJ7axZPAjjABgwkEu8WfRDNIFKLJ6mwkMbX-ld88v4eVpiaiPp4YX-Q&e=1648038768&r=0576db7c-6d51-48cb-adaf-39c9a7d99518-10&s=dn6O9IgI_6rLRhZ6IPqg3KAV8HI";
               break;
               case 2 :
               pic.src=
               "https://cvws.icloud-content.com/S/AVVw407Qq40wTxOvMsomYWv93MpU/94BF0625-8952-4FFE-986E-8C23222E858C.JPG?o=AhMAsg0y4u8HeuH2NCcP72qOERvOyRJzSX6g3POcpvGR&v=1&z=https%3A%2F%2Fp37-content.icloud.com%3A443&x=1&a=CAog4TcMkKrwE1RduzHu5zY4lKwaiHbUwZr9i6M5lrzyVxwSaRCax_yw-y8Ymt6PtvsvIgEAUgT93MpUaifPWFnMi7J1yh7lTIuvMZAQe_TyXFdJuB11gzzAwQvEE5tnO2dbL5JyJyisk0l-OtHmVx62_pjj1npKn4tdUpKlN8F1TAKzTZGbfYoWQLB_6g&e=1648038768&r=0576db7c-6d51-48cb-adaf-39c9a7d99518-9&s=U5EPlVAdqIzYlMN-9Kbw9Poazsc";
               break;
               case 3 :
               pic.src=
               "https://cvws.icloud-content.com/S/AWZxbbkfyhoJmXZjmqvVrVaNkdMn/EBC54208-C79E-48A3-B83F-9747E6FBDE35.JPG?o=AjCGPyLEmcNMsM-77GggNBMtShi8UOl260rEuUWEaO0r&v=1&z=https%3A%2F%2Fp37-content.icloud.com%3A443&x=1&a=CAog36HOv3icCFucPj8bpxppzVe5i-vxUdWrl5VxLjp123wSaRCax_yw-y8Ymt6PtvsvIgEAUgSNkdMnaidvEKtDNlQlZDrSMYF1HmWJBAG23gg9npW_cvitj3z4rVxjECPpdKFyJ1OaWgnYFAiUT1Y-daKaUxJfhhvpAP_dhj7_REHhiNleCYB8-59RHA&e=1648038768&r=0576db7c-6d51-48cb-adaf-39c9a7d99518-12&s=IXn0K7m8R8D0JioPtg-pkbCl3jA";
               break;
               default:
               pic.src=
               "https://cvws.icloud-content.com/S/AWKoIo_bnHaSkW3ZwzH7B_r2dxaK/3800278A-9A62-4E62-9833-0C0F5F1E3287.JPG?o=AjMLO0HDeFF1SbkTMLW_V-bA0vtL43gvQw5TFSxDZE1W&v=1&z=https%3A%2F%2Fp37-content.icloud.com%3A443&x=1&a=CAogleFdL6lyWQwZ369ng4614rcls-m-2JXTK3alcwZoa6YSaRCYx_yw-y8YmN6PtvsvIgEAUgT2dxaKaic7GbCLV7IJEG6CwrHcsvQuZOtgU4NdfsHIypTXiYxuCcpVGMswLYNyJ6zFL6tzr71Qp6eNW28bmES7MrDQuG0n5HjGOB17iHCY1UFd8EIkqw&e=1648038768&r=0576db7c-6d51-48cb-adaf-39c9a7d99518-1&s=4Pw2Z8yNpIn6Y9wBm3QnXUb4BY4";
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
        pic.onclick=function(){
            ff=this.src.lastIndexOf('/');
            pathname=this.src.substring(0,ff+1);
            window.open(pathname+"case_info2.html");
        }
