let nota = [15,18,10,8,17,20];
let i = 0, n=nota.length;

document.writeln('-------------------------ORIGINAL----------------------------<br>');
for (i=0; i<n; i++) {
    document.writeln('el elemento '+i+' tiene un valor de '+nota[i]+'<br>');
}
document.writeln('-----------------ordenado de mayor a menor--------------------<br>');
nota.sort(function(a,b){return a- b});

for (i=0; i<n; i++) {
    document.writeln("el elemento "+i+" tiene un valor de "+nota[i]+'<br>');
}