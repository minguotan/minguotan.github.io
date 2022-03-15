        //输入框点击清空
        // var clear=document.querySelector(".searchbar");
        // console.log(clear);//此处为啥是null
        // clear.onlick="";
        var i=0;
        function change(){
            switch(i){
                case 0 :
               document.getElementById("num").src=
               "https://raw.githubusercontent.com/minguotan/img/main/096.jpg";
               break;
               case 1 :
               document.getElementById("num").src=
               "https://raw.githubusercontent.com/minguotan/img/main/102.jpg";
               break;
               case 2 :
               document.getElementById("num").src=
               "https://raw.githubusercontent.com/minguotan/img/main/107.jpg";
               break;
               case 3 :
               document.getElementById("num").src=
               ".https://raw.githubusercontent.com/minguotan/img/main/108.jpg";
               break;
               default:
               document.getElementById("num").src=
               "https://raw.githubusercontent.com/minguotan/img/main/109.jpg";
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
