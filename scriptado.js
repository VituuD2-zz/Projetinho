var fblock = document.querySelector('div#block1')
var sblock = document.querySelector('div#block2')

fblock.addEventListener('click', clicar)
function clicar() {
    window.open('C:\Users\OVER\Documents\CursoJS\Aula12ex\test01\blindspot.html', '_self')
}
sblock.addEventListener('click', clica)
function clica() {
    window.open('C:\Users\OVER\Documents\CursoJS\Aula12ex\test01\lcdp.html', '_self')
}
var logof = document.querySelector('div#logo1')
var logos = document.querySelector('div#logo2')

logof.addEventListener('click', clicarr)
function clicarr() {
    window.open('https://www.netflix.com/ar-en/title/80058486')
}
logos.addEventListener('click', clicar2)
function clicar2() {
    window.open('https://www.netflix.com/pt/title/80192098')
}
