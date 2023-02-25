const StringToarrayOfObjects = (str) => {
    const cities = str
      .split("\n")
      .map((name, index) => ({ id: index + 1, name }));
    return cities;
  };
  
  const BuenosAires =
    "Almirante Brown\nAvellaneda\nBerazategui\nBerisso\nBrandsen\nCampana\nCañuelas\nEnsenada\nEscobar\nEsteban Echeverría\nExaltación de la Cruz\nEzeiza\nFlorencio Varela\nGeneral Las Heras\nGeneral Rodríguez\nGeneral San Martín\nHurlingham\nItuzaingó\nJosé C. Paz\nLa Matanza\nLa Plata\nLanús\nLomas de Zamora\nLuján\nMalvinas Argentinas\nMarcos Paz\nMerlo\nMoreno\nMorón\nPilar\nPresidente Perón\nQuilmes\nSan Fernando\nSan Isidro\nSan Miguel\nSan Vicente\nTigre\nTres de Febrero\nVicente López\nZárate";
  const Catamarca =
    "Ambato\nAncasti\nAndalgalá\nAntofagasta de la Sierra\nBelén\nCapayán\nCapital\nEl Alto\nFray Mamerto Esquiú\nLa Paz\nPaclín\nPomán\nSanta María\nSanta Rosa\nTinogasta\nValle Viejo";
  const Chaco =
    "Almirante Brown\nBermejo\nChacabuco\nComandante Fernández\nDoce de Octubre\nDos de Abril\nFray Justo Santa María de Oro\nGeneral Belgrano\nGeneral Donovan\nGeneral Güemes\nIndependencia\nLibertad\nLibertador General San Martín\nMaipú\nMayor Luis Jorge Fontana\nNueve de Julio\nO'Higgins\nPresidencia de la Plaza\nPrimero de Mayo\nQuitilipi\nSan Fernando\nSan Lorenzo\nSargento Cabral\nTapenagá\nVeinticinco de Mayo";
  
  const Chubut =
    "Atlántico\nBiedma\nCushamen\nEscalante\nFlorentino Ameghino\nFutaleufú\nGaiman\nGastre\nLanguiñeo\nMártires\nPaso de Indios\nRawson\nRío Senguer\nSarmiento\nTehuelches\nTelsen";
  
  const Córdoba =
    "Alta Gracia\nBell Ville\nCórdoba\nCosquín\nCruz del Eje\nDeán Funes\nJesús María\nLa Carlota\nLaboulaye\nMarcos Juárez\nOliva\nRío Cuarto\nSalsacate\nSan Agustín\nSan Carlos Minas\nSan Francisco\nSan Francisco del Chañar\nSanta Rosa de Río Primero\nVilla Cura Brochero\nVilla de María\nVilla del Rosario\nVilla del Totoral\nVilla Dolores\nVilla Huidobro\nVilla María\nVilla Tulumba";
  
  const Corrientes =
    "Bella Vista\nSan Antonio de Itatí\nCorrientes\nConcepción\nCuruzú Cuatiá\nEmpedrado\nEsquina\nAlvear\nCaá Catí\nGoya\nItatí\nItuzaingó\nSanta Lucía\nMburucuyá\nMercedes\nMonte Caseros\nPaso de los Libres\nSaladas\nSan Cosme\nSan Luis del Palmar\nLa ruz\nSan Miguel\nSan Roque\nSanto Tomé\nSauce\nVilla Tulumba";
  
  const Entre_Ríos =
    "Colón\nConcordia\nDiamante\nFederación\nFederal\nSan José de Feliciano\nGualeguay\nGualeguaychú\nVilla Paranacito\nLa Paz\nNogoyá\nParaná\nSan alvador\nRosario del Tala\nConcepción del Uruguay\nVictoria\nVillaguay\nSaladas\nSan Cosme\nSan Luis del Palmar\nLa Cruz\nSan Miguel\nSan Roque\nSanto Tomé\nSauce\nVilla Tulumba\n";
  
  const Formosa =
    "Laguna Yema\nFormosa\nSan Francisco de Laishí\nIngeniero Juárez\nComandante Fontana\nEl Espinillo\nClorinda\nPirané\nGeneral Mosconi3​";
  
  const Jujuy =
    "Cochinoca\nDr. Manuel Belgrano\nEl Carmen\nHumahuaca\nLedesma\nPalpalá\nRinconada\nSan Antonio\nSan Pedro\nSanta Bárbara\nSanta Catalina\nSusques\nTilcara\nTumbaya\nValle Grande\nYavi";
  
  const LaPampa =
    "Atreucó\nCaleu Caleu\nCapital\nCatriló\nChalileo\nChapaleufú\nChical Co\nConhelo\nCuracó\nGuatraché\nHucal\nLihuel Calel\nLimay Mahuida\nLoventué\nMaracó\nPuelén\nQuemú Quemú\nRancul\nRealicó\nToay\nTrenel\nUtracán";
  
  const LaRioja =
    "Arauco\nCapital\nCastro Barros\nChamical\nChilecito\nCoronel Felipe Varela\nFamatina\nGeneral Ángel V. Peñaloza\nGeneral Belgrano\nGeneral Juan Facundo Quiroga\nGeneral Lamadrid\nGeneral Ocampo\nGeneral San Martín\nIndependencia\nRosario Vera Peñaloza\nSan Blas de los Sauces\nSanagasta\nVinchina";
  
  const Mendoza =
    "Capital\nGeneral Alvear\nGodoy Cruz\nGuaymallén\nJunín\nLa Paz\nLas Heras\nLavalle\nLuján de Cuyo\nMaipú\nMalargüe\nRivadavia\nSan Carlos\nGeneral San Martín\nSan Rafael\nSanta Rosa\nTunuyán\nTupungato";
  
  const Misiones =
    "Capital\nOberá\nIguazú\nEldorado\nGuaraní\nSan Ignacio\nCainguás\nLibertador Gral. San Martín\nLeandro N. Alem\nGeneral Manuel Belgrano\nApóstoles\nMontecarlo\nSan Pedro\n25 de mayo\nCandelaria\nSan Javier\nConcepción";
  
  const Neuquen =
    "Aluminé\nAñelo\nCatán Lil\nChos Malal\nCollón Curá\nConfluencia\nHuiliches\nLácar\nLoncopué\nLos Lagos\nMinas\nÑorquín\nPehuenches\nPicún Leufú\nPicunches\nZapala";
  
  const RioNegro =
    "Viedma\nChoele Choel\nSan Carlos de Bariloche\nGeneral Conesa\nEl Cuy\nGeneral Roca\nSierra Colorada\nÑorquinco\nRío Colorado\nPilcaniyeu\nSan Antonio Oeste\nValcheta\nMaquinchao";
  
  const Salta =
    "de la Capital\nde Orán\nGeneral José de San Martín\nde Anta\nGeneral Güemes\nde Metán\nRosario de Lerma\nde Cerrillos\nde Rivadavia\nde Rosario de la Frontera\nde Chicoana\nde Cafayate\nSanta Victoria\nde La Caldera\nLa Viña\nde Cachi\nde San Carlos\nde Los Andes\nde Iruya\nde La Candelaria\nde Molinos\nde Guachipas\nLa Poma";
  
  const SanJuan =
    "Capital\nRawson\nChimbas\nRivadavia\nSanta Lucía\nPocito\nCaucete\nJáchal\nAlbardón\nSarmiento\n25 de mayo\nSan Martín\nCalingasta\n9 de julio\nAngaco\nValle Fértil\nIglesia\nUllum\nZonda";
  
  const SanLuis =
    "San Francisco del Monte de Oro\nVilla General Roca\nConcarán\nLa Toma\nVilla Mercedes\nBuena Esperanza\nSan Luis\nSanta Rosa del Conlara\nLibertador General San Martín";
  
  const SantaCruz =
    "Corpen Aike\nDeseado\nGüer Aike\nLago Argentino\nLago Buenos Aires\nMagallanes\nRío Chico";
  
  const SantaFe =
    "Belgrano\nCaseros\nCastellanos\nConstitución\nGaray\nGeneral López\nGeneral Obligado\nIriondo\nLa Capital\nLas Colonias\nNueve de Julio\nRosario\nSan Cristóbal\nSan Javier\nSan Jerónimo\nSan Justo\nSan Lorenzo\nSan Martín\nVera";
  
  const SantiagoDelEstero =
    "Aguirre\nAlberdi\nAtamisqui\nAvellaneda\nBanda\nBelgrano\nChoya\nCopo\nFigueroa\nGeneral Taboada\nGuasayán\nJiménez\nJuan Felipe Ibarra\nJuan Francisco Borges\nLoreto\nMitre\nMoreno\nOjo de Agua\nPellegrini\nQuebrachos\nRío Hondo\nRivadavia\nRobles\nSalavina\nSan Martín\nSarmiento\nSilípica";
  
  const TierraDelFuego =
    "Antártida Argentina\nIslas del Atlántico Sur\nRío Grande\nTolhuin\nUshuaia";
  
  const Tucuman =
    "Burruyacú\nCapital\nChicligasta\nCruz Alta\nFamaillá\nGraneros\nJuan Bautista Alberdi\nLa Cocha\nLeales\nLules\nMonteros\nRío Chico\nSimoca\nTafí del Valle\nTafí Viejo\nTrancas\nYerba Buena";
  
  // console.log(StringToarrayOfObjects(BuenosAires));
  // console.log(StringToarrayOfObjects(Catamarca));
  // console.log(StringToarrayOfObjects(Chaco));
  // console.log(StringToarrayOfObjects(Chubut));
  // console.log(StringToarrayOfObjects(Córdoba));
  // console.log(StringToarrayOfObjects(Corrientes));
  
  console.log(StringToarrayOfObjects(Tucuman));