var len;
var flagUC;
var flagLC;
var flagD;
var flagSC;
var value=10;
var uc="";
var lc="";
var d="";
var sc="";
var password;


$(document).on('input', '#slider', function(e) {
    value=parseInt($(this).val());
    $('#lenVal').html('Length Value:'+value);
    e.preventDefault();
});

$(".btn").on('click',function(e){
        flagUC=$('#cboxUC').is(":checked");
        flagLC=$('#cboxLC').is(":checked");
        flagD=$('#cboxD').is(":checked");
        flagSC=$('#cboxSC').is(":checked");
       generatePassword(value,flagUC,flagLC,flagD,flagSC);
       e.preventDefault();
})


function generateUc(length){
    let uc1="";
    for(let i=1;i<=length;i++)
    {
        let r=65+Math.floor(Math.random()*25);
        uc1+=String.fromCharCode(r);
    }
    uc+=uc1;
}

function generateLc(length){
    let lc1="";
    for(let i=1;i<=length;i++)
    {
        let r=97+Math.floor(Math.random()*25);
        lc1+=String.fromCharCode(r);
    }
    lc+=lc1;
}

function generateDigits(length){
    let d1="";
    for(let i=1;i<=length;i++)
    {
        let r=48+Math.floor(Math.random()*10);
        d1+=String.fromCharCode(r);
    }
    d+=d1;
}

function generateSpecialChar(length){
    var scarray=['!','@','#','$','*','+','_','-','=','^',',','.']
    let sc1="";
    for(let i=1;i<=length;i++)
    {
        let r=Math.floor(Math.random()*12);
        sc1+=scarray[r];
    }
    sc+=sc1;
}

function generatePassword(v,fUc,fLc,fd,fsc,e){
    
    var total=fUc+fLc+fd+fsc;
    var l1=0,l2=0,l3=0,l4=0;
    if(fUc){
        l1=Math.floor(v/total);
        generateUc(l1);
    }
    if(fLc){
        l2=Math.floor(v/total);
        generateLc(l2);
    }
    if(fd){
        l3=Math.floor(v/total);
        generateDigits(l3);
    }
    if(fsc){
        l4=Math.floor(v/total);
        generateSpecialChar(l4);
    }
    var remain=v-(l1+l2+l3+l4);
    if(remain!=0){
        if(fUc){
            generateUc(remain);
        }
        else if(fLc){
            generateLc(remain);
        }
        else if(fd){
            generateDigits(remain);
        }
        else{
            generateSpecialChar(remain);
        }
    }
    
    var pass=uc+""+lc+""+""+d+""+sc;
    console.log(pass);
    var pass1="";
    var pass2="";
    var pass3="";
    if(v>8){
        var r1=Math.floor(Math.random()*8);
        var r2=8+Math.floor(Math.random()*10);
        pass1=pass.substring(0,r1);
        pass2=pass.substring(r1,r2);
        if(r2!=v){
            pass3=pass.substring(r2);}
        var ar=[`${pass1}`,`${pass2}`,`${pass3}`]
        var n1=Math.floor(Math.random()*3);
        var n2=(n1+1)%3;
        var n3=(n2+1)%3;
        password=ar[n1]+ar[n2]+ar[n3];
    }
    else{
        password=pass;
    }
    $(".passwordBox").html(`${password}`);
    uc="";
    lc="";
    d="";
    sc="";
}


$("#copy").on('click',function(){
    navigator.clipboard.writeText(`${password}`)
    .then(() => {
        $(".cpymsg").html("copied")
        setTimeout(()=>{
            $(".cpymsg").html("")
        },1000)
        console.log('Content copied to clipboard');
      })
    })

