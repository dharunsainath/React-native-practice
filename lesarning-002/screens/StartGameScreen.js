import { View, Text,TextInput,StyleSheet} from 'react-native'
import React from 'react'

import PrimaryButtons from '../components/PrimaryButtons'

const StartGameScreen = () => {
  return (
    <>
    <View style={styles.inputContainer}>
     <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" />
     <View style={styles.buttonColl}>
        <PrimaryButtons style={styles.buttons} >Reset </PrimaryButtons>
        <PrimaryButtons style={styles.buttons} >Confirm </PrimaryButtons>
        

     </View>
     
    </View>
   
   </>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        marginHorizontal: 24,
        borderRadius: 8,
        color: 'white',
        backgroundColor: '#3b021f',
        padding: 8, 
        marginTop:100,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0,height: 2},
        shadowRadius: 6,
        alignItems: "center",

        shadowOpacity: 0.4
        
    },
    
    numberInput:{
        height: 50,
        fontSize: 32,
     borderBottomColor: "#ddb52f",
     borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical: 8,
        width:"15%",
        textAlign: "center"


    },
    buttonColl:{
        flexDirection: "row",
        width:"50%",
        justifyContent: "center",
        marginVertical: 20,
        
    }

    
})
export default StartGameScreen