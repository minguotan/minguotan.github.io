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
               "https://raw.githubusercontent.com/minguotan/img/main/108.jpg";
               break;
               default:
               document.getElementById("num").src=
               "https://raw.githubusercontent.com/minguotan/img/main/096.jpg";
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
