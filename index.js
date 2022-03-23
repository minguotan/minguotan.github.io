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
               "https://s1.ax1x.com/2022/03/23/q3CbPH.jpg";
               break;
               case 1 :
               pic.src=
               "https://s1.ax1x.com/2022/03/23/q3PVs0.jpg";
               break;
               case 2 :
               pic.src=
               "https://s1.ax1x.com/2022/03/23/q3PmZT.jpg";
               break;
               case 3 :
               pic.src=
               "https://s1.ax1x.com/2022/03/23/q3Pkzn.jpg";
               break;
               default:
               pic.src=
               "https://s1.ax1x.com/2022/03/23/q3CbPH.jpg";
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
