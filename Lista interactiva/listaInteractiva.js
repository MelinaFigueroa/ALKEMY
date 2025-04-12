let listaDeCompras = [];

const agregarElemento = () => {
    let elemento = document.getElementById("itemInput").value.trim();

    if (elemento === "") {
        alert("Por favor, ingresa un elemento.");
        return;
    }

    // verifica si ya existe el elemento
    if (listaDeCompras.includes(elemento)) {
        alert("Ese elemento ya está en la lista.");
    } else {
        listaDeCompras.push(elemento);
        mostrarLista();
    }

    document.getElementById("itemInput").value = "";
};

const eliminarElemento = (indice) => {
    listaDeCompras.splice(indice, 1);
    mostrarLista();
};

const mostrarLista = () => {
    const listaHTML = document.getElementById("itemList");
    listaHTML.innerHTML = "";

    listaDeCompras.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.style.marginLeft = "10px";
        botonEliminar.onclick = () => eliminarElemento(index);

        li.appendChild(botonEliminar);
        listaHTML.appendChild(li);
    });
};

const limpiarLista = () => {
    if (listaDeCompras.length === 0) {
        alert("La lista ya está vacía.");
    } else {
        listaDeCompras = [];
        mostrarLista();
    }
};

const guardarLista = () => {
    if (listaDeCompras.length === 0) {
        alert("No hay elementos para guardar.");
    } else {
        alert("Lista guardada:\n- " + listaDeCompras.join("\n- "));
    }
};

// eventos de botones
document.getElementById("addButton").addEventListener("click", agregarElemento);
document.getElementById("clearButton").addEventListener("click", limpiarLista);
document.getElementById("saveButton").addEventListener("click", guardarLista);
