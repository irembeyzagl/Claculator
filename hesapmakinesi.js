var optDurum=false,opt="",sonuc=0

var btnRakam=document.querySelectorAll('.btnRakam')
var textGösterge=document.querySelector('#gösterge')
var btnOpt=document.querySelectorAll('.btnOpt')//işlem butonlarının kontrolü
var islem=document.querySelector('#islem')
var btnC=document.querySelector('.btnC')
var btnCE=document.querySelector('.btnCE')
var btnEsit=document.querySelector('.btnEsit')
var btnNokta=document.querySelector('.btnNokta')



btnRakam.forEach(function(element){
    element.onclick=function(e){
       
        if(textGösterge.textContent=='0' || optDurum){
            textGösterge.textContent=' '
        }
       
textGösterge.textContent+=this.textContent
optDurum=false
    }
})
btnOpt.forEach(function(element){
    element.onclick=function(e){
        optDurum=true
        var yeniOpt=this.textContent
        //işlem paneli tamam
        islem.textContent=islem.textContent+' '+textGösterge.textContent+' '+yeniOpt
        //sonucu yazalım
        switch(opt){//hafızadaki opt işlemi

case '+':textGösterge.textContent=(sonuc + Number(textGösterge.textContent))
break
case '-':textGösterge.textContent=(sonuc - Number(textGösterge.textContent))
break
case '/':textGösterge.textContent=(sonuc / Number(textGösterge.textContent))
break
case '*':textGösterge.textContent=(sonuc * Number(textGösterge.textContent))
break
default:
    break
        }
        sonuc=Number(textGösterge.textContent)
        opt=yeniOpt
    }
})
btnC.onclick=function(e){
    textGösterge.textContent=' '
}
btnCE.onclick=function(e){
    textGösterge.textContent=' '
    islem.textContent=' '
    sonuc=0
}
btnEsit.onclick=function(e){
    islem.textContent=' '
    optDurum=true
    switch(opt){

case '+':textGösterge.textContent=(sonuc + Number(textGösterge.textContent))
break
case '-':textGösterge.textContent=(sonuc - Number(textGösterge.textContent))
break
case '/':textGösterge.textContent=(sonuc / Number(textGösterge.textContent))
break
case '*':textGösterge.textContent=(sonuc * Number(textGösterge.textContent))
break
default:
    break
        }
        sonuc=Number(textGösterge.textContent)
        textGösterge.textContent=sonuc
        sonuc=0
        opt=' '
}
btnNokta.onclick=function(e){

    if(!optDurum && !textGösterge.textContent.includes('.'))
    {
        textGösterge.textContent+='.'
    }
    else if(optDurum){
        textGösterge.textContent='0'
    }
    if(!textGösterge.textContent.includes('.'))
    {
        textGösterge.textContent+='.'
    }
optDurum=false


}
