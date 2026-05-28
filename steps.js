// Steps for the coffee machine manual, extracted from BPMN
const steps = [
  {
    title: "Dolej filtrovanú vodu",
    description: "Dolej filtrovanú vodu do kávovaru, ak je prázdny.",
    image: "resources/step2.jpg"
  },
  {
    title: "Očisti hlavu + gumu v hlave kefkou, po skončení utri špongiou",
    description: "Očisti hlavu a gumu v hlave kefkou. Po skončení utri špongiou.",
    image: "resources/step2.5.jpg"
  },
  {
    title: "Daj páku do kávovaru a zapni ON",
    description: "Vlož páku do kávovaru a zapni ON.",
    image: ["resources/step3.jpg", "resources/step4.jpg"]
  },
  {
    title: "Kávovar hreje vodu a svieti UP",
    description: "Počkaj, kým kávovar zohreje vodu a rozsvieti sa kontrolka UP, po cca 6 minútach môže nasledovať:",
    image: null
  },
  {
    title: "Urob flush, kým nie je na display 'Rdy/go'",
    description: "Daj pohár pod páku, stlač gombík káva, kým sa na displeji nezobrazí 'Rdy/go'.",
    image: "resources/step9.jpg"
  },
  {
    title: "Urob flush, by očko cca do 20s",
    description: "Daj pohár pod páku, stlač tlačidlo káva, kým netečie voda konštantne bez pary.",
    image: "resources/step9.jpg"
  },
  {
    title: "Vyber páku a vylej vodu a utri páku, vráť páku",
    description: "Vyber páku, vylej vodu, utri páku a vráť ju späť.",
    image: "resources/step10.jpg"
  },
  {
    title: "Počkaj na 93 stupňov",
    description: "Počkaj, kým kávovar dosiahne 93°C.",
    image: "resources/step11.jpg"
  },
  {
    title: "Zapni mlynček, zober páku a namel/utriasaj do plna",
    description: "Zapni mlynček, zober páku a namel/utriasaj kávu do plna.",
    image: ["resources/step5.jpg", "resources/step6.jpg", "resources/step12.jpg"]
  },
  {
    title: "Utlač tamperom tlak cca 20kg, potom ucapkaj do hladka",
    description: "Utlač kávu tamperom silou cca 20kg, potom ucapkaj do hladka.",
    image: "resources/step13.jpg"
  },
  {
    title: "Daj páku do hlavy a stlač tlačidlo káva.",
    description: "Vlož páku do hlavy a stlač tlačidlo káva.",
    image: "resources/step14.jpg"
  },
  {
    title: "Extrakcia, vypni po 25 - 30 s",
    description: "Počas extrakcie sleduj čas, vypni po 25-30 sekundách.",
    image: "resources/step15.jpg"
  },
  {
    title: "Vyber páku vydrb bordel, vypni kávovar aj mlynček.",
    description: "Vyber páku, odstráň zvyšky kávy, vypni kávovar aj mlynček.",
    image: ["resources/step16.jpg", "resources/step17.jpg", "resources/step18.jpg"]
  },
  {
    title: "enjoy caffe",
    description: "Uži si svoju kávu!",
    image: "resources/step19.jpg"
  }
];
