import React, { useState } from "react";
import { Pressable, SafeAreaView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ListImageScreen = ({route}) => {

  const {photos} = route.params;

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{alignSelf: 'center', marginTop: '10%'}}>Lista de imagenes tomadas</Text>
      <Pressable
        onPress={() => navigation.navigate('Home', {setPhotos: setPhotos, photos: photos})}
        style={{alignSelf: 'center', backgroundColor: 'orange', marginTop: 10}}>
        <Text style={{color: 'white', paddingHorizontal: 20, paddingVertical: 5}}>Ir a tomar la foto</Text>
      </Pressable>

    </SafeAreaView>
  )
};

export default ListImageScreen;
