// function sendemail(){
//     var params={
//         name:document.getElementById("name").value ,
//         email:document.getElementById("email").value,
//         message:document.getElementById("message").value, 
//     };
//     const serviceID=;
//     const templateID=;
    
//     emailjs
//     .send(serviceID , templateID, params)
//     .then(res=>{
//         document.getElementById("name").value=" ";
//         document.getElementById("email").value=" ";
//         document.getElementById("message").value=" ";
//         console.log(res);
//         alert("Send message")
//     })
//     .catch((err)=>console.log(err));

// function sendemail() {
//     var params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value,
//     };
//     const serviceID = "service_p4uvl2a";
//     const templateID = "template_2jr2k6t";
    
//     emailjs.send(serviceID, templateID, params)
//         .then(res => {
//             document.getElementById("name").value = "";
//             document.getElementById("email").value = "";
//             document.getElementById("message").value = "";
//             console.log(res);
//             alert("Message sent successfully!");
//         })
//         .catch(err => console.error("Error sending email:", err));
// }
