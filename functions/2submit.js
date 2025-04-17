function submit(){
    let parms = {
        name : document.getElementById("name").value,
        catnumber : document.getElementById("catnumber").value,
        email : document.getElementById("email").value,
        message : document.getElementById("summaryContent").innerHTML,
    } //has curly bracket x3 on email js template to format

    emailjs.send("service_75kg8pm","template_ybeyb75",parms).then(alert("email sent!"))
}