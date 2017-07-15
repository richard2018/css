//div等高控制
function columnHeight(){ 
        var i,oh,hh,h=0,dA=document.w3cooleqc,an=document.w3cooleqa;
        if(dA && dA.length){
                an=1;
                for(i=0;i<dA.length;i++){
                        dA[i].style.height='auto';
                        }
                for(i=0;i<dA.length;i++){
                        oh=dA[i].offsetHeight;
                        h=(oh>h)?oh:h;
                }
                for(i=0;i<dA.length;i++){
                        if(an){
                                dA[i].style.height=h+'px';
                        }else{
                                equalActive(dA[i].id,dA[i].offsetHeight,h);
                        }
                }
                if(an){
                        for(i=0;i<dA.length;i++){
                                hh=dA[i].offsetHeight;
                        if(hh>h){
                                dA[i].style.height=(h-(hh-h))+'px';
                                }
                        }
                }else{
                        document.w3cooleqa=1;
                }
                        document.w3cooleqth=document.body.offsetHeight;
                        document.w3cooleqtw=document.body.offsetWidth;
                }
}
function blanceHeight(){ 
        if(document.w3cooleqth!=document.body.offsetHeight||document.w3cooleqtw!=document.body.offsetWidth){
                columnHeight();
        }
}
function equalColumns(){ 
        if(document.getElementById){
                document.w3cooleqc=new Array;
                for(i=0;i<arguments.length;i++){
                        document.w3cooleqc[i]=document.getElementById(arguments[i]);
                }
                setInterval("blanceHeight()",10);
        }
}
function equalActive(el,h,ht){ 
        var sp=1000,inc=1000,nh=h,g=document.getElementById(el),oh=g.offsetHeight,ch=parseInt(g.style.height);
        ch=(ch)?ch:h;
        var ad=oh-ch,adT=ht-ad;nh+=inc;nh=(nh>adT)?adT:nh;g.style.height=nh+'px';
        oh=g.offsetHeight;
        if(oh>ht){
                nh=(ht-(oh-ht));g.style.height=nh+'px';
        }
        if(nh<adT){setTimeout("equalActive('"+el+"',"+nh+","+ht+")",sp);}
}
//调用方法<body onload="equalColumns('subMainBox','m_content','sideBox')">
//subMainBox，m_content，sideBox就是你希望高度相等的div的id值