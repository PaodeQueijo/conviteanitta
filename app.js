
$(function () {

    /*
        $("h1,h2").click(function () {
            alert("perigo cachorro bravo")
        })
    
        $("input").click(function () {
            alert("perigo cachorro bravo2")
        })
    */
    /*
        $('#contato').submit(function(e){
            e.preventDefault();
           nome =  $("#nome").val()
           if(nome !="mario" && nome !="eric") nome="viado"
            alert("meu nome "+nome)
        })
    */
    $("#nacimento").val()

    function enviardados(e) {
        e.preventDefault();
        nome = $("#nome").val()
        email = $("#email").val()
        nacimento = $("#nacimento").val()
        cpf = $("#cpf").val()
        if (nome != "orlando") {
            nome = "boca mucha"


        }
        text = "o cadastro em nome de " + nome + " cpf: " + cpf + " email: " + email + "nacimento: " + nacimento

        alert(text)

    }
    $("#contato").submit(enviardados)





    function clickemail() {
        //alert("casa branca")
        text = $("#email").val()
        if (text == "odnalro" || text=="Michely") {
            text = "galoooo"

        }


        alert("casa branca " + text)
    }
    //$("#email").click(clickemail)



    function clicknome() {
        alert("praça sete")
    }
    function test(nome) {
        return nome + " e viado"
    }
    //$("#nome").click(clicknome)
})
