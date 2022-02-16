class send{
    constructor(_name, _phone, _email, _kindOfCourseIndividual, _kindOfCourseGrupe, _kindOfCourseOnline, _message){
        this.name = _name;
        this.phone = _phone;
        this.email = _email;
        this.kindOfCourseIndividual = _kindOfCourseIndividual;
        this.kindOfCourseGrupe = _kindOfCourseGrupe;
        this.kindOfCourseOnline = _kindOfCourseOnline;
        this.message = _message;
    }


        notification(){
            return this.email + this.kindOfCourseIndividual
        }


}

window.addEventListener('load', function(e){
    function changeBg(){
        const images = [
            'url("images/img1.JPG")',
            'url("images/Droga.JPG")',
            'url("images/Koloseum.jpg")',
            'url("images/Fontanna_nowa.png")'
        ]
        
        const section = document.querySelector('section')
        const bg = images[Math.floor(Math.random() * images.length)];
        section.style.background = bg;
        section.style.backgroundSize = "100% 100%"
        
    }
    setInterval(changeBg, 5000)
})

document.querySelector("#wyslij").addEventListener("click", function(e) {
    e.preventDefault();

    let name = document.getElementById("imieNaziwsko").value;
    let phone = document.getElementById("tel").value;
    let email = document.getElementById("eMail").value;
    let kindOfCourseIndividual = document.getElementById("individualClasses").value;
    let kindOfCourseGrupe = document.getElementById("groupClasses").value;
    let kindOfCourseOnline = document.getElementById("onlineClasses").value;
    let message = document.getElementById("message").value;
    console.log(name)


    let mess = new send(name, phone, email, kindOfCourseIndividual, kindOfCourseGrupe, kindOfCourseOnline, message);
    console.log(mess.notification())

});