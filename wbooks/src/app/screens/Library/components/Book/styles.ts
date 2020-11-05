import { StyleSheet } from "react-native";

export default StyleSheet.create({
    bookCard: {
        backgroundColor: '#FFFFFF',
        minHeight: 90,
        margin: 20,
        marginTop: 50,
        borderRadius: 10,
    },
    containerBook:{
        flex: 1,
        flexDirection: 'row',
        marginLeft: 40,
        marginTop: 15,
        paddingBottom: 10,
    },
    infoBook: {
        marginLeft: 20,
        color: '#4A4A4A',
    },
    titleBook:{
        fontSize: 16,
        maxWidth: 180,
        fontWeight: 'bold',
    },
    authorBook: {
        fontSize: 14,
    },
    imgBook: {
        width: 39,
        height: 60,
    }
});
