import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";


const IMAGES = {
  underweight: require('../assets/images/underweight.jpeg'),
  normal: require('../assets/images/normal.jpeg'),
  overweight: require('../assets/images/overweight.jpeg'),
  obese: require('../assets/images/obese.jpeg'),
  extremely_obese: require('../assets/images/extremely_obese.jpeg'),
};

function getPictureKey(imc: number) : keyof typeof IMAGES{

  if(imc < 18.5) return "underweight";
  if(imc < 24.9) return "normal";
  if(imc < 29.9) return "overweight";
  if(imc < 34.9) return "obese";
  return "extremely_obese";
  
}

export default function Index() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [imc, setImc] = useState(0);


  function handleButtonPress(){
    if (height <= 0 || weight <=0){
    alert("Veuillez entrer une taille valide.");
    return ;}
      setImc(weight *10000/ (height * height));
  }
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>IMC FOR II MASTER BDCC 1</Text>
      <Image source ={require("../assets/images/imc.jpeg")} style={{width:200 , height:100}} resizeMode="contain"/>
    <View>
        <View>
      <Text>Poids</Text>
    <TextInput placeholder="Entrez votre poids" keyboardType="numeric" onChange={e => setWeight(Number(e.nativeEvent.text))}/>
        <Text>Kg</Text>
        </View>
        <View>
            <Text>Taille</Text>
    <TextInput placeholder="Entrez votre taille" keyboardType="numeric" onChange={e => setHeight(Number(e.nativeEvent.text))}/>
<Text>Cm</Text>
        </View>
<TouchableOpacity
  onPress={handleButtonPress}
  style={{
    backgroundColor: "#a020f0", 
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginTop: 10,
  }}
>
  <Text style={{ color: "white", fontSize: 16 }}>Calculer IMC</Text>
</TouchableOpacity>
    </View>
      <Text> Votre IMC est : {imc == 0 ? "": imc.toPrecision(4)}</Text>
      {imc && <Image source={IMAGES[getPictureKey(imc)]} style={{width:200, height:400}} resizeMode="contain"/>}
    </View>
  );
}


