function show2015(){

    var htmlFinal = "";

    htmlFinal += "<h3>OLIMPÍADA DO CONHECIMENTO</h3>";
    htmlFinal += "<h4>-</h4>";
    htmlFinal += "<p>*Participante da Olimpiada do Conhecimento até a fase estadudal via SENAI</p>";
    document.getElementById("tabela").innerHTML = htmlFinal
}

function show2018(){

    var htmlFinal = "";

    htmlFinal += "<h3>IESB</h3>";
    htmlFinal += "<h4>-</h4>";
    htmlFinal += "<p>*Grupo vencedor do prêmio de melhor arte 3D nas apresentações de pitch no IESB, além do segundo lugar na votação de melhor jogo pelo público online</p>";
    document.getElementById("tabela").innerHTML = htmlFinal
}

function show2019(){

    var htmlFinal = "";

    htmlFinal += "<h3>SUPERGEEKS</h3>";
    htmlFinal += "<h4>-</h4>";
    htmlFinal += "<p>*Assistente administrativo (Jan/Fev)</p>";
    htmlFinal += "<p>*Instrutor Júnior (Fev/Dez)</p>";
    document.getElementById("tabela").innerHTML = htmlFinal
}

function show2020(){

    var htmlFinal = "";

    htmlFinal += "<h3>SUPERGEEKS</h3>";
    htmlFinal += "<h4>-</h4>";
    htmlFinal += "<p>*Instrutor Júnior (Jan/Dez)</p>";
    htmlFinal += "<p>*Coordenador pedagógico (Jul/Dez)";
    htmlFinal += "<p>*Coordenação e acompanhamento dos alunos na OBI (Mai/Nov)</p>";
    document.getElementById("tabela").innerHTML = htmlFinal
}

function show2021(){

    var htmlFinal = "";

    htmlFinal += "<h3>SUPERGEEKS</h3>";
    htmlFinal += "<h4>-</h4>";
    htmlFinal += "<p>*Instrutor Júnior (Jan/Dez)</p>";
    htmlFinal += "<p>*Coordenador pedagógico (Jan/Jul)";
    htmlFinal += "<p>*Coordenação e acompanhamento dos alunos na OBI (Mai/Nov)</p>";
    document.getElementById("tabela").innerHTML = htmlFinal
}

function show2022(){

    var htmlFinal = "";

    htmlFinal += "<h3>SUPERGEEKS</h3>";
    htmlFinal += "<h4>-</h4>";
    htmlFinal += "<p>*Instrutor Pleno (Jan/Ago)</p>";
    document.getElementById("tabela").innerHTML = htmlFinal
}

function showTerra(){
    var idVideo = document.getElementById("video-jogo")
    var textoVideo = document.getElementById("texto-jogo")
    var htmlfinalvideo = ""
    var htmlfinaltexto = ""


    htmlfinalvideo += '<video width="320" height="300" controls poster="./imagens/A terra Perdida - logo.jpg">'
    htmlfinalvideo += '<source src="./videos/A terra perdida - trailer.mp4" type="video/mp4">' 
    htmlfinalvideo += '</video>';                          
    idVideo.innerHTML = htmlfinalvideo                            

    htmlfinaltexto += "<h1 id='titulo-jogo'> A terra perdida </h1>"
    htmlfinaltexto += "<p>“A terra perdida” é um jogo infinity run 2D, com uma temática selvagem, que mostra uma disputa de território por índios. O objetivo do jogo se  trata de destruir o maior número de inimigos possível e recuperar a maior quantidade possível de ouro deixado pelo caminho </p>"
    htmlfinaltexto += "<button> Jogar </button>"
    textoVideo.innerHTML = htmlfinaltexto
    document.getElementById("titulo-jogo").style.fontSize = "5em"
}

function showPrison(){
    var idVideo = document.getElementById("video-jogo")
    var textoVideo = document.getElementById("texto-jogo")
    var htmlfinalvideo = ""
    var htmlfinaltexto = ""


    htmlfinalvideo += '<video width="320" height="300" controls poster="./imagens/Prison Escape - logo.jpg">'
    htmlfinalvideo += '<source src="./videos/Prison Escape - trailer.mp4" type="video/mp4">' 
    htmlfinalvideo += '</video>';                          
    idVideo.innerHTML = htmlfinalvideo                          

    htmlfinaltexto += "<h1 id='titulo-jogo'> Prison Escape </h1>"
    htmlfinaltexto += '<p>“Prison Escape” é um jogo onde você acorda em um lugar desconhecido, se vê preso e com um único objetivo, escapar do local o mais rápido possível, passando por desafios que vão desafiar sua mente e suas habilidades </p>'
    htmlfinaltexto += "<button> Jogar </button>"
    textoVideo.innerHTML = htmlfinaltexto

}

function showSoulless(){
    var idVideo = document.getElementById("video-jogo")
    var textoVideo = document.getElementById("texto-jogo")
    var htmlfinalvideo = ""
    var htmlfinaltexto = ""


    htmlfinalvideo += '<video width="320" height="300" controls poster="./imagens/Soulless - logo.jpg">'
    htmlfinalvideo += '<source src="./videos/Soulless - trailer.mp4" type="video/mp4">' 
    htmlfinalvideo += '</video>';                          
    idVideo.innerHTML = htmlfinalvideo                            

    htmlfinaltexto += "<h1 id='titulo-jogo'> Soulless </h1>"
    htmlfinaltexto += "<p>Em um universo distópico governado por adultos que estão isentos de sentimentos, um robô considerado como falha parte em uma jornada para entender o significado dos sentimentos </p>"
    htmlfinaltexto += "<button> Jogar </button>"
    textoVideo.innerHTML = htmlfinaltexto
}