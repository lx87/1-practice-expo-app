import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#151718',
    },
    card: {
        backgroundColor: '#232323',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        width: '80%',
        maxWidth: 400,
        //ios
        shadowColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
    },
    textContainer: {
        marginBottom: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 4,
        color: "white",
        textAlign: 'center'
    },
    title: {
        fontSize: 16,
        color: '#CDCDCD',
        marginBottom: 8,
        textAlign: 'center'
    },
    bio: {
        fontSize: 14,
        color: '#CDCDCD',
        textAlign: 'center',
    },
    skillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 16,
    },
    skill: {
        backgroundColor: '#333',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 12,
        margin: 4,
        fontSize: 14,
        color: '#eee',
    },
    button: {
        display: "flex",
        width: "100%",
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
        textAlign: "center",
    },
});