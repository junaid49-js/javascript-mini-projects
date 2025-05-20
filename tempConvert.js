let celsiustoFahrenheit = function(C){
    let F;
    F = C * 9/5 + 32;
    return F
}

let fahrenheitToCelsius = function(F){
    let C;
    C = (F - 32) * 5/9;
    return C;
}

let kelvinToFahrenheit = function(K){
    let F;
    F = (K - 273.15) * 9/5 + 32;
    return F;
}

let fahrenheitToKelvin = function(F){
    let K;
    K = ((F - 32) * 5/9) + 273.15;
    return K;
}

let celsiustoKelvin = function(C){
    let K;
    K = C + 273.15;
    return K;
}

let kelvinToCelsius = function(K){
    let C;
    C = K - 273.15;
    return C;
}

console.log('You can convert the temperature value by this program.');
//> node
//> .load tempConvert.js