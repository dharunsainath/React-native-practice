import { View, Text, Pressable,StyleSheet } from "react-native";
import React from "react";

const PrimaryButtons = ({ children }) => {
    function pressHandler(){
        console.log("hello")

    }

  return (
    <View style={styles.buttonOuterContainer}>
    <Pressable style={({pressed})=>pressed ? [styles.buttonInnerContainer , styles.pressed] :styles.buttonInnerContainer} onPress={pressHandler} android_ripple={{color:'#640233'}}>
      
        <Text style={styles.buttonText}>{children}</Text>
      
    </Pressable>
    </View>
  );
};

const styles = StyleSheet.create(
    {
        buttonOuterContainer:{
            borderRadius: 28,
            marginTop: 10,
            overflow:'hidden',
            width:'80%',
            margin: 10

        },

        buttonInnerContainer:{
            backgroundColor:"#72063c",
           
            paddingVertical: 8,
            paddingHorizontal: 16,
            elevation: 2,
            

        },
        buttonText:{
            color: 'white',
            textAlign: 'center'
        },
        pressed:{
            opacity: 0.75,
            
        }
    }
)

export default PrimaryButtons;
