import React from "react";
import { FlatList, TextInput, StyleSheet, View } from "react-native";
import { Text, ListItem, Left, Body, Right } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: "Canciones", header: true },
        { name: "10000 razones", header: false, lyrcs: ["PAgar", "Versiòn", "premium", ""] },
        { name: "Alma Misionera", header: false, lyrcs: ["Señor, toma mi vida nueva antes de que la espera desgaste años en mí. Estoy dispuesto a lo que quieras, no importa lo que sea, tú llámame a servir. ", " CORO: Llévame donde los hombres necesiten tus palabra, necesiten mis ganas de vivir. Donde falte la esperanza, donde todo sea triste simplemente por no saber de Ti.", "Te doy mi corazón sincero para gritar sin miedo lo hermoso que es tu amor. Señor, tengo alma misionera, condúceme a la tierra que tenga sed de ti.", "Así, me marcharé cantando, por pueblos predicando tu grandeza Señor. Tendré mis manos sin cansancio, tu historia entre mis labios más fuerza en la oración"] },
        { name: "Al rescate", header: false, lyrcs: ["PAgar", "Versiòn", "premium", ""] },
        { name: "Blanqueados", header: false, lyrcs: ["PAgar", "Versiòn", "premium", ""] },
        { name: "Brilla en mi", header: false, lyrcs: ["PAgar", "Versiòn", "premium", ""] },
        { name: "Canta al señor", header: false, lyrcs: ["Valle, montañas, planicies, cantad Luna y estrellas, planetas load lagos y ríos, olas del mar cantad.", "Pueblos, naciones y tierra cantad, bosques y campos, floresta load, aves del cielo, peces del mar, cantad.", "Dios el Señor de los cielos y el mar toda la honra será para él. Con alegría, con fe adorad canta al señor con amor.", "Con instrumentos de cuerdas load, flautas, trompetas, campanas tocad con devoción, todos a Dios cantad", "Dios el Señor de los cielos y el mar toda la honra será para él. Con alegría, con fe adorad canta al señor con amor.", "Todos los pueblos con gran emoción canten loores en su corazón, suya es la gloria y todo honor canta al señor con amor", "Canta al señor con amor. Canta al señor con amor."] },
        { name: "Crecerás", header: false, lyrcs: ["PAgar", "Versiòn", "premium", ""] },
        { name: "Cuan grande es Dios", header: false, lyrcs: ["PAgar", "Versiòn", "premium", ""] },
        { name: "Den Gloria a Dios", header: false, lyrcs: ["PAgar", "Versiòn", "premium", ""] },
        { name: "El mundo no es mi hogar", header: false, lyrcs: ["El mundo no es mi hogar, de paso yo estoy y mis riquezas van a esperarme allá. Los ángeles de Dios me invitan a entrar y el mundo para mi ya no puede ser mi hogar.", "Señor, oh señor mi padre eres tú. La tierra no es mi hogar me voy al cielo azul. Los ángeles de Dios me invitan a entrar y el mundo para mi ya no puede ser mi hogar.", "Y una vez allí, por siempre viviré los santos cantarán el cántico de Moisés. Los ángeles de Dios me invitan a entrar y el mundo para mi ya no puede ser mi hogar.", "Señor, oh señor mi padre eres tú. La tierra no es mi hogar me voy al cielo azul. Los ángeles de Dios me invitan a entrar y el mundo para mi ya no puede ser mi hogar.", "Y el mundo para mí ya no puede ser mi hogar."] },
        { name: "Eres mi todo", header: false, lyrcs: ["PAgar", "Versiòn", "premium", ""] },
        { name: "Eres tu", header: false, lyrcs: ["PAgar", "Versiòn", "premium", ""] },
        { name: "Firme", header: false, lyrcs: ["Como un faro en la costa del mar que ilumina cuando hay tempestad quiero ser firme. Como un águila se empeña en volar que los huracanes no pueden parar.", "Quiero ser firme aunque el mundo se desplome a mi alrededor no tengo miedo de los hombres temo a Dios. Es mejor la verdad que ser un rey en falsedad es mejor tener paz que desearla.", "Fuerte yo seré cuando me humille a sus pies, no resbalaré, eres mi fuerza. Entonces nacerá mi luz como el sol y así mi fe será precioso don de Jesuscristo. Fuentes de agua de mi ser fluirán donde pase un camino se abrirá. Quiero ser firme aunque el mundo se desplome a mi alrededor, no tengo miedo de los hombres temo a Dios. Es mejor la convicción que ser esclavo del que dirán, es mejor la libertad que los honores.", "Fuerte yo seré cuando me humille a sus pies, no resbalaré eres mi fuerza.", "Fuerte yo seré cuando me humille a sus pies, no resbalaré eres mi fuerza.", "Mi fuerza.", "Mi fuerza.", "Mi fuerza."] },
        { name: "Glorifico al Señor", header: false, lyrcs: ["PAgar", "Versiòn", "premium", ""] },
        { name: "Majestad", header: false, lyrcs: ["PAgar", "Versiòn", "premium", ""] },
        { name: "Maximo Amor", header: false, lyrcs: ["PAgar", "Versiòn", "premium", ""] },
        { name: "Océanos", header: false, lyrcs: ["PAgar", "Versiòn", "premium", ""] },
        { name: "Que el mundo te conozca", header: false, lyrcs: ["¿Quién soy yo? Cuando hay ángeles de luz que quisieran predicar de tu amor y verdad. ¿Quién soy yo? Cuando a mi alrededor hay personas que mejor preparadas están.", "Que el mundo te conozca que sepa, que tu eres señor. Que el mundo reconozca que tu eres la fuente de amor. Puedan aceptar, puedan descubrir la felicidad que hay en ti, que el mundo te conozca en mi.", "Tuyo soy desde mi incapacidad hasta lo que anhelo ser por tu gracia y poder. Tuyas son estas manos, estos pies utilizalos señor, para predicar de tu amor.", "Que el mundo te conozca que sepa, que tu eres señor. Que el mundo reconozca que tu eres la fuente de amor. Puedan aceptar, puedan descubrir la felicidad que hay en ti, que el mundo te conozca", "Puedan aceptar, puedan descubrir la felicidad que hay en ti que el mundo te conozca En mi."] },
        { name: "Rendid a Yahvé", header: false, lyrcs: ["Rendid a Yavhé santos del señor, gloria al poder al que hace la creación. Rendid honra al glorioso nombre del señor y adorarle en su santo esplendor.", "Sobre los mares resuena la voz de Dios, glorioso es Dios su voz hace temblar que poderosa es la voz del Altisimo", "Aleluya...Su voz descuaja los cedros del Libano", "Aleluya...La voz del señor lanza llamas de fuego.", "Aleluya...Sacude los bosques la voz del altísimo.", "Aleluya...Y en su santuario gritan gloria.", "Sentado esta Dios sobre la tempestad, sentado esta Yavhé cual rey eterno. La fuerza es la que pone su confianza en El. Yavhé bendice a su pueblo con paz.", "Sobre los mares resuena la voz de Dios, glorioso es Dios su voz hace temblar que poderosa es la voz del Altisimo", "Aleluya...La voz del señor lanza llamas de fuego.", "Aleluya...Sacude los bosques la voz del altísimo.", "Aleluya...Y en su santuario gritan gloria."] },
        { name: "Salmo 1", header: false, lyrcs: ["Que alegría encontrarás, si no buscas el pecado, ni oyes los consejos de maldad. Sino que en la ley de Dios, siempre encuentras tu delicia, y en ella buscas meditar. Si oyes los consejos que da tu creador todo lo que harás prosperará. ", "Como un árbol junto al río crecerás, Nada igualará tu fuerza, pues tendrás su fortaleza. A su tiempo frutos buenos se verán. No habrá viento ni tormenta que te puedan de sus brazos arrancar.", "Que alegría encontrarás cuando elijas amistades que te acerquen a tu salvador. Y en la ley de tu señorte alegras día y noche, tu camino siempre cuidará. Si oyes los consejos que da tu creador. Al seguir las sendas de su amor.", "Como un árbol junto al río crecerás, Nada igualará tu fuerza, pues tendrás su fortaleza. A su tiempo frutos buenos se verán. No habrá viento ni tormenta que te puedan de sus brazos. No habrá viento ni tormenta que te puedan de sus brazos. No habrá viento ni tormenta que te puedan de sus brazos. Arrancar."] },
        { name: "Salmo 91", header: false, lyrcs: ["PAgar", "Versiòn", "premium", ""] },
        { name: "Tan solo he venido", header: false, lyrcs: ["PAgar", "Versiòn", "premium", ""] },
        { name: "Tu eres santo", header: false, lyrcs: ["PAgar", "Versiòn", "premium", ""] },
        { name: "Tu poder", header: false, lyrcs: ["PAgar", "Versiòn", "premium", ""] },
        { name: "Ven hermano", header: false, lyrcs: ["PAgar", "Versiòn", "premium", ""] },
        { name: "Vengo a adorarte", header: false, lyrcs: ["PAgar", "Versiòn", "premium", ""] },
        { name: "Vivir tu reposo", header: false, lyrcs: ["Que bueno es vivir tu reposo, gozar de tu santidad. Precioso es por fe sentirte. Hermoso es descansar en ti Dios.", "Que lindo es poder adorar, dedicar el sábado a ti. Bello es comenzar este día especial símbolo de tu creación.", "Deleite es pensar en Cristo, disfrutar de su libertad. Que bueno es cantar alabanzas. Agradecer su bendición.", "Que lindo es poder adorar, dedicar el sábado a ti. Bello es comenzar este día especial símbolo de tu creación."] },
        { name: "Vuelvo a ti", header: false, lyrcs: ["PAgar", "Versiòn", "premium", ""] },
        { name: "Yo pensaba", header: false, lyrcs: ["PAgar", "Versiòn", "premium", ""] }
      ],
      dataClon: undefined,
      stickyHeaderIndices: [],
      text: '',
      hayRegistros: true
    };
  }

  // componentWillMount() {
  //   var arr = [];
  //   this.state.data.map(obj => {
  //     if (obj.header) {
  //       arr.push(this.state.data.indexOf(obj));
  //     }
  //   });
  //   arr.push(0);
  //   this.setState({
  //     stickyHeaderIndices: arr
  //   });
  // }

  renderItem = ({ item }) => {
    if (item.header) {
      return (
        <ListItem itemDivider>
          <Left />
          <Body style={{ marginRight: 40 }}>
            <Text style={{ fontWeight: "bold" }}>
              {item.name}
            </Text>
          </Body>
          <Right>
            <Icon name="bars" size={30} color="red" />
          </Right>
        </ListItem>
      );
    } else if (!item.header) {
      return (
        <ListItem onPress={() => this.props.navigation.navigate('Song', { item: item.lyrcs, titulo: item.name })} style={{ marginLeft: 0 }}>
          <Body>
            <Text >{item.name}</Text>
          </Body>
          <Right>
            <Icon name="arrow-right" size={20} color="black" title="Song" />
          </Right>
        </ListItem>
      );
    }
  };

  filterData(text) {
    
    let textLowerCase = text.toLowerCase();

    //const a = this.state.data.filter(d => d.name.replace(/\s/g, "").toLowerCase().indexOf(textLowerCase) > -1);
    const a = this.state.data.filter(d => d.name.toLowerCase().indexOf(textLowerCase) > -1);


    this.setState({
      dataClon: a,
      text: text,
      hayRegistros: a.length > 0
    });

  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TextInput style={styles.textInput}
          onChangeText={(text) => this.filterData(text)}
          value={this.state.text}
        />
        {(this.state.hayRegistros) ?
        <FlatList
          data={this.state.dataClon || this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.name}
          stickyHeaderIndices={this.state.stickyHeaderIndices}
        /> :
        <Text style={styles.textElementsNotFound}>Título no encontrado</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#cecece',
    marginBottom: 10,
    marginHorizontal: 10,
    fontSize: 18
  }, 
  textElementsNotFound:{
    fontSize: 30,
    marginLeft: 50
  }
})