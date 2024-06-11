import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Real Madrid', 'White'),
  new Category('c2', 'Barcelona', '#green'),
  new Category('c3', 'Real Sociedad', '#f5a442'),
  new Category('c4', 'Atletico de Madrid', '#f5d142'),
  new Category('c5', 'Porto FC', '#368dff'),
  new Category('c6', 'Halcones FC', '#41d95d'),
  
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1', 'c2'],
    'FC REAL MADRID ',
    'HALAA MADRID!!',
    'EL MEJOR DE TODOS LOS TIEMPOS',
    'https://www.google.com/imgres?q=IMAGENES%20DE%20REAL%20MADRID&imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F55%2F01%2Fac%2F5501ac765b9c4942bcea2108848b315a.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F181832903699165410%2F&docid=83mwi-WjAoal1M&tbnid=fsccmLqxSMKRLM&vet=12ahUKEwi845uznNSGAxXRIUQIHWYqDjcQM3oECB4QAA..i&w=960&h=1664&hcb=2&ved=2ahUKEwi845uznNSGAxXRIUQIHWYqDjcQM3oECB4QAA',
    20,
    [
      '15 Champions Ligues',
      '20 Copas del Rey',
      '3 Intercontinentales',
      '5 Mundiales de Clubes',
      'Juntando un total de 43 titulos mencionados. Aunque faltan de mencionar mas.',
      'Equipo de colores Blanco, Dorado y Azul Rey'
    ],
    [
      'l Real Madrid fue fundado en 1902. Julián Palacios es el primer presidente, pero fue Juan Padrós, catalán y de Barcelona, quien formalmente',
      'constituyó la institución ese año. El interés en el fútbol crecía tanto en España que el Madrid propuso realizar un torneo en honor al rey',
      'Alfonso XIII.',
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm2',
    ['c2'],
    'FC BARCELONA',
    'MES QUE UN CLUBE',
    'EL MEJOR DE BARCELONA',

    'https://www.google.com/imgres?q=FC%20BARCELONA&imgurl=https%3A%2F%2Fsumma.es%2Fwp-content%2Fuploads%2F2022%2F07%2FBARC%25CC%25A7A_1.jpg&imgrefurl=https%3A%2F%2Fsumma.es%2Fall-projects%2Ffc-barcelona%2F&docid=ggXYFmLCH3gmqM&tbnid=igfeNihbegQHbM&vet=12ahUKEwitpK6en9SGAxUjPEQIHYC1AD4QM3oECCIQAA..i&w=2560&h=1184&hcb=2&ved=2ahUKEwitpK6en9SGAxUjPEQIHYC1AD4QM3oECCIQAA',
    0,
    [
      '27 Ligas',
      '31 Copas Del Rey',
      '14 super copas de España',
      '2 copas de la Liga',
      '3 COPAS Eva Duarte'
    ],

    [
      'Historia del FC Barcelona. En 1899, Joan Gamper, un hombre suizo, decidió introducir el fútbol en Barcelona mediante la creación de un equipo. El',
       'club fue fundado oficialmente el veintinueve de noviembre de 1899. Creció y cobró fuerza, ganando títulos como la Copa Macaya en 1902, la Copa de',
       ' los Pirineos en 1910 - 1912.'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm3',
    ['c3'],
    'Real Sociedad',
    'Todo esfuerzo tiene su recompensa',
    'Blanco Azul y Naranja',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fresultados.as.com%2Fresultados%2Fficha%2Fequipo%2Fr_sociedad%2F16%2F&psig=AOvVaw0FVNBnIMzb6ShmkEhU623_&ust=1718232973812000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMC5xuLS1IYDFQAAAAAdAAAAABAE',
    45,
    [
      '2 titulos de liga',
      '3 copas del Rey',
      '1 Super copa de España',
      '1 copa Internacional'
    
    ],
    [
      'La Real Sociedad es un club español, de la ciudad de San Sebastián (País Vasco) fundado en 1909 ',
      'a través del Club Ciclista de San Sebastián y comenzó llamándose Ciclista Football-Club.',
      'El equipo juega en el Reale Arena que por motivos de patrocinio es nombrado así desde la temporada 2019/2020.'
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm4',
    ['c4'],
    'Atletico De Madrid',
    '!Nunca dejes de creer',
    'Corazon y Coraje',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.co.uk%2Fpin%2F806566614488886804%2F&psig=AOvVaw0q3ig1l-XchxPP5y21Kkxr&ust=1718233537351000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJjGkvLU1IYDFQAAAAAdAAAAABAE',
    60,
    [
      '11 Ligas Españolas',
      '10 Copas Del Rey',
      '2 Super Copas De España',
      '1 Copa Confederaciones',
      '73 Campeonatos Regionales',
      '65 Copas Nacionales'
      
    ],
    [
     'La historia del Atlético de Madrid se remonta a 1903, cuando un grupo de estudiantes vascos',
     'fundaron un club en Madrid que funcionaría como "sucursal" del Athletic Club. ',
      'El Athletic Club Sucursal de Madrid funcionaría como un filial hasta 1921, vistiendo como el conjunto bilbaíno'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm5',
    ['c5'],
    'Porto FC',
    'Siempre PREPARADOS',
    'https://www.google.com/imgres?q=lema%20del%20porto%20FC&imgurl=https%3A%2F%2Fblogger.googleusercontent.com%2Fimg%2Fb%2FR29vZ2xl%2FAVvXsEiXOM5GxKTDm-S1HVqolB0-3sDTmraYAy2wOUyGm9jPoCBaYCp9Y3HxcOyx5QHNHG6gCNO0NK3C1MHx74UpK9nD0THgvg9wW9m0pCFKtb9iYroGSzHH8SMVR1RXnNhQ9d2LHJw9AkjNrjw%2Fs1600%2FSempre%2BPreparados.jpg&imgrefurl=https%3A%2F%2Fwww.nuevaeradeportiva.com%2F2014%2F06%2Fya-se-conocen-las-dos-equipaciones-del.html&docid=8KRGR1IbIGLFmM&tbnid=XsGK7z6VKHvDwM&vet=12ahUKEwi5jPbL1tSGAxW5CjQIHZccDjEQM3oECGIQAA..i&w=600&h=600&hcb=2&ved=2ahUKEwi5jPbL1tSGAxW5CjQIHZccDjEQM3oECGIQAA',
    15,
    [
      '2 Champions Ligue',
      "2 Mundiales De Clubes",
      '30 Campion De Portugal',
      '1 copa de portugal',
      '2 copas internacionales' 
    ],
    [
    'El Futbol Clube do Porto es un club de fútbol portugués con sede en Oporto, siendo el equipo',
    'luso de mayor éxito en las competencias internacionales de clubes.',
    'Ha ganado un total de siete títulos internacionales oficiales, que incluyen dos Champions (en 1987, como la Copa de Europa',
    ' y 2004), dos UEFA Europa League (en 2003,',
    ' como la Copa de la UEFA, y 2011), una Supercopa (en 1987), y dos Copas Intercontinentales (en 1987 y 2004)'
  ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    'm6',
    ['c6'],
    'Halcones FC',
    'CBTIS 116',
    'JUEGA LIMPIO,SIENTE EL JUEGO',
    'https://www.google.com/imgres?q=logo%20cbtis%20116&imgurl=https%3A%2F%2Fcbtis116.simdif.com%2Fimages%2Fpublic%2Fsd_619492e62e5bc.jpg%3Fno_cache%3D1637130495&imgrefurl=https%3A%2F%2Fcbtis116.simdif.com%2F&docid=V6QIHHa6wj_qPM&tbnid=EJ8uczA0RIhLUM&vet=12ahUKEwiurM2P2NSGAxWJHUQIHQRaAEwQM3oECGMQAA..i&w=700&h=393&hcb=2&ved=2ahUKEwiurM2P2NSGAxWJHUQIHQRaAEwQM3oECGMQAA',
    240,
    [
      '3 CONADEMS',
      '1 COPA IBERO',
      '1 INTERPREPAS',
      'MEJOR PLANTEL '
    ],
    [
      'Está organizado en seis semestres e integrados por asignaturas y módulos que están distribuidos en tres componentes',
      'de formación: básica, propedéutica y profesional cubriendo un total de 2800 horas',
      ' por semestre en 16 semanas y un trabajo promedio de 30 horas de trabajo académico por semana.'
      
    ],
    true,
    false,
    true,
    false
  ),

];