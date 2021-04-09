let navLogin = document.querySelectorAll(".nav__item-link")
    navLogin.forEach((el) => {
        el.onclick = () => {
            document.querySelector(".login").classList.add("login-active")
            setTimeout(() => document.querySelector(".nav__list").style.opacity = "0", 200)
        }
    })
document.querySelector(".login-close").onclick = () => {
    document.querySelector(".login").classList.remove("login-active")
    document.querySelector(".nav__list").style.opacity = "1"
}
document.querySelector(".login-submit").onclick = () => {
    document.querySelector(".login").classList.remove("login-active")
    document.querySelector(".nav__list").style.opacity = "1"
}

$(document).ready(function () {
    $(".peoples__cards-more").hide()
    $(".peoples__more").click((event) => {
        $(".person-more").slideToggle("slow")
        event.preventDefault();
    })
})