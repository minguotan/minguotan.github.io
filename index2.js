        //输入框点击清空
        // var clear=document.querySelector(".searchbar");
        // console.log(clear);//此处为啥是null
        // clear.onlick="";
        var i=0;
        function change(){
            switch(i){
                case 0 :
               document.getElementById("num").src=
               "../02-CSStext/ahbei lecture.jpg";
               break;
               case 1 :
               document.getElementById("num").src=
               "../02-CSStext/077-078.jpg";
               break;
               case 2 :
               document.getElementById("num").src=
               "../02-CSStext/109.jpg";
               break;
               case 3 :
               document.getElementById("num").src=
               "../02-CSStext/080.jpg";
               break;
               default:
               document.getElementById("num").src=
               "../02-CSStext/ahbei lecture.jpg";
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