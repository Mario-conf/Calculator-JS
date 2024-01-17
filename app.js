function iniciarCalculadora() {
    function calcularInteresSimple(monto, tasa, tiempo) {
      return monto * (1 + (tasa / 100) * tiempo);
    }
  function calcularInteresCompuesto(monto, tasa, tiempo) {
      return monto * Math.pow(1 + tasa / 100, tiempo);
    }

    function manejarFormularioInteres() {
     var monto = parseFloat(document.getElementById("monto").value);
      var tasa = parseFloat(document.getElementById("tasa").value);
      var tiempo = parseFloat(document.getElementById("tiempo").value);

      var interesSimple = calcularInteresSimple(monto, tasa, tiempo);
      var interesCompuesto = calcularInteresCompuesto(monto, tasa, tiempo);

      alert("Monto inicial + Interés Simple: " + interesSimple.toFixed(2) + "\nMonto inicial + Interés Compuesto: " + interesCompuesto.toFixed(2));
    }

   document.getElementById("calcularInteresForm").addEventListener("submit", function (event) {
      event.preventDefault();
      manejarFormularioInteres();
    });
  }
document.addEventListener("DOMContentLoaded", iniciarCalculadora);
function iniciarCalculadoraPromedio() {
    function calcularPromedio(numeros) {
      const arrayNumeros = numeros.split(',').map(numero => parseFloat(numero.trim()));
      const suma = arrayNumeros.reduce((total, num) => total + num, 0);
      const promedio = suma / arrayNumeros.length;
  
      return promedio;
    }
    function manejarFormularioPromedio(event) {
      event.preventDefault();
  
      const numeros = document.getElementById('numeros').value;
  
      if (numeros.trim() === '') {
        alert('Por favor, ingrese al menos un número.');
        return;
      }
  
     const promedio = calcularPromedio(numeros);
    alert(`El promedio es: ${promedio.toFixed(2)}`);
    } document.getElementById('calcularPromedioForm').addEventListener('submit', manejarFormularioPromedio);
  }
  document.addEventListener('DOMContentLoaded', iniciarCalculadoraPromedio); 
  function mostrarDimensiones() {
    const tipoFigura = document.getElementById('tipoFigura').value;
    const dimensionesDiv = document.getElementById('dimensionesFigura');
     dimensionesDiv.innerHTML = '';
    switch (tipoFigura) {
        case 'triangulo':
            dimensionesDiv.innerHTML = `
                <label for="baseTriangulo">Base:</label>
                <input type="text" id="baseTriangulo" name="baseTriangulo" required>
                <label for="alturaTriangulo">Altura:</label>
                <input type="text" id="alturaTriangulo" name="alturaTriangulo" required>
            `;
            break;
        case 'cuadrado':
            dimensionesDiv.innerHTML = `
                <label for="ladoCuadrado">Lado:</label>
                <input type="text" id="ladoCuadrado" name="ladoCuadrado" required>
            `;
            break;
        case 'circulo':
            dimensionesDiv.innerHTML = `
                <label for="radioCirculo">Radio:</label>
                <input type="text" id="radioCirculo" name="radioCirculo" required>
            `;
            break;
        default:
            break;
    }
}
function calcularAreaVolumen() {
    const tipoFigura = document.getElementById('tipoFigura').value;
    const dimensionesDiv = document.getElementById('dimensionesFigura');
    let dimensiones;
    switch (tipoFigura) {
        case 'triangulo':
            dimensiones = {
                base: parseFloat(document.getElementById('baseTriangulo').value),
                altura: parseFloat(document.getElementById('alturaTriangulo').value)
            };
            break;
        case 'cuadrado':
            dimensiones = {
                lado: parseFloat(document.getElementById('ladoCuadrado').value)
            };
            break;
        case 'circulo':
            dimensiones = {
                radio: parseFloat(document.getElementById('radioCirculo').value)
            };
            break;
        default:
            break;
    }
    let resultado;
    switch (tipoFigura) {
        case 'triangulo':
            resultado = (dimensiones.base * dimensiones.altura) / 2;
            break;
        case 'cuadrado':
            resultado = Math.pow(dimensiones.lado, 2);
            break;
        case 'circulo':
            resultado = Math.PI * Math.pow(dimensiones.radio, 2);
            break;
        default:
            break;
    }
 alert(`El área/volumen de la figura seleccionada es: ${resultado.toFixed(2)}`);
}
    var formulario = document.getElementById('proporcionForm');
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        var parte1 = parseFloat(document.querySelector('input[name="parte1"]').value);
        var parte2 = parseFloat(document.querySelector('input[name="parte2"]').value);
        var parte3 = parseFloat(document.querySelector('input[name="parte3"]').value);
        var parte4 = parseFloat(document.querySelector('input[name="parte4"]').value);
        if (isNaN(parte1) || isNaN(parte2) || isNaN(parte3) || isNaN(parte4)) {
            alert("Ingrese números válidos en todas las partes.");
            return;
        }
        var resultado = (parte1 * parte4) === (parte2 * parte3) ? "Las partes son proporcionales" : "Las partes no son proporcionales";
        alert(resultado);
    });
    function resolverEcuacion() {
        var ecuacionForm = document.getElementById('ecuacionForm');
    
        var coeficiente = parseFloat(document.querySelector('input[name="coeficiente"]').value);
        var constante = parseFloat(document.querySelector('input[name="constante"]').value);
    
        if (isNaN(coeficiente) || isNaN(constante)) {
            alert("Ingrese coeficiente y constante válidos.");
            return false; 
        }
    
         if (coeficiente === 0) {
            alert("La ecuación no es lineal.");
        } else {
            var solucion = -constante / coeficiente;
            alert("La solución de la ecuación lineal es x = " + solucion);
        }
    
        return false;  
    }
    document.addEventListener("DOMContentLoaded", function() {
    });
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById('resolverEcuacionSegundoGradoBtn').addEventListener('click', resolverEcuacionSegundoGrado);
        document.getElementById('resolverSistemaEcuacionesBtn').addEventListener('click', resolverSistemaEcuaciones);
    
        function resolverEcuacionSegundoGrado() {
            var form = document.getElementById('ecuacionSegundoGradoForm');
    
            var coeficienteA = parseFloat(form.querySelector('input[name="coeficienteA"]').value);
            var coeficienteB = parseFloat(form.querySelector('input[name="coeficienteB"]').value);
            var coeficienteC = parseFloat(form.querySelector('input[name="coeficienteC"]').value);
    
            if (isNaN(coeficienteA) || isNaN(coeficienteB) || isNaN(coeficienteC)) {
                alert("Ingrese coeficientes válidos.");
                return;
            }
    
            var discriminante = coeficienteB * coeficienteB - 4 * coeficienteA * coeficienteC;
    
            if (discriminante > 0) {
                var x1 = (-coeficienteB + Math.sqrt(discriminante)) / (2 * coeficienteA);
                var x2 = (-coeficienteB - Math.sqrt(discriminante)) / (2 * coeficienteA);
                alert("Las soluciones son x1 = " + x1 + " y x2 = " + x2);
            } else if (discriminante === 0) {
                var x = -coeficienteB / (2 * coeficienteA);
                alert("La solución doble es x = " + x);
            } else {
                alert("La ecuación no tiene soluciones reales.");
            }
        }
        function resolverSistemaEcuaciones() {
            var form = document.getElementById('sistemaEcuacionesForm');
    
            var coeficienteA1 = parseFloat(form.querySelector('input[name="coeficienteA1"]').value);
            var coeficienteB1 = parseFloat(form.querySelector('input[name="coeficienteB1"]').value);
            var constanteC1 = parseFloat(form.querySelector('input[name="constanteC1"]').value);
    
            var coeficienteD2 = parseFloat(form.querySelector('input[name="coeficienteD2"]').value);
            var coeficienteE2 = parseFloat(form.querySelector('input[name="coeficienteE2"]').value);
            var constanteF2 = parseFloat(form.querySelector('input[name="constanteF2"]').value);
    
            if (isNaN(coeficienteA1) || isNaN(coeficienteB1) || isNaN(constanteC1) ||
                isNaN(coeficienteD2) || isNaN(coeficienteE2) || isNaN(constanteF2)) {
                alert("Ingrese coeficientes y constantes válidos.");
                return;
            }
    
            var determinante = coeficienteA1 * coeficienteE2 - coeficienteB1 * coeficienteD2;
    
            if (determinante === 0) {
                alert("El sistema no tiene solución única.");
            } else {
                var x = (constanteC1 * coeficienteE2 - constanteF2 * coeficienteB1) / determinante;
                var y = (constanteF2 * coeficienteA1 - constanteC1 * coeficienteD2) / determinante;
                alert("La solución del sistema es x = " + x + " e y = " + y);
            }
        }
    });
    function calcularPorcentaje() {
        var valorInicial = parseFloat(document.forms["porcentajeForm"]["valorInicial"].value);
        var valorFinal = parseFloat(document.forms["porcentajeForm"]["valorFinal"].value);
        var porcentajeCambio = ((valorFinal - valorInicial) / valorInicial) * 100;
        alert("El porcentaje de cambio es: " + porcentajeCambio.toFixed(2) + "%");
    }
    
    

    function calcularReglaDeTres() {
        var valor1 = parseFloat(document.getElementById('valor1').value);
        var valor2 = parseFloat(document.getElementById('valor2').value);
        var valor3 = parseFloat(document.getElementById('valor3').value);
      
        var resultado = (valor3 * valor2) / valor1;
      
        alert('El resultado es: ' + resultado.toFixed(2));
      }
        
