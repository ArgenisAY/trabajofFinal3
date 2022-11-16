const triangulo = document.getElementById("triangulo");
const paralelogramo = document.getElementById("paralelogramo");
const rectangulo = document.getElementById("rectangulo");
const cuadrado = document.getElementById("cuadrado");
const rombo = document.getElementById("rombo");
const trapecio = document.getElementById("trapecio");
const circulo = document.getElementById("circulo");
const getValue = document.getElementById("getValue");
const showArea = document.getElementById("showArea");

triangulo.addEventListener("click", () => {
  showArea.innerHTML = "";

  getValue.innerHTML = `<li>
        <label for='base'>Ingresar Base:</label>
        <input type='text' id='base' name='base'>
    </li>
    <li>
        <label for='height'>Ingresar Altura:</label>
        <input type='text' id='height' name='height'></input>
    </li>
    <li>
    <button class='set' id='setArea'>Obtener</button>
    </li>`
    ;

  const show = document.getElementById("setArea");

  show.addEventListener("click", () => {
    let base = document.getElementById("base").value;
    let height = document.getElementById("height").value;
    const area = areaTriangulo(parseInt(base), parseInt(height));

    showArea.innerHTML = `<p>El area del triangulo es: ${area} m^2</p>`;
  });
});

paralelogramo.addEventListener("click", () => {
  showArea.innerHTML = "";

  getValue.innerHTML = `<li><label for='base'>Ingresar Base:</label>
    <input type='text' id='base' name='base'></li>
    <li>
        <label for='height'>Ingresar Altura:</label>
        <input type='text' id='height' name='height'></input>
    </li>
    <li><button class='set' id='setArea'>Obtener</button></li>`;

  const show = document.getElementById("setArea");

  show.addEventListener("click", () => {
    let base = document.getElementById("base").value;
    let height = document.getElementById("height").value;
    const area = areaParalelogramo(parseInt(base), parseInt(height));

    showArea.innerHTML = `<p>El area del paralelogramo es: ${area} m^2</p>`;
  });
});

rectangulo.addEventListener("click", () => {
  showArea.innerHTML = "";

  getValue.innerHTML =
    "<li><label for='base'>Ingresar Base:</label> <input type='text' id='base' name='base'></li><li><label for='height'>Ingresar Altura:</label><input type='text' id='height' name='height'></li></input><li><button class='set' id='setArea'>Obtener</button></li>";

  const show = document.getElementById("setArea");

  show.addEventListener("click", () => {
    let base = document.getElementById("base").value;
    let height = document.getElementById("height").value;
    const area = areaParalelogramo(parseInt(base), parseInt(height));

    showArea.innerHTML = `<p>El area del rectangulo es: ${area} m^2</p>`;
  });
});

cuadrado.addEventListener("click", () => {
  showArea.innerHTML = "";

  getValue.innerHTML =
    `<li><label for='lado'>Ingrese la longitud de una de sus lados:</label><input type='text' id='lado' name='lado'></li><li><button class='set' id='setArea'>Obtener</button></li>`;

  const show = document.getElementById("setArea");

  show.addEventListener("click", () => {
    let lado = document.getElementById("lado").value;
    const area = areaCuadrado(parseInt(lado));

    showArea.innerHTML = `<p>El area del cuadrado es: ${area} m^2</p>`;
  });
});

rombo.addEventListener("click", () => {
  showArea.innerHTML = "";

  getValue.innerHTML =
    "<li><label for='dMayor'>Ingresar Diagonal Mayor:</label> <input type='text' id='dMayor' name='dMayor'></li><li><label for='dMenor'>Ingresar Diagonal Menor:</label><input type='text' id='dMenor' name='dMenor'></input></li><li><button class='set' id='setArea'>Obtener</button></li>";

  const show = document.getElementById("setArea");

  show.addEventListener("click", () => {
    let dmayor = document.getElementById("dMayor").value;
    let dmenor = document.getElementById("dMenor").value;
    const area = areaRombo(parseInt(dmayor), parseInt(dmenor));

    showArea.innerHTML = `<p>El area del rombo es: ${area} m^2</p>`;
  });
});

trapecio.addEventListener("click", () => {
  showArea.innerHTML = "";

  getValue.innerHTML =
    "<li><label for='bMayor'>Ingresar Base Mayor:</label> <input type='text' id='bMayor' name='bMayor'></li><li><label for='bMenor'>Ingresar Base Menor:</label> <input type='text' id='bMenor' name='bMenor'></li><li><label for='height'>Ingresar Altura:</label><input type='text' id='height' name='height'></input></li><li><button class='set' id='setArea'>Obtener</button></li>";

  const show = document.getElementById("setArea");

  show.addEventListener("click", () => {
    let bmayor = document.getElementById("bMayor").value;
    let bmenor = document.getElementById("bMenor").value;
    let altura = document.getElementById("height").value;
    const area = areaTrapecio(
      parseInt(bmayor),
      parseInt(bmenor),
      parseInt(altura)
    );

    showArea.innerHTML = `<p>El area del trapecio es: ${area} m^2</p>`;
  });
});

circulo.addEventListener("click", () => {
  showArea.innerHTML = "";

  getValue.innerHTML =
    "<li><label for='radio'>Ingrese la longitud del radio:</label> <input type='text' id='radio' name='radio'></li><li><button class='set' id='setArea'>Obtener</button></li>";

  const show = document.getElementById("setArea");

  show.addEventListener("click", () => {
    let radio = document.getElementById("radio").value;
    const area = areaCirculo(parseInt(radio));

    showArea.innerHTML = `<p>El area del circulo es: ${area} m^2</p>`;
  });
});

const areaTriangulo = (base, altura) => {
  return (base * altura) / 2;
};

const areaParalelogramo = (base, altura) => {
  return base * altura;
};

const areaCuadrado = (lado) => {
  return Math.pow(lado, 2);
};

const areaRombo = (dMayor, dMenor) => {
  return (dMayor * dMenor) / 2;
};

const areaTrapecio = (bMayor, bMenor, h) => {
  return ((bMayor + bMenor) * h) / 2;
};

const areaCirculo = (radio) => {
  return Math.PI * Math.pow(radio, 2);
};
