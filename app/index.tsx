import { useState } from "react";
import { Button, TextInput, View } from "react-native";

export default function Index() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [imc, setImc] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>IMC FOR II MASTER BDCC 1</h1>
    <View>
    <TextInput placeholder="Entrez votre poids" keyboardType="numeric" onChange={e => setWeight(Number(e.nativeEvent.text))}/>
    <TextInput placeholder="Entrez votre taille" keyboardType="numeric" onChange={e => setHeight(Number(e.nativeEvent.text))}/>

<Button title="Calculer IMC" onPress={() => {
  setImc(weight *10000/ (height * height));
}}></Button>
    </View>
      <h2> Votre IMC est : {imc == 0 ? "" : imc.toPrecision(4)}</h2>
      
    </View>
  );
}
