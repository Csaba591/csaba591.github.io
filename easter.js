const text = document.getElementById('text');
const btnOk = document.getElementById('btnOk');
const input = document.getElementById('input');
const done = document.getElementById('done');

const countries = ['Törökország', 'Ukrajna', 'Lengyelország', 'Izland', 'Portugália', 'Ausztrália', 'Norvégia'];
const texts = [
    'Igaz, az itt lakó 84 millió ember ~90%-a muszlim és csak 0,5% keresztény, de a Paskalya Çöreği nevű kalácsuk azért egész finom húsvéti ételnek tűnik!',
    'Tojásfestés? Pysanka és krashenka? Hmm, ez hol lehet?',
    'Śmigus-dyngus... úgy tűnik máshol sem maradnál szárazon!',
    'Hideg van. Az égen színes fénycsíkok esténként. Vagy akár szinte egész nap, mert olyan rövid a nappal... A húvéti nyúl még a tengert is átszeli, hogy mindenkinek jusson Páskaegg!',
    'Na jó, együnk...\nCabrito tálalva... hamnyamnyam.\nEgy kis Folar... hamm.\nÉs befejezésül: Pão-de-Ló. Nem, nem is volt négy lába...',
    'Az aranyos, fehér szőrű füles itt nem is volt őshonos és ma sem örvend túl jó hírnévnek. Helyette egy távoli (őshonos és erszényes) rokona lett a húsvét jelképe; ő a bilby! Szegény viszonylag ritka állat, úgyhogy a \"húsvéti bilby\"-t sem minden gyerek ismeri.',
    'Első esély, hogy élvezzék a napsütést, de utolsó a síelésre? Krimimánia húsvétkor? Ez a Kvikk Lunsj csoki is finomnak tűnik :)'
];

let current = 0;
text.innerText = texts[current];
let letters = '';

btnOk.onclick = () => {
    if (input.value !== countries[current]) {
        alert('Nem talált :(');
        return;
    }

    letters += countries[current][0];
    alert('Juhú, még egy betű!\nEddig megfejtett betűk: ' + letters);
    current++;
    text.innerText = texts[current];
    input.value = '';

    if (current === countries.length) {
        text.style.display = 'none';
        input.style.display = 'none';
        btnOk.style.display = 'none';
        done.style.display = 'block';
    }
}
