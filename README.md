# Curso De Animaciones Para La Web

## ¿Qué son las animaciones?

- La transición que ocurre de un punto *A* a un punto *B*.
- Son parte natural de las interfaces web.
- Son una forma natural de enseñanza para el usuario.
- Ayudan a conectar una interfaz que solo está programada en algo que realmente está vivo.
- La interacción del usuario interactuando con la interfaz y que ésta le de feedback de lo que esta ocurriendo.

*Recuerda*:
Las animaciones en una interzas web son necesarias, ya que ninguna acción que ocurre en está se da de forma instantánea.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Propiedades de las Transiciones 

Con transiciones CSS, podemos hacer un cambio de un punto “A” a “B”, ya se color, tamaño, posición.

Las propiedades de transition son:

- transition-property: Que propiedad quiero modificar
- transition-duration: Cuanto va a durar las transición
- transition-delay: tiempo que espera para iniciar la transición
- transition-timing-function: una propiedad de aceleración

### Sintaxis de transiciones

```CSS 
/*Qué propiedades va a cambiar en la transición*/
transition-property: width, height;

/*Cuánto tiempo va a durar la transición*/
transition-duration: 1s;

/*Cuánto tiempo va a tardar la transición en ocurrir*/
transition-delay: 250ms;

/*Función que determina de qué forma se calculan los valores intermedios de la transición*/
transition-timing-function: ease;

/*Una sola linea*/

/*Cada propiedad a cambiar se separa con una coma*/

transition: width1s 250ms ease, height1s 250ms ease;

```

## Sintaxis de Transformaciones

Nosotros podemos rotar un elemento, sesgar un elemento, cambiar la posicion de un elemento y también podemos ambiar su tamaño del elemento.

```css
/* transform: rotar | sesgar | posicion | tamaño */
  transform: rotate(5deg) skew(10deg) translate(100px) scale(1.5);
```

## Transformaciones de rotación.

Por defecto las rotaciones si las pones en grados positivos irián como las agujas del reloj es decir a la derecha, pero si usamos los signos negativos irían en la dirección contraria. Otra cosa que podemos hacer con la rotación es moverla en más ejes, para hacer una especie de 3D para que mi rotación sea especial. Y no moverla solamente en 2D.

```css
    /* Por defecto se mueve en el eje x */
      transform: rotate(45deg);
    /*Para moverlo en un eje especial debemos especificarlo*/
      transform: rotateX(45deg);
      transform: rotateY(45deg);
      transform: rotateZ(45deg);
    /*También podemos anidar las rotaciones de la siguiente manera:*/
      transform: rotateX(45deg) rotateY(45deg) rotateZ(45deg);

    /*Si deseamos resumir una rotación 3D los podemos hacer de la siguiente forma*/
      transform: rotate3d(x, y, z, rotate)
    /*Tenemos primero que indicar las cordenadas que vamos a ocupar con 1 y 0 
    1 indica que el eje se ocupa, 0 indica que ese eje no se esta ocupando.
    Como cuarto párametro debemos idicar los grados en los que se moveran los ejes.
    */
      transform: rotate3d(1, 0, 0, 45deg)
```

## Transformaciones de traslación y perspectiva

Una de las cosas más comunes el hacer animáciones es mover las cosas, hacer que algo valla y se mueva a nuestro gusto, y estó lo podemos hacer en CSS gracias a las transformaciones y en especifico a las transformaciones de **traslate**.

Translate es si yo quiero mover un elemento tanto para arriba, abajo, izquierda, derecha. Si yo le digó a mi elemento simplemente transalate() y el valor va a ser en pixels, porcentaje, hará que me mueva el elemento hacia la derecha como hacia abajo.

Si solo ponemos translate solo se moverá hacia la derecha, si yo quiro que se mueva hacia la izquierda puedo usar un valor negativo. Pero si yo quiero que se mueva hacia abajo es decir en el eje y, tengo que agregarle un segundo parametro a *translate()*. 

Está es la forma de resumir está propiedad pero si yo quiero ser más declarado sobre que quiero estar moviendo, podemos decir que haga un **translateX()** y Solo recibe un párametro que indica cuanto deseo moverme en el ejeX o eje Horizontal. Y si ponemos **translateY()** la animación se movera en el eje vértical

Por defecto recibimos los 2 párametros pero podemos hacerlo así también.

```css
    /* transform: translate(x); */
    transform: translate(100px); 
    /* translateX(-100px)  */
    translateX(100px);
    /* translateY(-100px)  */
    translateY(-100px);
    /* transform: translate(x, y); */
    /* transform: translate(100px, 100px); */
    transform: translate(-100px, -100px);
```
Pero hasta ahora solo nos estamos moviendo en un eje 2D. Otra cosa que podemos hacer es aplicar una transformación pero también en el ejeZ y si yo me muevo en el ejeZ, lo que va hacer es movernos dentro de la profundidad de mi elemento, mi elemento se puede acercar más a mi o se puede alejar más a mi.

Pero ahora lo que va a ocurrir es nada, porque simplemente yo estoy en un canvas 2D, no tengo un contexto para que mi elemento se pueda acercar o se pueda alejar. 

Para resolver esté problema tenemos que setear algó muy interesante que nos va ayudar a hacer animaciónes más 3D que se llamá perpectiva es ponerle un contexto 3D a nuestro elemento. Y decirle cual es esa referencia de punto en la que yo estoy y donde están los elementos que yo quiero animar, esa visión, donde está esa perpectiva. Así que podemos configurarle esa perpectiva a mi documento.

La perspectiva se la vamos a poner a body, y la propiedad se llama **perpective**. El punto de la perspectiva es cuan abierta va a estar o cuan cerrada va a estar está perpectiva y va a ser del tamaño de **200px**. Así que ya configurada mi perpectiva ya podemos ir al navegador.

También podemos hacer que el punto de origen de la perspectiva se mueva así yo le puedo cambiar la perpective con el **perpective-origin:** y decirle de donde está empezando que por defecto empieza en el *centro*. Pero le podemos configurar el ejeX como el ejeY, de donde quiero que inicie. 

Pero si yo quiero que mi elemento crezca desde arriba tendría que configurarle que el origin de mi perpectiva sea el **TOP** y así el elemento se escalaría como si lo estuvieramos viendo desde arriba, ahora si queremos hacer lo contrario usamos **BOTTOM** Tambíen podemos hacerlo para la izquiera como para la derecha usando **Right** y **Left**.
```css
      /* perspective-origin: center; POR DEFECTO*/
      /* perspective-origin: x y */
      /* perspective-origin: top; */
      /* perspective-origin: bottom; */
      /* perspective-origin: left; */
      perspective-origin: right;
```

Además también podemos hacer combinaciones de los dos ejes para activar una perpectiva desde una esquina del navegador. ejemplo:
```css
    /* perspective-origin: x y */
    /* perspective-origin: top right; */
    /* perspective-origin: top left; */
    /* perspective-origin: bottom right; */
    perspective-origin: bottom left;
```
**Perspective-origin:** Controla de donde inicia la translación de el elemento 3D

También podemos hacer una translation 3D, y ya que sabemos controlar acerca de donde va a iniciar esa translación de mi elemento gracias a la perpectiva, podemos mover todos los ejes gracias al **transform: translate3d(x, y, z);** en cada párametro especificamos el valor que deseamos movernos en esas cordenadas.

## Transformaciones de escala

Nosotros podemos modificar el tamaño del elemento usando una transformación con la propiedad de **scale();** y scale puede estar tanto en x como en y. Si yo le especifico simplemente un solo valor al scale de ese elemento quiere decir que estoy modificando tanto x como y de una forma resumida.

El tamaño de scale se mide de 0 a 1: 

- el 0 es = al 0% del tamaño.
- el 1 es = al 100% del tamaño.

Si yo quiero modificar la escala de mi elemento y decirle que tenga 2 significa que su tamaño aumentará 200%. De igual manerá si deseo cambiar su tamaño original sería igual ``.5 o 0.5``.

**IMPORTANTE:** Gracias a que estó es CSS, cada vez que yo he cambiado el tamaño estó se escala de una forma vectorial es decir que no pierde la resolución.

Podemos escalar nuestro Elemento en el eje(X, Y) de esta manera podemos cambiar la forma de nuestro elemento. De está manera podemos modificar el ancho y el alto independiente o de forma conjunta.

## Transformaciones de sesgados

De seguro alguna vez haz escuchado: *tu pensamiento sesgado*. Estó quiere decir que tu pensamiento esta inclinado hacia algún lado y estó ees posible de crear en CSS.

El sesgado es esa inclinacion que puede sufrir nuestro elemento gracias a a una transformacion, esto sería así: `` transform: skew(x, y); ``.

Sesgado puede estar tanto en el ejeX como en el ejeY. La transformación de sesgado es aplicada en grados así que le puedo decir `` transform: skew(45deg); `` Si solo especificamos un valor lo que estoy haciendo es solo poner el sesgado únicamente en el ejeX (sesgado horizontal).
Pero si declaro ambos ejes dentro de mi sesgado `` transform: skew(45deg, 45deg); `` Lo que pasará es un sesgado horizontal y en vértical.

En este caso el sesgado hizó que mi elemento desapareciera totalmente.

## Punto de transformación

¿No has notado que nuestras transformaciones estan clavadas en una parte de la interfaz? y eso se llama el *punto de transformación*. Tenemos un cuadrado y en el centro está su punto de transformación, así fue que se movió de manera horizontal y de manera vértical pero ¿podemos modificar eso? claro que podemos y estó es gracias el **transform-origin**.

En el ejemplo de la rotación nuestro elemento está rotando sobre un punto invisible que está en el centro de el mismo y ese sería el punto de origen de la transformación. El cúal puede ser totalmente manipulable para que empiece de una esquina, de otra esquina, del centro, de los extremos, etc. 

Está sería una propiedad que le vamos anexar a nuestro cuadrado la cúal se llama **transform-orgin** que por defecto viene configurado en **(50%, 50%)** y puede ser configurable tanto para el ejeX como para el ejeY. Ahora aprendamos a manipular estó para que nuestra transformación se aplique de otra manera. Que tál si hacemos que fuera como una tapita! que se mueva por arriba, esto significa que el origin de mi transformación tiene que empezar desde la parte superior. ```transform-origin: top;`` podemos hacer también que sea inverso o que empiece a los extremos e incluso conbinarlos.
```css
transform-origin: top;
transform-origin: bottom;
transform-origin: left;
transform-origin: right;
transform-origin: right top;
transform-origin: right bottom;
transform-origin: left top;
transform-origin: left bottom;
```
Si lo hacemos desde la izquierda no pasa nada porque nosotros hicimos una rotación en el ejeX no en el ejeY, así que si yo quiero que mi punto de origen esté a ala izquierda y que reaccione a como debería, que sería un movimiento de una parte de la izquierda, le tendremos que especificar que la rotación sea en el ejeY.

Ahora si yo quiero que mi rotación esté en una esquina de mi cuadro puedo utilizar las dos propiedades para configurar tantó el ejeX como el ejeY así que vamos a poner el **transform-origin: x y;**
```css
  /* transform-origin: x y; */
  transform: rotateZ(45deg);
  transform-origin: left top;
  transform-origin: left bottom;
  transform-origin: right top;
  transform-origin: right bottom;
```
Lo que tenemos anteriormente como top, bottom, left, rigth, y las combinaciones son una especie de **sugar-sintax** es decir que son resumidas los valores en algó mucho más legible. Pero yo podría hacer que mi tranformacion-origin cambiará de una manera mucho más custom, recordemos que el inicio o el valor por defecto es **transform-origin:(50% 50%)** lo cual nos deice que está totalmente centrado tanto horizontal como verticalmente. 

Entonces left estaría en: (0% 50%);
right(100% 50%);
top(50% 100%);
bottom(0% 100%);

Estó indica que nosotros podemos hacer cambios de modo custom la forma en la cual se interpreta donde esté el punto de transformación. Lo cúal lo hace totalmente manejable.

## Animaciones CSS

Lo que necesita nuestra animación para funcionar es:

- Un nombre de animación.
- El tiempo que durará la animación.

hay muchas más propiedades que se le pueden unir a *animation*, pero las básicas son la duración y el nombre.

### Sintaxis

Podemos aplicar animaciones a mi elemento desde que la página cargue o puedo aplicarla cuando hay un cambio dentro de algo es decir una interacción dentro de algo como por ejemplo el *:hover* 

```css
  animation-name: cuadrado;
  animation-duration: 1s;
```

Ahora para hacer la animación usamos un *@keyframes* seguido del nombre de nuestra animación *cuadrado*, ahora abrimos llaves y decirle que va hacer mi animación.

Aquí lo que tengo que hacer es decirle que voy a hacer en ese tiempo en ese segundo, y puedo dividir ese segundo en varias secciones, por ejemplo puedo darle un estado inicial y un estado final que puede ser un *0%* y un *100%* lo cúal me va hacer mover un elemento desde un inicio hasta un fin, ¿Qué hagó? lo que vamos a poner adentro, de momento cambiemos la opacidad.

```CSS
.container:hover .cuadrado.a{
      animation-name: cuadrado;
      animation-duration: 1s;
    }

    @keyframes cuadrado {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
```
Estó quiere decir que en un segundo nuestro elemento se hará de un estado visible a un estado invisible. Está animación también se va a lanzar en el momento en el que cargué el navegador porque la animación va a ser leída como de las propiedades base que tiene cuadrado. Si recargamos la página notaremos que nuestro elemento se anima y se vuelve transparente totalmente y eso es lo que ocurre en un segundo.

Aún hay más cosas que yo puedo hacer dentro de mi animación para que está tenga un mejor efecto y por ejemplo hacer más cosas con ellas, hay muchas más propiedades que se le pueden unir a *animation*, pero las básicas son la duración y el nombre.

### Delay

El *animation-delay* en el que yo puedo decir el tiempo que debe esperar antes de lanzarse la animación. Está propiedad puede ser útil si queremos que el sitio web cargué completamente si queremos que nuestro sitio web cargué primero y luego lanzar la animación.

### Contador de Lanzamiento. 

Está propiedad se usa como **animation-iteration-count** y acá yo le puedo decir el número de veces que yo quiero decirle que se repita mi animación como por ejemplo 2 veces, y algo que puedo hacer aquí que es interesante que funciona mucho en las animaciones por ejemplo es el poner ``animation-iteration-count: infinite;`` indicando que está sea infinita.

### Suavisado de Animation

Estó sería **animation-timing-function** en el cúal podemos configurar como funciona el suavisado de la animación que por defecto está en *ease*. Pero también tenemos más valores como:
```css
  animation-timing-function: ease;
  animation-timing-function: ease-in;
  animation-timing-function: ease-out;
  animation-timing-function: ease-in-out;
  animation-timing-function: ease-linear;
``` 
Linear indica que no tengamos ningun tipo de suavisado. Todo estó significa que podamos configurar de que forma nuestra animation se está lanzando y en que tiempo es decir en que momentos es más rápida, en que momentos es más lenta.

Otra cosa que podemos hacer aquí es configurarle una **Curba de Bizier** 
```css
animation-timing-function: cubic-bezier(1, 1, 1, 1);
``` 
Si yo le pongo 1,1,1,1 estaría haciendo que nuestra animation sea totalmente lineal.

### Dirección.

A mi animación también puedo decirle en que dirección esta llendo, es decir de donde va a empezar ejemplo: (por el 0% o por 100%).

Está propiedad se utiliza como **animation-direction** que por defecto está en normal, pero yo puedo decirle que por ejemplo valla en **reverse**, es decir si la animación era desaparecer ahora la animación sería aparecer de un estado no visible.

Además de decirle que valla en **reverse** también puedo hacer que valla de forma alternada es decir que sea desde de visible-invisible-invisible-visible-etc. Como si fuera un rebote de la animacion lo cual nos va a hacer ahorrarnos unas lineas de código si queremos conseguir esté efecto. El valor que recibiría sería **alternate**

Lo que hace **alternate** sería si yo tomará un valor intermedio, como por ejemplo el 50% si el principio es 0% y el final es 100% ejemplo:

```css
@keyframes cuadrado {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
```
Estó significa hacer un rebote de lo que yo quiero hacer que ocurra en la animación, esto no hace falta alternate porque ya ocurre de manera mágica. Ahora nosotro tenemos un fade de lo que deseamos lograr lo que evita que se haga de una manera brusca.

### Modo de Fución

La propiedad se utiliza como **animation-fill-mode** indicá cual sería el relleno de mi animación que sería el valor final va a tener mi animación cuando está se ejecute, si nosotros hacemos que la animación solo se ejecute una vez, la animación volvera de su estado final a su estado inicial.

Pero podemos configurar estó y decir que gracias a fill-mode decirle como es que quiero que mi elemento se vea cuando acabé la animación. Si yo le digo que: 
``ànimation-fill-mode: forwards`` voy a decir que la animation se quedé con su estado final de está y que no regrese a su estado inicial.

### Estado de la Animation

Podemos configurar el estado de la animation y como se está moviendo, es decir se está rodando, es decir si esta en modo: play o si esta paused;
Está propiedad se utiliza como **animation-play-state:** que por defecto está en modo **running**. Si yo inidicó que mi esta en paused mi animtion en el mismo momento en el que declaramos la misma lo que pasará es que no se animará nada.

Pero el play-state: paused puede ayudar mucho si lo ponemos en otro lugar como por ejemplo en el *:hover* del elemento. Estó hará que cuando yo hagá el hover sobre mi elemento contenedor voy a hacer que el cuadrado hijo esté pausado osea la animation.

Así es como podemos controlar el estado de esa animation y poder pausarla en algún momento, por ejemplo si queremos hacer un banner animado y que se vea todo el tiempo pero cuando el usuario quiera interactuar con el o simplemten pausarlo podemos recurrir a esté elemento.

### Aceleración y curva de bezier

Pensemos por un momento cuando lanzamos una moneda al aire la cual obtiene un movimiento gracias a la fuerza de la mano, pero la moneda no se mantiene a la misma velocidad todo el tiempo, sino que es afectada por la gravedad y gracias a la gravedad es que obtiene algo que se llama **aceleración** lo que modifica su velocidad y ese factor el algo que debemos considerar muchisímo dentro de nuestras animaciónes en css, es por eso que **este Párametro es totalmente configurable.**

Por defecto las animaciones en CSS hacen que exista una aceleración por defecto, un **ease** por defecto, esto se puede configurar y se puede cambiar para lograr el efecto que nosotros queremos lograr.

La propiedad que nosotros debemos de configurar para cambiar esté valor es **animation-timing-function**. Aunqué las formas de tener aceleraciones en css vienen preconfiguradas con los valores: ``ease, ease-in, ease-out, ease-in-out, linear``
tenemos un valor que es **cubic-bezier(1,1,1,1);** o mejor concido como **la curva de bezier** el cual es un vector de moviento.

### Valores de cubic-bezier

#### ease

El ease nos dará una especie de aceleración acerca de lo que nosotros queremos por defecto. Es por eso que la configuración por defecto en CSS en animaciones es *ease*, porque que si queremos hacer animaciónes y no queremos configurar simplemente lo dejamos ahí y vamos a tener un efecto simpático. Pero si queremos hacer modificaciones sobre como está funcionando nuestra aceleracion acerca de nuestras animaciones podemos cambiarla.

#### ease-in

Hace que nuestras animaciones tengan una aceleración más suave al inicio, es decir que vallan más lento. Estó seria empezar lento y terminar más rápido.

#### ease-out

Con está propiedad hariamos totalmente lo contrario a *ease-in* pues en esté caso la animacion empezaría rápida y se volvería más lenta al finalizar.

#### ease-in-out 

Está propiedad hace que la animación valla *lento* tanto al *inicio* como al *final* y con un *valor normal en el intermedio*. Tendríamos algó como un efecto pendular aquí, si nosotros quisieramos animar un pendulo está sería una perfecta aceleración.

#### linear

Está propiedad es más mécanica ya que no recibe ningún tipo de aceleración, es decir que valla a un ritmo constante. Está propiedad es útil cuando deseamos que nuestra animación no tenga aceleración. *La valocidad de el elemento es la misma todo el tiempo*.

#### steps()

Con está propiedad nosotros podemos configurar nuestra animación por pasos, es decir si queremos que nuestra animación valla a ciertos frames por segundo o por el tiempo de la animación. *Está propiedad recibe el número de pasos que deseamos que ejecute la animación.*

#### Curva de Bezier

Con esté valor podemos configurar que la aceleración de nuestra animación sea fluida a nuestro gustó.

Está propiedad se usa como ``animation-timing-function: cubic-bezier(1, 1, 1, 1,);``
Los párametros de cubic bezier son 4 y solo pueden ir (-1 a 1). Si lo dejamos actualmente con solo valores de 1 obtenetemos un efecto *linear*.

Si nosotros cambiamos los párametros podemos hacer que la animación hagá cosas aún más interesantes, auque ir cambiando los valores es muy tedioso podemos recurrir a un recurso que se llamá [cubic-bezier.com](http://cubic-bezier.com/#.98,.1,.21,1.08).

Y aquí nosotros podemos configurar nuestra curva de bezier a nuestró gusto, y además la podemos comparar con las curvas de bezier pre-establecidas por css como: *ease, ease-in, ease-out, ease-in-out y linear*. Despues de configurar la curva podemos copiar los valores generados y pegarlos en la propiedad de nuestro cubic-bezier.

### Múltiples animaciones 

Nosotros podemos incluir multiples animaciones a un mismo elemento.

Para que esto ocurra necesitamos declarar una segunda animación, es decir poner otro *animation-name:* ¿Pero acaso tenemos que repetir esta propiedad tantas veces como la cantidad de animaciones que deseamos crear?

No es necesario pues si queremos agregar otra animación podemos anidarlas, es decir agregarlas en la misma linea e ir separandolas por comas.

De está misma manera podemos tomar todas la propiedades de animación que tengamos configuradas y por medio de comas podemos configurar algo custom para nuestra segunda animación, si no hacemos esto lo que va a ocurrir es que nuestras 2 animaciones van a tomar la configuración de la primera.

Ahora para crear la segunda animación necesitamos agregar un nuevo **@keyframes** porque esté si tiene que ser totalmente nuevo y dentro de las llaves podemos poner lo que hará está nueva animación.

**Nota:** Aparte de poder hacer una animación por porcentajes también podemos hacerla utilizando shortcuts de el 0% y el 100% y hay shortcuts para esto:

- 0% = from
- 100% = to

Obviamente en el centro podemos de from y to podemos poner los valores intermedios en porcentajes que nosotros quieramos modificar.

### Detectar eventos de animaciones CSS desde JavaScript

En ocaciones nosotros vamos a querer encadenar animaciones y para eso tenemos que ver que una animación terminé y empezar una nueva o cambiar la animación que tenía mi elemento inicialmente.

Haremos que nuestro ejemplo de la pelota tenga una tercer animación, la cual queremos aplicar cuando mi elemento regrese a su estado inicial es decir cuando terminé, esta última animación hará que mi elemento baje. Y se valla como si fuera una escalera. será una animación que será escalera 
```css
@keyframes escalera {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(500px);
  }
}
```
En esté caso estamos creando un keyframe para la tercerá animación escalera, la cúal hará caer a nuestra pelota cuando la primerá animación termine.

Lo que deseamos hacer en esté caso es que la Pelota rebote y cuando termine la animación de los rebotes entonces caíga al suelo. Para estó lo que nosotros **debemos detectar es el Fin de una animación.**

¿Como detectamos el fin de una animación?

Lo podemos hacer con JavaScript, vamos a abrir una etiqueta javascript para escribir código js en nuestro documento. Lo primero que tenemos que hacer es declarar ese elemento que nosotros queremos escuchar el fin y el inicio de esas animaciónes.

¿Quién es ese elemento? en esté caso es el circulo con la clase cuadrado el cúal vamos a agregarle un id para poder encontrarlo por su id desde javascript.

Ahora vamos a escuchar eventos dentro de nuestro cuadrado de la siguiente manera:

```javascript
const $cuadrado = document.getElementById('cuadrado');
$cuadrado.addEventListener('animationend', (event)=> {
  console.log(event);
})
```
Primero a nuestro cuadrado le decimos que evento queremos escuchar, y como segundo párametro le decimos que queremos hacer cuando se escuhe ese evento. El console.log nos ayudá a depurar y en esté caso imprimirá el envento cuando esté se ejecute es decir cuando la animación terminé.

¿Pero cuando se terminá nuestra animación?

En esté caso hay 1 animación que solo se ejecuta 1 sola vez que sería la segunda, nuestra animación de escalera que se ejecuta 1 sola vez y aquí es donde nosotros podemos escuchar el evento de que está cambió, como la otra se ejecuta de maneras infinitas, no hay forma de ver cuando se terminá, pero ese no es el problema en esté momento, pues lo que nos interesa es saber que se terminó nuestra primera animación y que se ejecute la segunda.

Lo que vamos a hacer ahora es encadenar las animaciones de ``cuadrado rebote``, vamos a indicar que nuestro cuadrado sea infinito y que nuestro rebote sea de 20 veces.

Ahora cuando nuestro evento se lanza nos lanzá varias cosas y en esté momento lo que nos interesá es obtener su animationName, en donde escribiremos una condición diciendole que cuando acabé el rebote le diremis que empiece lo de escalera, lo cuál lo haremos de la siguiente manera:
```javascript
const $cuadrado = document.getElementById('cuadrado');
    // $cuadrado.addEventListener('¿nombre del event?', ¿que hago cuando el evento ocurra?)
    $cuadrado.addEventListener('animationend', (event) => {
      console.log(event.animationName);
      if(event.animationName === 'rebote') {
        // Si quisiera poner más de una animación las podria anidar 
        $cuadrado.style.animationName = 'cuadrado escalera';
        $cuadrado.style.animationDuration = '3s';
        $cuadrado.style.animationIterationCount = '1';
        $cuadrado.style.animationFillMode = 'forwards';
      }
    })
```
También podemos escuchar la iteración y el evento start

```javascript
$cuadrado.addEventListener('animationstart', (event) => {}
$cuadrado.addEventListener('animationiteration', (event) => {}
$cuadrado.addEventListener('animationend', (event) => {}
```
De está manera podemos hacer lo que quieramos con nuestras animaciones, programarlas y encadenarlas como nosotros quieramos.

### Developer tools para animations

Nosotros podemos aprender a medir que es lo que ocurre con nuestras animaciones y que es el rendimiento y cuanto le cuesta al navegador ejecutarlas y de una manera muy sencilla.

Aquí lo que va a ocurrir es que vamos a aprender a medir que es lo que ocurre en el navegador cuando nuestra animacion o transicion se ejecuta y es que hay cambios, el render dentro de la pantalla tiene que cambiar porque el elemento se superpone a cosas o el elemento se está moviendo y la pantalla tiene que hacer un render de eso.

¿Pero que es lo que ocurre y cuanto le cuesta?

Podemos aprenderlo a ver dentro de chrome, para ello nosotros abrimos nuestro inpector de elementos y dentro de las developer tools nosotros podemos extender esas herramientas, haciendo click en mas->More tools, dentro podemos ver animations y rendering ambas nos van a ayudar en saber que es lo que ocurre con nuestra animación y cuanto le cuesta moverla al navegador.

- **Pain Flashing:** Puedo hacer que se pinte algo en la pantalla cada vez que mi elemento se mueva.

- **Layer Borders:** Puedo ver los cuadros que se dibujan con de todas la cajas que tienen los elementos html, que aunque nuestra pelota tenga un efecto circular gracias a border-radius vemos que al final del día es una caja porque todo en css es una caja.

- FPS Meter: A cuantos frames por segundo ocurre nuestra animation y ahí podemos ver que el rendimiento y también podemos ver cuantos megas está consumiendo nuestra apliación dentro del navegador y ahí podemos saber si nuestra aplicación va rápido, es fluida o consume muchos recursos.

Dentro de animations->tab Animations; podemos ver las animaciones que ocurren dentro del navegador, para ver estó tenemos que recargar la pantalla y vermos que se dibujan las animaciones que se están ejecutando. Y si hacemos hover en la animation que acabamos de ejecutar vemos que tenemos un preview de lo que ocurre en mi animation. 

¡Pero no solo eso! Yo puedo tomar ese elemento y puedo modificarlo y decirle que ese elemento sea diferente y aquí es donde yo puedo aprobar diferentes tiempos de animation, cambiarle el rebote, cambiar cosas, podemos bajar el tiempo o aumentarlo, tambíen que la animation corra al 100%, 25% o 10%.

### Optimizar render con will-change

Para ello vamos a quitar el animation-name y dejar un objeto sin animation. Ahora vamos a ver lo que ocurre con los cambios dentro de los elementos, Vemos que cuando recargamos el navegador hay un pintado general, ese es el pintado que ocurre del primer render del navegador, es decir cuando los elementos se ejecutan en pantalla y el css es interpretado 

#### ¿Pero cuantas veces va existir un Render?

* Cada vez que exista un cambió. 

Por ejemplo vamos a hacer que el elemento cuadrado sea de color rojo y le vamos a añadir una transición a ese elemento y que esa transition duré 3s y que cuando yo le *hagá hover a ese elemento:* cambiarle algó y ver que es lo que sucede en el navegador, en esté caso le vamos a cambiar la opacity y que se hagá 0 es decir que el elemento desaparezca, y si le hacemos hover, **el elemento desaparece pero existe un repintado ahí** , pues el navegador tiene que interpretar que tiene que haber un cambio, y simplemente dice: "OK voy a hacerlo" y lo hace, pero dependiendo del rendimiento que tenga el computador que renderize esa transition o animation estó va hacer más lento o más rápido *porque es en ese mismo momento donde le estamos avisando al navegador que tiene que cambiar*, entonces el tiene que improvisar y hacer lo mejor que puede para optimizar que esto ocurrá. 

**¡Pero nosotros podemos avisarle al navegador antes de que esto ocurrá que va a cambiar para que el navegador optimicé antes y pueda darnos un mejor render**.

**Will-Change:** quiere decir que algó va a cambiar y en esté caso lo que va a cambiar es *opacity*. Si guardamos y recargamos el navegador y hacemos hover al elemento, el elemento sigué desvaneciendose. Pero ahora el navegador ya no nos dice que hay un repintado de ese elemento es decir el Navegador ya sabe que tiene que renderear pero ya está preparado para hacerlo. Estó gracias a *will-change*.

Podemos aplicarle will-change a varias propiedades como por ejemplo: opacity, transform, etc. Si nosotros cambiaremos varias propiedades en esté caso en el hover nosotros podemos encadenar estas propiedades en will-change, ya que si no ponemos todas el navegador no sabrá que tiene que cambiar y hará un render inprevisto y esto significá más consumo de recursos a nivel de *Hardware* 

*Propiedades super optimizadas para will-changes:* opacity y tansform. Es por eso que las transformaciones son esenciales dentró del mundo de las animaciones porque las transformaciones está optimizadas para que estas se puedan ejecutar y no haiga cambios drásticos dentró del navegador, es decir que exista una aceleración por hardware y el navegador nos de lo mejor de si para que ese render ocurrá y se vea una animación totalmente, es por eso que **se recomienda OPTIMIZAR: trnasitions y animations con will-changes**.

### Propiedades animables

Existen muchas propiedades de los elementos web que se pueden animar, descarga el archivo y practica creando una animación con alguna de las propiedades que pueden ser animadas.

[Propiedades Animables](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)

## Web Animations API (Animaciones en JS)

CSS es muy genial y nos permite hacer las cosas de una manera muy sencilla, ¿Pero acaso yo puedo hacer animations de alguna otra manera que tál con JavaScript?

Por supuesto que podemos y así es que podemos hacer una nueva animación, vamos a empezar a hacer animations con javascriptElement.animate que sería parte de la especificacion de la API de animations de JavaScript.

Primero vamos a dibujar una pelota dentro de un container en el DOM el cual vamos a animar con JS, una vez teniendo nuestra pelota dibujada vamos a proceder a animarla con javascript.

Segundo debemos recibir el elemento que queremos animar dentro de javascript podemos hacerlo con cualquier atributo aunque se recomienda hacerlo por medio de su id.

Una vez que ya tenemos el objeto que queremos animar procedemos a hacer estó: la idea es que tengamos un *elemento.animate* aquí animate va a recibir 2 párametros, va a recibir los *keyframes* que son como ya hemos echo animations dentro de css que es un array, el segundo son las *opciones de configuración* que van a ser un objeto, pero ya que sabemos eso procedamos a aplicarlo a nuestro elemento.

Adentro de los keyframes vamos a crear nuestra animation, que queremos hacer: por ejemplo hagamos que nuestra pelota se mueva de izquierda a derecha, para ello usaremos una tranformation que sería un translateX para movernos en el eje horizontal que empiece en 0 y terminé en 500px, ahora para finalizar la animation, tengo que crear otro objeto con el cúal vamos a poder definir ese tranform, así que arreglamos la primera y aquí tenemos la option de cuando empieza y cuando terminá, estó sería como un from y un to, veamos que es un sintaxis nueva pero la idea es la misma y aplicamos los mismo conocimientos que teníamos en css para hacer estó.

Ahora dentro de las optiones yo tengo todo lo que podría hacer en css como por ejemplo: duration, delay, direction, easing, iterations, fill y 2 cosas nuevas que serían: **iterationStart, endDalay.**
















