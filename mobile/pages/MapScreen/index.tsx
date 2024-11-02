import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import * as Location from 'expo-location';

type DataLocationsProps = {
    latitude: number,
    longitude: number,
}

export default function MapScreen() {

    const[location, setLocation] = useState<DataLocationsProps>({} as DataLocationsProps)
    const [errorMsg, setErrorMsg] = useState('');

    async function getLoad() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg("Permissão para Localização Negada.");
            return;
        }
        
        let loc = await Location.getCurrentPositionAsync({});
        
        setLocation({
            latitude: loc.coords.latitude,
            longitude: loc.coords.longitude,
        });
    }

    useEffect(() => {
        getLoad();
    }, []);
  
    if(errorMsg) {
        return (
            <View style={{ flex: 1 }}>
                <Text>{errorMsg}</Text>
                <Button color="blue" onPress={() => getLoad()} title='Permitir Localização?' />
            </View>
        )
    }
    
    return (
        <View style={{ flex: 1 }}>
            <Text>
                {JSON.stringify(location)}
            </Text>
            {!location.latitude && 
                <Button color="blue" onPress={() => getLoad()} title='Permitir Localização?' />
            }
            <MapView zoomControlEnabled style={{ width: '100%', height: '100%' }}>
                <Marker 
                    coordinate={{
                        latitude: location.latitude,
                        longitude: location.longitude
                    }}
                />
            </MapView>
        </View>
    )
}
//npx expo install react-native-maps