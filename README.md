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

