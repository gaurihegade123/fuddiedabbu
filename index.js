document.getElementById("btn").addEventListener("click",mfunction);
function mfunction(){

 alert("form submitted successfully");
}

function changeContent(content)
{
    //alert("changing Content to " + content);
    if (content == "home")
    {
        document.getElementById("mainContent").hidden = false;
        document.getElementById("aboutContent").hidden = true;
        document.getElementById("servicesContent").hidden = true;
        document.getElementById("contactContent").hidden = true;
    }
    else if (content == "about")
    {
        document.getElementById("mainContent").hidden = true;
        document.getElementById("aboutContent").hidden = false;
        document.getElementById("servicesContent").hidden = true;
        document.getElementById("contactContent").hidden = true;
    }
    else if (content == "services")
    {
        document.getElementById("mainContent").hidden = true;
        document.getElementById("aboutContent").hidden = true;
        document.getElementById("servicesContent").hidden = false;
        document.getElementById("contactContent").hidden = true;
    }
    else if (content == "contactus")
    {
        document.getElementById("mainContent").hidden = true;
        document.getElementById("aboutContent").hidden = true;
        document.getElementById("servicesContent").hidden = true;
        document.getElementById("contactContent").hidden = false;
    }
}

function getInnerHtml(content)
{
    if (content == 'about')
    {
    }

    return "";
}

function registration(){
      var myname=document.getElementById('name').value   
      var email=document.getElementById('email').value
      var phone=document.getElementById('phone').value
      var pw=document.getElementById('pworld').value
      var cpw=document.getElementById('cpworld').value
    //   var phone=document.getElementById('phone').value
}

