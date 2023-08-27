function myFunction() {
    let option = "Elige una opción";
    if (confirm(option)) {
        option = "Sabias que me ibas a sacar de llamada, te lo agradezco";
    } else {
        option = "Bueno, por lo menos, lo intenté";
    }
    
    document.getElementById("demo").innerHTML = option;
}