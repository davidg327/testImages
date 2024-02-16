import React, { useEffect, useRef, useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text } from "react-native";
import { Camera, useCameraDevice,  } from "react-native-vision-camera";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({}) => {

  const navigation = useNavigation();


  const [newPhotos, setNewPhotos] = useState([]);

  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'granted');
    })();
  }, []);


  const device = useCameraDevice('back');
  const camera = useRef(null);

  const  take = async () =>  {
    let photo = await camera.current.takePhoto();
    setNewPhotos((prevState) => [...prevState, photo]);
  };

  return (
    <SafeAreaView style={{flex: 1}}>

      {device != null && hasPermission && (
        <Camera
          device={device}
          isActive={true}
          ref={camera}
          photo={true}
          style={StyleSheet.absoluteFill}
        />
      )}
      <Pressable
        onPress={take}
        style={{backgroundColor: 'white', alignSelf: 'center', marginTop: 10 }}>
        <Text style={{color: 'black', textAlign: 'center'}}>Tomar foto</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('ListImage', {photos: newPhotos})}
        style={{position: 'absolute', bottom: '10%', backgroundColor: 'white', alignSelf: 'center', marginTop: 10 }}>
        <Text style={{color: 'black', textAlign: 'center'}}>Volver</Text>
      </Pressable>
    </SafeAreaView>
  )
};

export default HomeScreen;
