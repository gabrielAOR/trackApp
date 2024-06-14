import {StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import SignupData from '../components/SignupData'
import PersonalData from '../components/PersonalData'


const SignupScreen = () => {

    const [section, setSection] = useState(0);

      
    function navigateForward() {
        setSection(section + 1);
    }


    return (

    <View>
        <Image source={require("../assets/topVector.png")} style={styles.topImage}/>
        <View>
        {
            section == 0 ? <SignupData /> : <PersonalData />
        }
        </View>  
        { section == 0 ?
        (
            <View style={styles.forwardButton}>
                <Text style={styles.forwardButtonText}>Continuar</Text>
                <TouchableOpacity onPress={ () => navigateForward()}>
                    <LinearGradient
                    colors={["#83B4FF", "#623AA2"]}
                    style={styles.linearGradient}>
                    <AntDesign name={"arrowright"} size={24} color={"white"}/>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        ): null}
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
    topImage:{
        width: "100%",
        height: 130,
    },
    forwardButton:{
        flexDirection: "row",
        marginTop: 100,
        width: "92%",
        justifyContent: "flex-end"
    },
    forwardButtonText:{
        color: "#262626",
        fontSize: 25,
        fontWeight: "bold"
    },
    linearGradient:{
        height: 34,
        width:56,
        borderRadius: 17,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10
    },
    registerText:{
        color: "#262626",
        textAlign: "center",
        fontSize: 18,
        marginTop: 60
    }
});