/**
 * TODO: icone
 * TODO: export to excel
 * TODO: save
 */

window.addEventListener('load', function () {
    console.log('window loaded');
    txt.focus();
    LoadTodo();
});

// --- BOTTONI
let btnAggiungi = document.getElementById('btnAdd');
let btnSalva = document.getElementById('btnSalva');
let btnClear = document.getElementById('btnClear');

// --- VARIABILI
let txt = document.getElementById('txt');
let importo = document.getElementById('importo');
let progressivo = document.getElementById('progressivo');
let table = document.getElementById('myTable');

let colazione = 0;
let pranzo = 0;
let cena = 0;
let snack = 0;
let spostamenti = 0;
let benzina = 0;
let hotel = 0;
let regali = 0;
let abbigliamento = 0;
let spesa = 0;
let debiti = 0;
let giochi = 0;
let cinema = 0;
let varie = 0;


// --- COUNTERS
let id = 0;
let saldoZero = 0;

// --- DATA
let date = new Date().toLocaleString().split(',')[0];
;
// --- ADD
btnAggiungi.addEventListener('click', function () {
    if (importo.value === '') {
        alert('Inserisci un importo');
    } else {
        saldoZero = parseFloat(saldoZero) + parseFloat(importo.value);
        progressivo.innerHTML = `Saldo € ${saldoZero}`;
    
        Aggiungi();
        Salva();
        importo.value = '';
        importo.focus();
        id++;
    }
});

// --- AGGIUNGI
function Aggiungi(){
    switch (txt.value){
        case "colazione":
        table.rows[1].cells[1].innerHTML = parseFloat(colazione) + parseFloat(importo.value);
            colazione = parseFloat(colazione) + parseFloat(importo.value);
        break;

        case "pranzo":
        table.rows[2].cells[1].innerHTML = parseFloat(pranzo) + parseFloat(importo.value);
            pranzo = parseFloat(pranzo) + parseFloat(importo.value);
        break;

        case "cena":
        table.rows[3].cells[1].innerHTML = parseFloat(cena) + parseFloat(importo.value);
            cena = parseFloat(cena) + parseFloat(importo.value);
        break;

        case "snack":
        table.rows[4].cells[1].innerHTML = parseFloat(snack) + parseFloat(importo.value);
            snack = parseFloat(snack) + parseFloat(importo.value);
        break;

        case "spostamenti":
        table.rows[5].cells[1].innerHTML = parseFloat(spostamenti) + parseFloat(importo.value);
            spostamenti = parseFloat(spostamenti) + parseFloat(importo.value);
        break;

        case "benzina":
        table.rows[6].cells[1].innerHTML = parseFloat(benzina) + parseFloat(importo.value);
            benzina = parseFloat(benzina) + parseFloat(importo.value);
        break;

        case "hotel":
        table.rows[7].cells[1].innerHTML = parseFloat(hotel) + parseFloat(importo.value);
            hotel = parseFloat(hotel) + parseFloat(importo.value);
        break;

        case "regali":
        table.rows[8].cells[1].innerHTML = parseFloat(regali) + parseFloat(importo.value);
            regali = parseFloat(regali) + parseFloat(importo.value);
        break;

        case "abbigliamento":
        table.rows[9].cells[1].innerHTML = parseFloat(abbigliamento) + parseFloat(importo.value);
            abbigliamento = parseFloat(abbigliamento) + parseFloat(importo.value);
        break;

        case "spesa":
        table.rows[10].cells[1].innerHTML = parseFloat(spesa) + parseFloat(importo.value);
            spesa = parseFloat(spesa) + parseFloat(importo.value);
        break;

        case "debiti":
        table.rows[11].cells[1].innerHTML = parseFloat(debiti) + parseFloat(importo.value);
            debiti = parseFloat(debiti) + parseFloat(importo.value);
        break;

        case "giochi":
        table.rows[12].cells[1].innerHTML = parseFloat(giochi) + parseFloat(importo.value);
            giochi = parseFloat(giochi) + parseFloat(importo.value);
        break;

        case "cinema":
        table.rows[13].cells[1].innerHTML = parseFloat(cinema) + parseFloat(importo.value);
            cinema = parseFloat(cinema) + parseFloat(importo.value);
        break;

        case "varie":
        varie = parseFloat(varie) + parseFloat(importo.value);
        table.rows[14].cells[1].innerHTML = varie;
        break;
    }
};

// --- SALVA
function Salva() {
    btnSalva.addEventListener('click', function () {
        localStorage.setItem('zero', saldoZero);
        localStorage.setItem('colazione', table.rows[1].cells[1].innerHTML);
        localStorage.setItem('pranzo', table.rows[2].cells[1].innerHTML);
        localStorage.setItem('cena', table.rows[3].cells[1].innerHTML);
        localStorage.setItem('snack', table.rows[4].cells[1].innerHTML);
        localStorage.setItem('spostamenti', table.rows[5].cells[1].innerHTML);
        localStorage.setItem('benzina', table.rows[6].cells[1].innerHTML);
        localStorage.setItem('hotel', table.rows[7].cells[1].innerHTML);
        localStorage.setItem('regali', table.rows[8].cells[1].innerHTML);
        localStorage.setItem('abbigliamento', table.rows[9].cells[1].innerHTML);
        localStorage.setItem('spesa', table.rows[10].cells[1].innerHTML);
        localStorage.setItem('debiti', table.rows[11].cells[1].innerHTML);
        localStorage.setItem('giochi', table.rows[12].cells[1].innerHTML);
        localStorage.setItem('cinema', table.rows[13].cells[1].innerHTML);
        localStorage.setItem('varie', table.rows[14].cells[1].innerHTML);
    })
};

// --- LOCAL STORAGE
function LoadTodo() {
    if (localStorage.getItem('zero')){
        saldoZero = localStorage.getItem('zero');
        progressivo.innerHTML = `Saldo € ${localStorage.getItem('zero')}`;

        colazione = localStorage.getItem('colazione');
        table.rows[1].cells[1].innerHTML = `${colazione}`;

        pranzo = localStorage.getItem('pranzo');
        table.rows[2].cells[1].innerHTML = `${pranzo}`;

        cena = localStorage.getItem('cena');
        table.rows[3].cells[1].innerHTML = `${cena}`;

        snack = localStorage.getItem('snack');
        table.rows[4].cells[1].innerHTML = `${snack}`;

        spostamenti = localStorage.getItem('spostamenti');
        table.rows[5].cells[1].innerHTML = `${spostamenti}`;

        benzina = localStorage.getItem('benzina');
        table.rows[6].cells[1].innerHTML = `${benzina}`;

        hotel = localStorage.getItem('hotel');
        table.rows[7].cells[1].innerHTML = `${hotel}`;

        regali = localStorage.getItem('regali');
        table.rows[8].cells[1].innerHTML = `${regali}`;

        abbigliamento = localStorage.getItem('abbigliamento');
        table.rows[9].cells[1].innerHTML = `${abbigliamento}`;

        spesa = localStorage.getItem('spesa');
        table.rows[10].cells[1].innerHTML = `${spesa}`;

        debiti = localStorage.getItem('debiti');
        table.rows[11].cells[1].innerHTML = `${debiti}`;

        giochi = localStorage.getItem('giochi');
        table.rows[12].cells[1].innerHTML = `${giochi}`;

        cinema = localStorage.getItem('cinema');
        table.rows[13].cells[1].innerHTML = `${cinema}`;

        varie = localStorage.getItem('varie');
        table.rows[14].cells[1].innerHTML = `${varie}`;

        Salva();
    }
};

// --- CLEAR
btnClear.addEventListener('click', function () {
    if (confirm('Sei sicuro di voler cancellare tutto l\'elenco?')) {
        for (i = 1; i < table.rows.length; i++) {
            if (table.rows[i].cells.length > 1)
                table.rows[i].cells[1].innerHTML = '';
        };
        colazione = 0;
        pranzo = 0;
        cena = 0;
        snack = 0;
        spostamenti = 0;
        benzina = 0;
        hotel = 0;
        regali = 0;
        abbigliamento = 0;
        spesa = 0;
        debiti = 0;
        giochi = 0;
        cinema = 0;
        varie = 0;
        
        progressivo.innerHTML = `Saldo € ${0}`;
        saldoArray = [];
        saldoZero = 0;
        txt.focus();
        Salva();
        localStorage.clear();
    }
});