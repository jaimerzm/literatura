const DBLiteratura = {
    "T11": {
        title: "Renacimiento Español (S.XVI)",
        questions: [
            // Pregunta 1 original: Cómo influyó la diferente mentalidad de Carlos I y Felipe II...
            {
                type: "mcq", // Multiple Choice Question
                question: "¿Qué actitud de Carlos I favoreció la llegada de ideas renacentistas a España?",
                options: [
                    "Rigidez y control absoluto sobre la cultura.",
                    "Mayor apertura cultural e intelectual.",
                    "Prioridad exclusiva a asuntos religiosos.",
                    "Desinterés total por las influencias extranjeras."
                ],
                answer: "Mayor apertura cultural e intelectual.",
                explanation: "Carlos I permitió una mayor apertura, mientras que Felipe II fue más rígido, frenando un poco esa libertad."
            },
            {
                type: "true-false",
                question: "Felipe II, al ser más rígido y controlador, impulsó la libertad creativa del Renacimiento en España tanto como Carlos I.",
                answer: false,
                explanation: "Felipe II frenó un poco la libertad intelectual, dando prioridad a asuntos religiosos y políticos."
            },
            // Pregunta 2 original: Cuáles son los temas que borran en la Antigüedad latina?
            {
                type: "multi-select", // Multiple answers possible
                question: "Según el texto, ¿qué temas de la Antigüedad latina se retoman en el Renacimiento? (Selecciona todas las correctas)",
                options: [
                    "La vida presente y el disfrute del momento (Carpe Diem).",
                    "Relatos mitológicos y épicos.",
                    "La vida ascética y el rechazo del mundo terrenal.",
                    "Escenarios como la vida sin ambiciones (Beatus Ille)."
                ],
                answer: ["La vida presente y el disfrute del momento (Carpe Diem).", "Relatos mitológicos y épicos.", "Escenarios como la vida sin ambiciones (Beatus Ille)."],
                explanation: "Se retoman temas como la vida presente, mitología, épica y el ideal de una vida sencilla."
            },
            // Pregunta 3 original: Nombra los diferentes subgéneros narrativos del siglo XVI...
            {
                type: "mcq",
                question: "¿Cuál de estos NO es un subgénero narrativo del siglo XVI mencionado?",
                options: [
                    "Novela de caballerías",
                    "Novela pastoril",
                    "Novela realista", // Esta no se menciona como tal, aunque la picaresca tiene elementos
                    "Novela picaresca"
                ],
                answer: "Novela realista",
                explanation: "Los subgéneros mencionados son: caballerías, pastoril, morisca, bizantina y picaresca."
            },
            {
                type: "mcq-fill", // Fill in the blank with MCQ
                question: "La novela pastoril, como 'Los siete Libros de la Diana', cuenta historias de ______ idealizado entre pastores.",
                options: ["odio", "amor", "aventuras", "misterio"],
                answer: "amor"
            },
            {
                type: "mcq",
                question: "¿Qué obra es representativa de la novela de caballerías?",
                options: [
                    "La Galatea",
                    "Amadís de Gaula",
                    "La vida de Lazarillo de Tormes",
                    "Historia de Abencerraje y la hermosa Jarifa"
                ],
                answer: "Amadís de Gaula"
            },
            // Pregunta 4 original: Explica la estructura de El Lazarillo.
            {
                type: "mcq",
                question: "¿A quién se dirige Lázaro en el prólogo de 'El Lazarillo de Tormes'?",
                options: [
                    "A un amigo cercano",
                    "A 'vuestra merced'",
                    "Al rey Carlos I",
                    "A un clérigo"
                ],
                answer: "A 'vuestra merced'",
                explanation: "Lázaro se dirige a 'vuestra merced' para contarle su vida y explicar el 'caso'."
            },
            {
                type: "true-false",
                question: "'El Lazarillo de Tormes' consta de un prólogo y 5 tratados.",
                answer: false,
                explanation: "Consta de un prólogo y 7 tratados."
            },
            {
                type: "mcq",
                question: "¿Con qué amo Lázaro aprende a usar la inteligencia para sobrevivir, a pesar de ser muy astuto y cruel?",
                options: ["El clérigo", "El escudero", "El ciego", "El buldero"],
                answer: "El ciego",
                explanation: "Con el ciego, su primer amo, Lázaro aprende a ser astuto para sobrevivir."
            },
             {
                type: "mcq",
                question: "¿Qué característica define al escudero, tercer amo de Lázaro?",
                options: [
                    "Era extremadamente rico y generoso.",
                    "Era un clérigo avaro que apenas le daba de comer.",
                    "Parecía elegante pero era muy pobre, y Lázaro lo mantenía.",
                    "Era un estafador que vendía bulas falsas."
                ],
                answer: "Parecía elegante pero era muy pobre, y Lázaro lo mantenía."
            },
            // Pregunta 5 original: Quién se cree que pudo ser el autor de El Lazarillo...
            {
                type: "mcq",
                question: "¿Por qué se cree que 'El Lazarillo de Tormes' se publicó de forma anónima?",
                options: [
                    "Porque el autor era muy humilde y no buscaba fama.",
                    "Para evitar problemas con la Inquisición debido a su crítica social y religiosa.",
                    "Porque era una obra colaborativa de varios autores.",
                    "Porque el autor olvidó firmar el manuscrito."
                ],
                answer: "Para evitar problemas con la Inquisición debido a su crítica social y religiosa."
            },
            // Pregunta 6 original: Explica cómo son los diferentes personajes que aparecen en El Lazarillo.
            {
                type: "mcq", // (Podríamos hacer un "emparejar" aquí, pero MCQ es más simple para empezar)
                question: "En 'El Lazarillo', ¿qué personaje es descrito como 'aún más tacaño y cruel' que el ciego, y un 'falso y cruel con el joven criado'?",
                options: ["El escudero", "El clérigo de Maqueda", "El fraile mercedario", "El buldero"],
                answer: "El clérigo de Maqueda"
            },
            // Pregunta 7 original: Explica por qué es considerado El Lazarillo una novela crítica.
            {
                type: "multi-select",
                question: "¿Qué aspectos de la sociedad del siglo XVI critica 'El Lazarillo de Tormes'? (Selecciona todas las correctas)",
                options: [
                    "La hipocresía de la Iglesia.",
                    "La obsesión por la honra.",
                    "La desigualdad social.",
                    "El exceso de libertad de los jóvenes."
                ],
                answer: ["La hipocresía de la Iglesia.", "La obsesión por la honra.", "La desigualdad social."],
                explanation: "Critica la hipocresía eclesiástica, la obsesión por la honra y la desigualdad social."
            },
            // Pregunta 8 original: Indica las principales características que definen la novela picaresca.
            {
                type: "mcq",
                question: "¿Cuál de estas NO es una característica de la novela picaresca?",
                options: [
                    "El protagonista es un pícaro de clase baja.",
                    "Es una falsa autobiografía narrada en primera persona.",
                    "El pícaro evoluciona moralmente y se convierte en un héroe.",
                    "Critica la sociedad de forma irónica y satírica."
                ],
                answer: "El pícaro evoluciona moralmente y se convierte en un héroe.",
                explanation: "Una característica clave es que el pícaro NO evoluciona moralmente."
            },
            // Pregunta 9 original: Qué autor teatral destacó en el teatro renacentista?
            {
                type: "mcq",
                question: "¿Qué autor teatral, considerado precursor del Siglo de Oro, destacó en el Renacimiento por sus 'pasos' cómicos?",
                options: ["Garcilaso de la Vega", "Lope de Rueda", "San Juan de la Cruz", "Fray Luis de León"],
                answer: "Lope de Rueda"
            },
            // Pregunta 10 original: Define: antropocentrismo y misticismo
            {
                type: "mcq",
                question: "La idea de que el ser humano es el centro del universo se conoce como:",
                options: ["Teocentrismo", "Misticismo", "Antropocentrismo", "Ascetismo"],
                answer: "Antropocentrismo"
            },
            {
                type: "mcq",
                question: "La búsqueda de la unión directa y profunda con Dios a través de la experiencia espiritual es el:",
                options: ["Antropocentrismo", "Humanismo", "Ascetismo", "Misticismo"],
                answer: "Misticismo"
            },
            // Pregunta 11 original: Cuáles son las características poéticas de Garcilaso de la Vega?
            {
                type: "multi-select",
                question: "¿Cuáles son características de la poesía de Garcilaso de la Vega? (Selecciona todas las correctas)",
                options: [
                    "Uso predominante de versos octosílabos y romances.",
                    "Sentimientos sinceros y tono melancólico.",
                    "Uso de versos italianos (endecasílabos, heptasílabos) y el soneto.",
                    "Tema amoroso idealizado, a menudo doloroso.",
                    "Paisaje urbano y realista."
                ],
                answer: ["Sentimientos sinceros y tono melancólico.", "Uso de versos italianos (endecasílabos, heptasílabos) y el soneto.", "Tema amoroso idealizado, a menudo doloroso."],
                explanation: "Garcilaso usa versos italianos, expresa sentimientos sinceros con melancolía, trata el amor idealizado y usa un paisaje idealizado (no urbano)."
            },
            // Pregunta 12 original: Qué diferencia existe entre la ascética y la mística?
            {
                type: "mcq",
                question: "¿Cuál es la principal diferencia entre ascética y mística?",
                options: [
                    "La ascética busca la unión con Dios, la mística el conocimiento racional.",
                    "La ascética es el esfuerzo y disciplina para acercarse a Dios; la mística es la unión directa y espiritual con Él.",
                    "La mística es exclusiva de poetas, la ascética de prosistas.",
                    "No hay diferencia fundamental, son sinónimos."
                ],
                answer: "La ascética es el esfuerzo y disciplina para acercarse a Dios; la mística es la unión directa y espiritual con Él."
            },
            {
                type: "mcq",
                question: "Considerando la ascética y la mística, ¿quién es un ejemplo de poeta asceta y quién de místico, respectivamente?",
                options: [
                    "San Juan de la Cruz (asceta) y Fray Luis de León (místico).",
                    "Garcilaso de la Vega (asceta) y Lope de Rueda (místico).",
                    "Fray Luis de León (asceta) y San Juan de la Cruz (místico).",
                    "Lope de Vega (asceta) y Cervantes (místico)."
                ],
                answer: "Fray Luis de León (asceta) y San Juan de la Cruz (místico)."
            }
        ]
    },
    "T12": {
        title: "Cervantes y la Prosa del Siglo de Oro",
        questions: [
            // Pregunta 1 (T12): Qué ocurrió a Fray Luis de León respecto a la traducción del "Cantar de los cantares"?
            {
                type: "mcq",
                question: "¿Por qué Fray Luis de León fue acusado por la Inquisición?",
                options: [
                    "Por escribir poesía amorosa considerada profana.",
                    "Por traducir el 'Cantar de los Cantares' del hebreo al castellano sin autorización.",
                    "Por cuestionar la autoridad del Papa.",
                    "Por practicar la mística sin ser sacerdote."
                ],
                answer: "Por traducir el 'Cantar de los Cantares' del hebreo al castellano sin autorización."
            },
            // Pregunta 2 (T12): San Juan de la Cruz fue un autor místico...
            {
                type: "true-false",
                question: "La poesía de San Juan de la Cruz se califica de 'inefable' porque es muy fácil de expresar con palabras comunes.",
                answer: false,
                explanation: "Inefable significa que es tan intensa y profunda que casi no se puede explicar con palabras."
            },
            {
                type: "mcq",
                question: "¿Qué significa que la poesía de San Juan de la Cruz sea 'inefable'?",
                options: [
                    "Que es incomprensible y carente de sentido.",
                    "Que trata temas mundanos y cotidianos.",
                    "Que expresa una experiencia tan profunda que es difícil de describir con palabras.",
                    "Que utiliza un lenguaje excesivamente complejo y oscuro."
                ],
                answer: "Que expresa una experiencia tan profunda que es difícil de describir con palabras."
            },
            // Pregunta 3 (T12): Indica las características de la obra cervantina.
            {
                type: "multi-select",
                question: "¿Cuáles de las siguientes son características de la obra cervantina? (Selecciona todas las correctas)",
                options: [
                    "Uso del humor y la ironía.",
                    "Perspectivismo (mostrar una realidad desde diferentes puntos de vista).",
                    "Personajes planos y sin desarrollo psicológico.",
                    "Búsqueda de la verosimilitud en sus historias.",
                    "Estilo exclusivamente culto y elevado."
                ],
                answer: ["Uso del humor y la ironía.", "Perspectivismo (mostrar una realidad desde diferentes puntos de vista).", "Búsqueda de la verosimilitud en sus historias."],
                explanation: "Cervantes usa humor, perspectivismo, busca verosimilitud y sus personajes tienen profundidad y hablan según su condición."
            },
            // Pregunta sobre obras destacadas (caja rosa y siguiente)
            {
                type: "mcq",
                question: "¿Cuál de estas obras NO es mencionada como destacada en la producción de Cervantes?",
                options: ["La Galatea", "El trato de Argel", "Viaje del Parnaso", "El Lazarillo de Tormes"],
                answer: "El Lazarillo de Tormes",
                explanation: "'El Lazarillo de Tormes' es anónimo, no de Cervantes. 'La Galatea', 'El trato de Argel' y 'Viaje del Parnaso' sí son suyas."
            },
            // Pregunta 4 (T12): Por qué Cervantes quiso escribir teatro y sin embargo no triunfó...
            {
                type: "mcq",
                question: "¿Por qué Cervantes no tuvo gran éxito en el teatro a pesar de su deseo?",
                options: [
                    "Porque el público prefería obras más serias y filosóficas.",
                    "Porque su estilo clásico no se adaptó a las nuevas fórmulas populares de Lope de Vega.",
                    "Porque el teatro no era un género rentable en su época.",
                    "Porque solo escribió tragedias y el público quería comedias."
                ],
                answer: "Porque su estilo clásico no se adaptó a las nuevas fórmulas populares de Lope de Vega."
            },
            // Pregunta 5 (T12): Indica las características esenciales de los entremeses cervantinos...
            {
                type: "mcq",
                question: "Los entremeses de Cervantes, como 'El juez de los divorcios', son piezas breves de carácter principalmente:",
                options: ["Trágico y solemne", "Cómico y crítico", "Didáctico y moralizante", "Pastoril y sentimental"],
                answer: "Cómico y crítico"
            },
            // Pregunta 6 (T12): Nombra los títulos más representativos del género narrativo e indica el subgénero.
            {
                type: "mcq",
                question: "'La Galatea' de Cervantes pertenece al subgénero de novela:",
                options: ["Picaresca", "De caballerías", "Pastoril", "Bizantina"],
                answer: "Pastoril"
            },
            {
                type: "mcq",
                question: "'El Quijote' es fundamentalmente una parodia de la novela:",
                options: ["Pastoril", "De caballerías", "Morisca", "Picaresca"],
                answer: "De caballerías"
            },
            // Pregunta 7 (T12): Explica la clasificación de las "Novelas ejemplares"...
            {
                type: "mcq",
                question: "¿Cómo se clasifican las 'Novelas ejemplares' de Cervantes y qué obra es ejemplo de las idealistas?",
                options: [
                    "Trágicas y cómicas; 'El coloquio de los perros' (trágica).",
                    "Idealistas y realistas; 'La española inglesa' (idealista).",
                    "Históricas y fantásticas; 'El amante liberal' (fantástica).",
                    "Costumbristas y satíricas; 'Rinconete y Cortadillo' (costumbrista)."
                ],
                answer: "Idealistas y realistas; 'La española inglesa' (idealista)."
            },
            // Pregunta 8 (T12): Indica 3 semejanzas y diferencias entre la primera parte de "El Quijote" y la segunda.
            {
                type: "mcq",
                question: "¿Cuál de estas NO es una semejanza entre la primera y segunda parte de 'El Quijote'?",
                options: [
                    "Mismos protagonistas (Don Quijote y Sancho).",
                    "Parodia de los libros de caballerías.",
                    "Don Quijote es un personaje desconocido para el mundo en ambas partes.",
                    "Combinación de humor y crítica social."
                ],
                answer: "Don Quijote es un personaje desconocido para el mundo en ambas partes.",
                explanation: "En la segunda parte, Don Quijote ya es un personaje conocido debido a la publicación de la primera parte."
            },
            {
                type: "mcq",
                question: "Una diferencia clave de la segunda parte de 'El Quijote' respecto a la primera es:",
                options: [
                    "La ausencia de Sancho Panza.",
                    "Un tono más superficial y menos reflexivo.",
                    "Mayor madurez psicológica en los personajes y un tono más serio.",
                    "Menos aventuras y más diálogos filosóficos."
                ],
                answer: "Mayor madurez psicológica en los personajes y un tono más serio."
            },
            // Pregunta 9 (T12): Explica por qué Cervantes se vio abocado a publicar la segunda parte de "El Quijote".
            {
                type: "mcq",
                question: "Cervantes publicó la segunda parte de 'El Quijote' principalmente para:",
                options: [
                    "Introducir nuevos personajes y tramas.",
                    "Responder a la publicación de un falso Quijote de Avellaneda y proteger su obra.",
                    "Experimentar con un estilo narrativo diferente.",
                    "Satisfacer la demanda popular por más aventuras cómicas."
                ],
                answer: "Responder a la publicación de un falso Quijote de Avellaneda y proteger su obra."
            },
            // Pregunta 10 (T12): Cómo acaba la segunda parte de "El Quijote" y por qué Cervantes hizo eso?
            {
                type: "mcq",
                question: "¿Cómo termina 'El Quijote' y cuál fue la intención de Cervantes con ese final?",
                options: [
                    "Don Quijote se casa y vive feliz para siempre, para dar un final alegre.",
                    "Don Quijote recupera la cordura y muere, para evitar continuaciones apócrifas.",
                    "Sancho Panza se convierte en un caballero andante, para continuar la saga.",
                    "Don Quijote emprende un tercer viaje, dejando un final abierto."
                ],
                answer: "Don Quijote recupera la cordura y muere, para evitar continuaciones apócrifas."
            },
            // Pregunta 11 (T12): Explica en qué consiste la técnica del narrador poliédrico de "El Quijote".
            {
                type: "mcq",
                question: "La técnica del narrador poliédrico en 'El Quijote' consiste en:",
                options: [
                    "Un único narrador omnisciente que todo lo sabe.",
                    "La presencia de varios narradores y diferentes puntos de vista.",
                    "Que la historia es narrada exclusivamente por Don Quijote.",
                    "El uso de un lenguaje muy complejo y difícil de entender."
                ],
                answer: "La presencia de varios narradores y diferentes puntos de vista."
            },
            // Pregunta 12 (T12): Qué son las novelas intercaladas de "El Quijote"?
            {
                type: "true-false",
                question: "Las novelas intercaladas en 'El Quijote' siempre aceleran la trama principal y pertenecen exclusivamente al subgénero caballeresco.",
                answer: false,
                explanation: "A veces ralentizan la trama principal y reflejan diversos subgéneros (picaresco, sentimental, etc.), enriqueciendo la obra."
            },
            // Pregunta 13 (T12): Explica el valor simbólico que adquieren Sancho y Quijote.
            {
                type: "mcq",
                question: "Simbólicamente, Don Quijote representa el ________, mientras Sancho Panza representa el ________.",
                options: [
                    "realismo / idealismo",
                    "idealismo / realismo",
                    "pesimismo / optimismo",
                    "optimismo / pesimismo"
                ],
                answer: "idealismo / realismo"
            },
            // Pregunta 14 (T12): Qué es la quijotización y la sanchificación?
            {
                type: "mcq",
                question: "El proceso por el cual Sancho Panza adopta parte del idealismo de Don Quijote se llama:",
                options: ["Sanchificación", "Quijotización", "Idealización", "Realistización"],
                answer: "Quijotización"
            },
            {
                type: "mcq",
                question: "Cuando Don Quijote empieza a mostrarse más sensato y a dudar de sus aventuras, influido por Sancho, experimenta un proceso de:",
                options: ["Quijotización", "Alienación", "Sanchificación", "Pragmatismo"],
                answer: "Sanchificación"
            },
            // Pregunta 15 (T12): Nombra las principales características del estilo de "El Quijote".
            {
                type: "multi-select",
                question: "¿Cuáles son características del estilo de 'El Quijote'? (Selecciona todas las correctas)",
                options: [
                    "Mezcla de registros cultos y populares.",
                    "Uso constante de la ironía y el humor.",
                    "Narrativa estática y poco dinámica.",
                    "Reflexión profunda sobre la literatura y la vida.",
                    "Ausencia de técnicas narrativas innovadoras."
                ],
                answer: ["Mezcla de registros cultos y populares.", "Uso constante de la ironía y el humor.", "Reflexión profunda sobre la literatura y la vida."],
                explanation: "El estilo de El Quijote es dinámico e incluye técnicas innovadoras como la intertextualidad."
            }
        ]
    }
    // Puedes añadir más temas aquí (T13, T14...)
};
