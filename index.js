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
               "https://raw.githubusercontent.com/minguotan/img/main/096.jpg";
               break;
               case 1 :
               pic.src=
               "https://raw.githubusercontent.com/minguotan/img/main/102.jpg";
               break;
               case 2 :
               pic.src=
               "https://raw.githubusercontent.com/minguotan/img/main/107.jpg";
               break;
               case 3 :
               pic.src=
               "https://raw.githubusercontent.com/minguotan/img/main/109.jpg";
               break;
               default:
               pic.src=
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
        pic.onclick=function(){
            ff=this.src.lastIndexOf('/');
            pathname=this.src.substring(0,ff+1);
            window.open(pathname+"case_info2.html");
        }
