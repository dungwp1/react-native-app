// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const AboutScreen = () => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>App: Todo List</Text>
//             <Text style={styles.text}>Contact: Hồ Công Dũng</Text>
//             <Text style={styles.text}>Phone: 0357012323</Text>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#f9f9f9',
//         padding: 20,
//         margin: 20,
//         borderRadius: 12,
//         alignItems: 'center',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 4,
//         elevation: 5, // Hiệu ứng đổ bóng trên Android
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#333',
//         marginBottom: 10,
//     },
//     text: {
//         fontSize: 16,
//         color: '#666',
//     },
// });

// export default AboutScreen;



import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const API_KEY = ''; // Thay bằng API Key của bạn
const CITY = 'Da Nang';
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

const AboutScreen = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [weather, setWeather] = useState(null);

    // Cập nhật giờ mỗi giây
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);



    return (
        <View style={styles.container}>
            <Text style={styles.title}>App: Todo List</Text>
            <Text style={styles.text}>Contact: Hồ Công Dũng</Text>
            <Text style={styles.text}>Phone: 0357012323</Text>

            {/* Đồng hồ & thời tiết */}
            <View style={styles.infoBox}>
                <Text style={styles.infoText}>🕒 {time}</Text>
                <Text style={styles.infoText}>🌤 {weather || "Đang cập nhật..."}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f9f9',
        padding: 20,
        margin: 20,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        color: '#666',
    },
    infoBox: {
        marginTop: 20,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        alignItems: 'center',
    },
    infoText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default AboutScreen;
