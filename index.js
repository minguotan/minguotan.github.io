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
               "https://cvws.icloud-content.com/S/AWKoIo_bnHaSkW3ZwzH7B_r2dxaK/3800278A-9A62-4E62-9833-0C0F5F1E3287.JPG?o=AuodAapD7Z-YlHsPxt4mNQZC-4jbj33gzmR8Qrm4mLqV&v=1&z=https%3A%2F%2Fp37-content.icloud.com%3A443&x=1&a=CAoghP6oAgspkJiDWLeQ5LrRCOafRcW7JJ-cQ0Luy3IoJOoSaRCSurKx-y8YktHFtvsvIgEAUgT2dxaKaie1JmXSsWOeNR3EJir_M0sowWCwxtPtoAu7CPS8TGmgk8DwT3f9mTRyJ2wNH2AoUGqek2n8jXiHHq5pm2lEe8AyQ-vhAaAaWVuWGQMa_dYJVw&e=1648039651&r=ff2ccc8f-b013-475c-a4e5-2824b8f0677c-8&s=-Cegzn8zC-okMuyHyU74MP5vRcQ";
               break;
               case 1 :
               pic.src=
               "https://cvws.icloud-content.com/S/AVVw407Qq40wTxOvMsomYWv93MpU/94BF0625-8952-4FFE-986E-8C23222E858C.JPG?o=Av3uFWmf4F0nQRbCA0Rflmgtn3TTIcN82ejbycRoRtSt&v=1&z=https%3A%2F%2Fp37-content.icloud.com%3A443&x=1&a=CAogawCn_D9t4DYToQCaCGsX44O-qociMonMBriY6cG7opMSaRCRurKx-y8YkdHFtvsvIgEAUgT93MpUaic4oo-M6hONztN-h4EYgmT396P9ABysS_OH7j66oDik-mxjtNFWu_NyJ5nzdCQVIHDEPtOolAAhVzMcPr40nNk0eRoSxvMYT098QIW8Qy4RVA&e=1648039651&r=ff2ccc8f-b013-475c-a4e5-2824b8f0677c-4&s=3lGeyV8zeQelCFvhMULz85-EnPw";
               break;
               case 2 :
               pic.src=
               "https://cvws.icloud-content.com/S/Aee7i1GLQ7tPrUx8Fp6IDAb8hxWo/CB9B2037-8831-4EE7-A124-2E41B9AB1E19.JPG?o=AmhD49G0jhU0RXZdCsaOM-oXcZ1z1oyQDHAABsSoXr20&v=1&z=https%3A%2F%2Fp37-content.icloud.com%3A443&x=1&a=CAognL1bTAsLvyMC8rPP3WalyRRBFHqR5bR7rEW4dyl8vVASaRCSurKx-y8YktHFtvsvIgEAUgT8hxWoaic2BgE6DVIyIxXvmPEL_UiQKtJz7sRPjRs45-VhSY0JdLascTlEp45yJ0VCfcbMUjlHQMMak6lFg9fmEuPt9dguzS29dQQZu-O_ZHAD-zYQCA&e=1648039651&r=ff2ccc8f-b013-475c-a4e5-2824b8f0677c-9&s=-qR8MAfN3NQF--PHMLY9oat_Uwk";
               break;
               case 3 :
               pic.src=
               "https://cvws.icloud-content.com/S/AWZxbbkfyhoJmXZjmqvVrVaNkdMn/EBC54208-C79E-48A3-B83F-9747E6FBDE35.JPG?o=AvIe3IgRVs_cmlPWK8fPuf6O1YTpdLNUdZbPM1xbgErU&v=1&z=https%3A%2F%2Fp37-content.icloud.com%3A443&x=1&a=CAogyj2hM39ruU5xJqAy26Dn0RGo3_uLXORNgLsC2839K2oSaRCQurKx-y8YkNHFtvsvIgEAUgSNkdMnaiemQzdpJpPlFQOkZcr_YNpsU0w2JPDH4t_GtxEvpxSNjJYcjSZxc9xyJwGKn5yRmpOMKSGNBraqn77MVpPr51E6wXNvUw7ybg1nYCxMnJY-fQ&e=1648039651&r=ff2ccc8f-b013-475c-a4e5-2824b8f0677c-2&s=PMUWmIKvf1ZPjEUmwKWuvaTM0Mw";
               break;
               default:
               pic.src=
               "https://cvws.icloud-content.com/S/AWKoIo_bnHaSkW3ZwzH7B_r2dxaK/3800278A-9A62-4E62-9833-0C0F5F1E3287.JPG?o=AuodAapD7Z-YlHsPxt4mNQZC-4jbj33gzmR8Qrm4mLqV&v=1&z=https%3A%2F%2Fp37-content.icloud.com%3A443&x=1&a=CAoghP6oAgspkJiDWLeQ5LrRCOafRcW7JJ-cQ0Luy3IoJOoSaRCSurKx-y8YktHFtvsvIgEAUgT2dxaKaie1JmXSsWOeNR3EJir_M0sowWCwxtPtoAu7CPS8TGmgk8DwT3f9mTRyJ2wNH2AoUGqek2n8jXiHHq5pm2lEe8AyQ-vhAaAaWVuWGQMa_dYJVw&e=1648039651&r=ff2ccc8f-b013-475c-a4e5-2824b8f0677c-8&s=-Cegzn8zC-okMuyHyU74MP5vRcQ";
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
