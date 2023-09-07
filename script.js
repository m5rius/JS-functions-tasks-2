// 8.1. Funkcija priima du argumentus: 
//   8.1.1. Dienų skaičių.
//   8.1.2. Formatą. Galimos formato reikšmės yra:
//     8.1.2.1. minutes
//     8.1.2.2. hours
//     8.1.2.3. weeks
//     8.1.2.4. months
//     8.1.2.5. years
// 8.2. Funkcija konvertuoja dienas į pasirinktą formatą ir grąžina atsakymą tokiu formatu: 5 days - 7200 minutes.

function daysToFormat (days, format) {

    if (format === 'minutes'){
        output = days + ' days - ' + (days * 1440) + ' minutes.'
    } else if (format === 'hours'){
        output = days + ' days - ' + (days * 24) + ' hours. '
    } else if (format === 'weeks'){
        output = days + ' days - ' + (days / 7) + ' weeks. '
    } else if (format === 'months'){
        output = days + ' days - ' + (days / 30) + ' months. '
    } else if (format === 'years'){
        output = days + ' days - ' + (days / 365) + ' years. '
    }
        
    return output
    }

console.log(daysToFormat(365, 'years'))



 
// 9. Funkciją, kuri patikrina ar skaičius dalinasi iš kito skaičiaus:
// 9.1. Funkcija priima du argumentus: 
//   9.1.1. Skaičių, kuris bus dalinamas (dalinys).
//   9.1.2. Skaičių, iš kurio bus dalinama (daliklis).
// 9.2. Funkcija grąžina atsakymą tokiu formatu:
//   9.2.1. Jeigu dalinasi: 10 dalinasi iš 5.
//   9.2.2. Skaičius 11 nesidalina iš 5. Liekana yra 1.


function doesDivide(dalinys, daliklis) {
    let remains = (dalinys % daliklis)
    if (remains === 0){
        output = `${dalinys} dalinasi iš ${daliklis}`
    } else {
        output = `Skaičius ${dalinys} nesidalina iš ${daliklis}. Liekana yra ${remains}` 
    }

    return output
}
console.log(doesDivide(100, 11))
 
// 10. Funkciją, kuri patikrina ar įvestas tekstas turi porini raidžių skaičių ar neporinį.

function evenOrOdd(word) {
     let remains = (word.length % 2)

     if (remains === 0){
        output = "Tekstas turi porinį raidžių skaičių"
     } else {
        output = "Tekstas turi neporinį raidžių skaičių"
     }
    return output

}
console.log(evenOrOdd('tekstas'))


 
// 11. Funkciją, kuri paima nurodytą simbolį iš žodžio ar sakinio. 
// 11.1. Funkcija priima du argumentus: tekstą ir kelintą simbolį reikia grąžinti.
// 11.2. Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė yra "b".
 
// 11.3. Jeigu nurodytas skaičius yra didesnis nei tekstas turi simbolių, tai reikia grąžinti error'ą tokiu formatu: Tekstas "Labas" turi 5 simbolius, o jūs nurodėte grąžinti 8.
 
// 11.4. Patobulinti funkciją, kad būtų galima įrašyti neigiamą skaičių, jeigu norima gauti teksto simbolį skaičiuojant nuo jo galo, o ne nuo priekio.

function veryComplicated(word, number) {
    let letter = word.charAt((number - 1))
    let length = word.length
    let negative = word.length + 1 + number
    let letterNegative = word.charAt(negative - 1)
    output = `Teksto "${word}" ${number} raidė yra "${letter}"`

    if(number > word.length){
        output = `Tekstas "${word}" turi ${length} simbolius, o jūs nurodėte grąžinti ${number}.`
    } else if(number < 0) {
        output = `Teksto "${word}" ${number} arba kitaip ${negative} raidė yra ${letterNegative}`
    }
    if (negative <= 0){
        output = `Tekstas "${word}" turi ${length} simbolius, o jūs nurodėte grąžinti ${number}.`
    }

    return output
}
console.log(veryComplicated('much complicated', -16))