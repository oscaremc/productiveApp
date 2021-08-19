import React, {useState, useEffect} from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useIsFocused } from "@react-navigation/native";

import ItemObjetive from "../components/ItemObjetive";
import { getObjetive, deleteObjetive } from '../service/api'

const ListaObjetivos = () => {

    const [Objetive, setObjetive] = useState([]);
    const [refresing, setrefresing] = useState(false)

    const isFocused = useIsFocused()

    const cargaObjetivos = async () => {
        const data = await getObjetive();
        setObjetive(data);
    };

    useEffect(() => {
        cargaObjetivos()
    }, [isFocused]);

    const handleDelete = async (_id) => {
        await deleteObjetive(_id)
        await cargaObjetivos()
    }

    const renderItem = ({item}) => {
        return <ItemObjetive item={item} handleDelete={handleDelete}/>
    }

    const onRefresh = React.useCallback(async () => {
        setrefresing(true);
        await cargaObjetivos();
        setrefresing(false);
    })
    

    return (
        <FlatList
        style={{ width: '100%'}}
            data={Objetive}
            keyExtractor={(item) => item._id}
            renderItem={renderItem}
            refreshControl={
                <RefreshControl
                refreshing={refresing}
                colors={["#78e08f"]}
                    onRefresh={onRefresh}
                    progressBackgroundColor="#0a3d62"
                />
            }
        />
    );
};

export default ListaObjetivos;