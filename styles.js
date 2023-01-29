import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    touchableOpacityContainer: {
        position:'absolute',
        bottom:0, 
        width:'100%',
        height:80, 
        backgroundColor:'#886', 
        justifyContent:'center', 
        alignItems:'center', 
        flexDirection:'row',
    },
    touchableOpacityRight: {
        marginRight:10
    },
    touchableOpacityLeft: {
        marginLeft:10
    },
    touchableOpacityText: {
        color:'#fff', 
        fontSize:16, 
        fontWeight:'bold',
    },
});

export default styles;