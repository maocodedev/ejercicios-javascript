    import print from './horactual.js'

    import caldescuento from './caldescuento.js';

    let imagen01='akita.png'
    let imagen02='beagle.png';
    let imagen03='border.png';
    let usuario="Mao code";
    let descuento=0.10;


    let mascotas=[{name:"akita",ege:1,valor:200},
      {name:"beage",ege:2,valor:300},{name:"border",ege:1,valor:400}]

    let total=mascotas[0].valor-caldescuento(mascotas[0].valor);

    document.querySelector("body").innerHTML=`
    
    <div>
    <p>${usuario}</p>
    </div>
    <!--La etiqueta <section> en HTML es un elemento
     semántico que permite crear secciones independientes en una página web. 
     Se utiliza para agrupar elementos relacionados, como información de contacto, 
     una galería de imágenes, o una sección de comentarios.-->
      <!--1)--><section class="contenido">
      
      <!--2)--><div class="mostrador" id="mostrador">
      <!--3)--><div class="fila">
      <!--4)--> <div class="item">
      <!--5)--> <div class="contenedor-foto">
      <img src="img/${imagen01}"  alt="Akita"/>
      <p class="descripcion">${mascotas[0].name}</p>
      <samp class="precio">$ ${mascotas[0].valor} USD
      </samp>
      <p>
       <samp class="des">Valor con Descuento:${total} USD
      </p>
</samp>
      
    </div>
      </div>  
      <!--4)--> <div class="item">
      <!--5)--> <div class="contenedor-foto">
      <img src="img/${imagen02}"  alt="Beagle"/>
      <p class="descripcion">${mascotas[1].name}</p>
      <samp class="precio">$ ${mascotas[1].valor} USD
      </samp>
      
    </div>
      </div>  
      <!--4)--> <div class="item">
      <!--5)--> <div class="contenedor-foto">
      <img src="img/${imagen03}"  alt="Border"/>
      <p class="descripcion">${mascotas[2].name}</p>
      <samp class="precio" > $ ${mascotas[2].valor}USD
      </samp>
     
      
    </div>
      </div> 
      
      
    </div>
    </div>
      
    </section>
      `;






    console.log(print());
