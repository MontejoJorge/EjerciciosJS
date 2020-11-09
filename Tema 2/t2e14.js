var str = "";

for (i=0;i<50;i++){
    str = str+i;
    if (i%4==0){
        str = str+" (Multiplo de 4)"+"\n";
    } else {
        str=str+"\n";
    }

    if (i%5==0){
        str=str+"_____________"+"\n";
    }
}
alert(str)