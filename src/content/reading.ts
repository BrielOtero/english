import type { Reading } from '../types';

// Graded comprehensible-input texts. Generated content.
export const READINGS: Reading[] = [
  {
    id: 'rd-mi-dia',
    level: 'A1',
    title: 'Mi día',
    blurb: "A simple description of one person's daily routine.",
    paragraphs: [
      'Hola. Me llamo Ana. Vivo en Madrid. Cada día, me levanto a las siete de la mañana.',
      'Por la mañana, bebo café y como pan con tomate. Después, voy al trabajo en autobús.',
      'Trabajo en una tienda pequeña. Me gusta mi trabajo. Hablo con muchas personas.',
      'Por la noche, ceno con mi familia. A las once, voy a la cama. Estoy muy cansada.',
    ],
    glossary: [
      {
        word: 'me levanto',
        es: 'acción de salir de la cama por la mañana',
      },
      {
        word: 'bebo',
        es: 'tomo un líquido, como agua o café',
      },
      {
        word: 'trabajo',
        es: 'lugar o actividad donde una persona gana dinero',
      },
      {
        word: 'tienda',
        es: 'lugar donde se compran cosas',
      },
      {
        word: 'cansada',
        es: 'sin energía, con ganas de descansar',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        id: 'q1',
        prompt: '¿A qué hora se levanta Ana?',
        options: ['A las seis', 'A las siete', 'A las once'],
        answer: 1,
        explain: 'El texto dice: "me levanto a las siete de la mañana".',
      },
      {
        kind: 'mcq',
        id: 'q2',
        prompt: '¿Dónde trabaja Ana?',
        options: ['En una tienda pequeña', 'En un autobús', 'En un café'],
        answer: 0,
        explain: 'El texto dice: "Trabajo en una tienda pequeña".',
      },
      {
        kind: 'mcq',
        id: 'q3',
        prompt: '¿Cómo va Ana al trabajo?',
        options: ['En coche', 'Caminando', 'En autobús'],
        answer: 2,
        explain: 'El texto dice: "voy al trabajo en autobús".',
      },
    ],
  },
  {
    id: 'rd-mi-familia',
    level: 'A1',
    title: 'Mi familia',
    blurb: 'A child introduces the members of his family.',
    paragraphs: [
      'Soy Tom. Tengo ocho años. Vivo en una casa grande con mi familia.',
      'Mi padre se llama John. Es alto. Mi madre se llama Mary. Ella cocina muy bien.',
      'Tengo una hermana. Se llama Lucy. Lucy tiene cinco años. Jugamos juntos.',
      'También tengo un perro. El perro es negro y se llama Max. Quiero mucho a mi familia.',
    ],
    glossary: [
      {
        word: 'familia',
        es: 'grupo de personas como padres, hijos y hermanos',
      },
      {
        word: 'padre',
        es: 'hombre que tiene hijos; papá',
      },
      {
        word: 'madre',
        es: 'mujer que tiene hijos; mamá',
      },
      {
        word: 'hermana',
        es: 'hija de los mismos padres (mujer)',
      },
      {
        word: 'perro',
        es: 'animal doméstico que ladra',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        id: 'q1',
        prompt: '¿Cuántos años tiene Tom?',
        options: ['Cinco', 'Ocho', 'Diez'],
        answer: 1,
        explain: 'El texto dice: "Tengo ocho años".',
      },
      {
        kind: 'mcq',
        id: 'q2',
        prompt: '¿Cómo se llama el perro?',
        options: ['Max', 'Lucy', 'John'],
        answer: 0,
        explain: 'El texto dice: "El perro es negro y se llama Max".',
      },
      {
        kind: 'mcq',
        id: 'q3',
        prompt: '¿Qué hace bien la madre?',
        options: ['Juega', 'Cocina', 'Corre'],
        answer: 1,
        explain: 'El texto dice: "Ella cocina muy bien".',
      },
    ],
  },
  {
    id: 'rd-fin-de-semana',
    level: 'A2',
    title: 'Un fin de semana en la montaña',
    blurb: 'Two friends spend a weekend hiking and discover something unexpected.',
    paragraphs: [
      'El sábado pasado, Carlos y Marta fueron a la montaña. Salieron temprano porque querían caminar mucho.',
      'El camino era difícil, pero el paisaje era precioso. Vieron árboles verdes, un río pequeño y muchos pájaros.',
      'A mediodía, comieron unos bocadillos cerca del río. De repente, vieron una cabaña vieja entre los árboles.',
      'Dentro de la cabaña había una mesa, dos sillas y un mapa antiguo. Decidieron volver el próximo fin de semana para explorar más.',
    ],
    glossary: [
      {
        word: 'montaña',
        es: 'elevación grande de tierra, más alta que una colina',
      },
      {
        word: 'paisaje',
        es: 'vista del campo o la naturaleza',
      },
      {
        word: 'bocadillos',
        es: 'comida hecha con pan y algo dentro',
      },
      {
        word: 'cabaña',
        es: 'casa pequeña y simple, normalmente en el campo',
      },
      {
        word: 'de repente',
        es: 'de forma rápida e inesperada',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        id: 'q1',
        prompt: '¿Por qué salieron temprano Carlos y Marta?',
        options: [
          'Porque hacía frío',
          'Porque querían caminar mucho',
          'Porque el autobús salía pronto',
        ],
        answer: 1,
        explain: 'El texto dice: "Salieron temprano porque querían caminar mucho".',
      },
      {
        kind: 'mcq',
        id: 'q2',
        prompt: '¿Qué encontraron entre los árboles?',
        options: ['Una cabaña vieja', 'Un coche', 'Una tienda'],
        answer: 0,
        explain: 'El texto dice: "vieron una cabaña vieja entre los árboles".',
      },
      {
        kind: 'mcq',
        id: 'q3',
        prompt: '¿Qué decidieron hacer al final?',
        options: ['Quedarse a dormir', 'Llamar a la policía', 'Volver el próximo fin de semana'],
        answer: 2,
        explain: 'El texto dice: "Decidieron volver el próximo fin de semana para explorar más".',
      },
    ],
  },
  {
    id: 'rd-comida-favorita',
    level: 'A2',
    title: 'Mi comida favorita',
    blurb: 'A short informative text about a popular dish and how to enjoy it.',
    paragraphs: [
      'A mucha gente le gusta la pizza, pero mi comida favorita es la tortilla de patatas. Es un plato típico de España.',
      'Para hacerla, necesitas huevos, patatas, cebolla y aceite. No es muy difícil, pero hay que tener paciencia.',
      'Primero, cortas las patatas y la cebolla. Luego, las fríes despacio en una sartén. Después, mezclas todo con los huevos.',
      'Me gusta comerla caliente con un poco de pan. En verano, también está rica fría. ¡Es perfecta para cualquier momento!',
    ],
    glossary: [
      {
        word: 'plato',
        es: 'comida preparada; también el objeto donde se come',
      },
      {
        word: 'huevos',
        es: 'alimento que ponen las gallinas',
      },
      {
        word: 'cebolla',
        es: 'verdura redonda de sabor fuerte',
      },
      {
        word: 'sartén',
        es: 'recipiente plano para freír comida',
      },
      {
        word: 'paciencia',
        es: 'capacidad de esperar con calma',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        id: 'q1',
        prompt: '¿Cuál es la comida favorita del autor?',
        options: ['La pizza', 'La tortilla de patatas', 'El pan'],
        answer: 1,
        explain: 'El texto dice: "mi comida favorita es la tortilla de patatas".',
      },
      {
        kind: 'mcq',
        id: 'q2',
        prompt: '¿Qué ingrediente NO se menciona?',
        options: ['Queso', 'Huevos', 'Cebolla'],
        answer: 0,
        explain: 'El texto menciona "huevos, patatas, cebolla y aceite", pero no queso.',
      },
      {
        kind: 'mcq',
        id: 'q3',
        prompt: '¿Cómo se fríen las patatas?',
        options: ['Muy rápido', 'Despacio', 'Sin aceite'],
        answer: 1,
        explain: 'El texto dice: "las fríes despacio en una sartén".',
      },
    ],
  },
  {
    id: 'rd-cafe-de-la-esquina',
    level: 'B1',
    title: 'El café de la esquina',
    blurb: 'A young woman finds an unexpected sense of belonging in a small neighborhood café.',
    paragraphs: [
      'Cuando Laura se mudó a la ciudad, no conocía a nadie. Las calles le parecían enormes y la gente siempre tenía prisa. Durante las primeras semanas, se sintió bastante sola.',
      'Una mañana lluviosa, entró en un café pequeño que estaba en la esquina de su calle. El dueño, un hombre mayor llamado Don Pedro, la saludó con una sonrisa y le recomendó un café con leche y un trozo de bizcocho casero.',
      'Poco a poco, Laura empezó a ir cada día. Don Pedro recordaba su nombre, le preguntaba por su trabajo y le presentaba a otros clientes habituales. Sin darse cuenta, aquel lugar se convirtió en su segundo hogar.',
      'Meses después, Laura comprendió que una ciudad no se hace tuya por sus monumentos ni por sus avenidas, sino por las personas que te hacen sentir que perteneces a algún sitio.',
    ],
    glossary: [
      {
        word: 'mudarse',
        es: 'cambiar de casa o de ciudad para vivir',
      },
      {
        word: 'tener prisa',
        es: 'necesitar hacer algo rápidamente, sin tiempo',
      },
      {
        word: 'dueño',
        es: 'persona propietaria de algo, como un negocio',
      },
      {
        word: 'bizcocho',
        es: 'pastel esponjoso y dulce',
      },
      {
        word: 'pertenecer',
        es: 'formar parte de un grupo o lugar',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        id: 'q1',
        prompt: '¿Cómo se sentía Laura al principio en la ciudad?',
        options: ['Muy feliz', 'Bastante sola', 'Enfadada con Don Pedro'],
        answer: 1,
        explain: 'El texto dice: "Durante las primeras semanas, se sintió bastante sola".',
      },
      {
        kind: 'mcq',
        id: 'q2',
        prompt: '¿Qué hizo Don Pedro la primera vez?',
        options: [
          'Le pidió dinero por adelantado',
          'La saludó con una sonrisa y le recomendó algo',
          'La ignoró',
        ],
        answer: 1,
        explain:
          'El texto dice: "la saludó con una sonrisa y le recomendó un café con leche y un trozo de bizcocho casero".',
      },
      {
        kind: 'mcq',
        id: 'q3',
        prompt: 'Según el final, ¿qué hace que una ciudad sea "tuya"?',
        options: [
          'Sus monumentos',
          'Sus avenidas',
          'Las personas que te hacen sentir que perteneces',
        ],
        answer: 2,
        explain:
          'El texto dice que una ciudad se hace tuya "por las personas que te hacen sentir que perteneces a algún sitio".',
      },
    ],
  },
  {
    id: 'rd-suenos-y-memoria',
    level: 'B1',
    title: 'Por qué soñamos',
    blurb: 'An informative article exploring what science says about the purpose of dreams.',
    paragraphs: [
      'Todas las noches, mientras dormimos, nuestro cerebro crea historias extrañas que llamamos sueños. Aunque parezca algo simple, los científicos todavía no se ponen de acuerdo sobre por qué soñamos.',
      'Una de las teorías más aceptadas dice que los sueños ayudan a organizar la memoria. Durante el sueño, el cerebro repasa lo que ha pasado durante el día y decide qué información es importante guardar y cuál puede olvidar.',
      'Otros investigadores creen que soñar sirve para practicar situaciones difíciles. Por ejemplo, una pesadilla podría preparar a la mente para reaccionar mejor ante un peligro real.',
      'Lo curioso es que casi siempre olvidamos nuestros sueños pocos minutos después de despertarnos. Por eso, aunque la ciencia avanza, el mundo de los sueños sigue guardando muchos secretos.',
    ],
    glossary: [
      {
        word: 'cerebro',
        es: 'órgano de la cabeza que controla el pensamiento',
      },
      {
        word: 'teoría',
        es: 'explicación que intenta describir cómo funciona algo',
      },
      {
        word: 'repasar',
        es: 'revisar de nuevo algo ya conocido',
      },
      {
        word: 'pesadilla',
        es: 'sueño malo que causa miedo',
      },
      {
        word: 'despertarse',
        es: 'dejar de dormir',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        id: 'q1',
        prompt: 'Según una teoría aceptada, ¿para qué sirven los sueños?',
        options: ['Para descansar los músculos', 'Para organizar la memoria', 'Para ver el futuro'],
        answer: 1,
        explain: 'El texto dice: "los sueños ayudan a organizar la memoria".',
      },
      {
        kind: 'mcq',
        id: 'q2',
        prompt: '¿Qué podría hacer una pesadilla según otros investigadores?',
        options: [
          'Preparar la mente para reaccionar ante un peligro',
          'Mejorar la vista',
          'Causar enfermedades',
        ],
        answer: 0,
        explain:
          'El texto dice que "una pesadilla podría preparar a la mente para reaccionar mejor ante un peligro real".',
      },
      {
        kind: 'mcq',
        id: 'q3',
        prompt: '¿Qué pasa normalmente con los sueños tras despertarnos?',
        options: [
          'Los recordamos toda la vida',
          'Los olvidamos pocos minutos después',
          'Se hacen realidad',
        ],
        answer: 1,
        explain:
          'El texto dice: "casi siempre olvidamos nuestros sueños pocos minutos después de despertarnos".',
      },
    ],
  },
  {
    id: 'rd-trabajo-remoto',
    level: 'B2',
    title: 'El auge del trabajo a distancia',
    blurb: 'A balanced article weighing the benefits and drawbacks of remote work.',
    paragraphs: [
      'En la última década, y especialmente tras la pandemia, el trabajo a distancia ha pasado de ser una excepción a convertirse en una opción habitual para millones de personas. Lo que antes parecía un privilegio reservado a unos pocos se ha normalizado en numerosos sectores.',
      'Entre las ventajas más evidentes destaca la flexibilidad. Quienes trabajan desde casa suelen ahorrar tiempo y dinero en desplazamientos, y muchos afirman que concilian mejor su vida laboral y personal. Además, las empresas pueden contratar talento sin importar dónde resida.',
      'Sin embargo, no todo son beneficios. Algunos empleados se quejan de que la frontera entre el trabajo y el descanso se vuelve borrosa, lo que puede provocar agotamiento. La falta de contacto cara a cara también dificulta el sentido de pertenencia y la colaboración espontánea.',
      'Por ello, cada vez más organizaciones apuestan por modelos híbridos, que combinan días en la oficina con jornadas en remoto. El reto, en definitiva, no consiste en elegir entre un extremo y otro, sino en encontrar un equilibrio que beneficie tanto a la empresa como a las personas.',
    ],
    glossary: [
      {
        word: 'auge',
        es: 'momento de mayor crecimiento o popularidad',
      },
      {
        word: 'desplazamiento',
        es: 'viaje de un lugar a otro, por ejemplo al trabajo',
      },
      {
        word: 'conciliar',
        es: 'hacer compatibles dos cosas, como trabajo y familia',
      },
      {
        word: 'borroso',
        es: 'poco claro, difícil de distinguir',
      },
      {
        word: 'agotamiento',
        es: 'cansancio físico o mental muy grande',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        id: 'q1',
        prompt: '¿Qué ventaja del trabajo a distancia se destaca como la más evidente?',
        options: ['La flexibilidad', 'Un salario más alto', 'Menos reuniones'],
        answer: 0,
        explain: 'El texto dice: "Entre las ventajas más evidentes destaca la flexibilidad".',
      },
      {
        kind: 'mcq',
        id: 'q2',
        prompt: '¿Qué problema mencionan algunos empleados?',
        options: [
          'Que ganan menos dinero',
          'Que la frontera entre trabajo y descanso se vuelve borrosa',
          'Que no tienen ordenador',
        ],
        answer: 1,
        explain:
          'El texto dice que "la frontera entre el trabajo y el descanso se vuelve borrosa, lo que puede provocar agotamiento".',
      },
      {
        kind: 'mcq',
        id: 'q3',
        prompt: 'Según el texto, ¿cuál es el verdadero reto?',
        options: [
          'Eliminar las oficinas',
          'Encontrar un equilibrio que beneficie a la empresa y a las personas',
          'Trabajar siempre desde casa',
        ],
        answer: 1,
        explain:
          'El texto dice que el reto es "encontrar un equilibrio que beneficie tanto a la empresa como a las personas".',
      },
    ],
  },
  {
    id: 'rd-lengua-y-pensamiento',
    level: 'C1',
    title: '¿Moldea el lenguaje nuestro modo de pensar?',
    blurb:
      'An essay on the longstanding debate over whether the language we speak shapes our perception of reality.',
    paragraphs: [
      'Pocas cuestiones han fascinado tanto a lingüistas, filósofos y psicólogos como la posibilidad de que la lengua que hablamos condicione la manera en que percibimos el mundo. La célebre hipótesis de Sapir-Whorf, formulada a mediados del siglo XX, sostenía en su versión más radical que el idioma determina el pensamiento, hasta el punto de que aquello que no podemos nombrar nos resultaría literalmente impensable.',
      'Con el tiempo, esa formulación extrema cayó en descrédito. Resultaba difícil sostener que un hablante fuera incapaz de concebir un color o un concepto por el mero hecho de carecer de una palabra específica para designarlo. No obstante, sería precipitado descartar la idea por completo, pues investigaciones recientes han matizado el debate con datos más sutiles.',
      'Diversos estudios experimentales sugieren que, si bien la lengua no encarcela el pensamiento, sí orienta sutilmente la atención. Los hablantes de idiomas que distinguen obligatoriamente entre tonos de azul, por ejemplo, tienden a discriminar esos matices con mayor rapidez; del mismo modo, las lenguas que asignan género gramatical a los objetos parecen influir en los atributos que sus hablantes les atribuyen de forma espontánea.',
      'Quizá la conclusión más prudente sea reconocer que el lenguaje no es ni una cárcel ni un simple vestido del pensamiento, sino una lente. No nos impide ver lo que existe, pero sí enfoca ciertos aspectos de la realidad y deja otros en penumbra. Comprender ese matiz nos invita a la humildad: aprender otra lengua no consiste únicamente en traducir palabras, sino en ensayar, siquiera por un instante, otra forma de habitar el mundo.',
    ],
    glossary: [
      {
        word: 'condicionar',
        es: 'influir en algo de manera que dependa de otra cosa',
      },
      {
        word: 'descrédito',
        es: 'pérdida de prestigio o de credibilidad',
      },
      {
        word: 'matizar',
        es: 'añadir precisiones que hacen una idea más exacta',
      },
      {
        word: 'discriminar',
        es: 'distinguir o diferenciar una cosa de otra',
      },
      {
        word: 'penumbra',
        es: 'luz débil entre la claridad y la oscuridad',
      },
      {
        word: 'humildad',
        es: 'actitud de reconocer los propios límites',
      },
    ],
    questions: [
      {
        kind: 'mcq',
        id: 'q1',
        prompt: 'Según su versión más radical, ¿qué afirmaba la hipótesis de Sapir-Whorf?',
        options: [
          'Que el idioma determina el pensamiento',
          'Que todas las lenguas son iguales',
          'Que el pensamiento no existe sin emociones',
        ],
        answer: 0,
        explain: 'El texto dice que sostenía "que el idioma determina el pensamiento".',
      },
      {
        kind: 'mcq',
        id: 'q2',
        prompt: '¿Qué sugieren los estudios experimentales recientes?',
        options: [
          'Que la lengua encarcela por completo el pensamiento',
          'Que la lengua no encarcela el pensamiento pero orienta sutilmente la atención',
          'Que el lenguaje no influye en nada',
        ],
        answer: 1,
        explain:
          'El texto dice que "la lengua no encarcela el pensamiento, sí orienta sutilmente la atención".',
      },
      {
        kind: 'mcq',
        id: 'q3',
        prompt: '¿Con qué metáfora final describe el autor el lenguaje?',
        options: ['Una cárcel', 'Un simple vestido', 'Una lente'],
        answer: 2,
        explain:
          'El texto concluye que el lenguaje "no es ni una cárcel ni un simple vestido del pensamiento, sino una lente".',
      },
    ],
  },
];
