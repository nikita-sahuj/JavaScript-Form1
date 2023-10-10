document.getElementById("ns1").addEventListener("click",myTheme1);
document.getElementById("ns2").addEventListener("click",myTheme2);
document.getElementById("ns3").addEventListener("click",myTheme3);
document.getElementById("ns4").addEventListener("click",myTheme4);
document.getElementById("ns1").addEventListener("click",myColor);
document.getElementById("ns1").addEventListener("click",myShadow);
document.getElementById("ns1").addEventListener("click",myShadow1);

function myTheme1()
{
    let data=document.getElementById("txt1").value;
    document.getElementById("BoxData").innerHTML=data;
    let dataObj=document.getElementById("BoxData");
    dataObj.style.fontFamily="Harlow Solid Italic";
}

function myTheme2()
{
    let data=document.getElementById("txt1").value;
    document.getElementById("BoxData").innerHTML=data;
    let dataObj=document.getElementById("BoxData");
    dataObj.style.fontFamily="Bernard MT Condensed";
}

function myTheme3()
{
    let data=document.getElementById("txt1").value;
    document.getElementById("BoxData").innerHTML=data;
    let dataObj=document.getElementById("BoxData");
    dataObj.style.fontFamily="Engravers MT";
}

function myTheme4()
{
    let data=document.getElementById("txt1").value;
    document.getElementById("BoxData").innerHTML=data;
    let dataObj=document.getElementById("BoxData");
    dataObj.style.fontFamily="Forte";
}
function myColor()
{
    let dataObj=document.getElementById("BoxData");
    dataObj.style.color=document.getElementById("myclr").value;
}
function myShadow()
{
    let dataObj=document.getElementById("BoxData");
    dataObj.style.textShadow="0px 3px 3px lightblue";

}
function myShadow1()
{
    let dataObj=document.getElementById("BoxData");
    dataObj.style.textShadow=" ";
}
