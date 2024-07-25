import { Image, StyleSheet, Text, View } from 'react-native';

// Define el componente funcional Task, que recibe un objeto 'task' como propiedad.
export default function Task({ task }) {
    return (
        // Contenedor principal para cada tarea.
        <View style={styles.item}>
            {/* Primera columna que contiene la imagen y el texto de descripción alternativa */}
            <View style={styles.itemLeft}>
                {/* 
                  Muestra una imagen.
                  La propiedad 'source' recibe un objeto con una clave 'uri' que especifica la URL de la imagen.
                  'task.urls.regular' se asume que es la URL de la imagen de la tarea actual.
                */}
                <Image 
                    source={{ uri: task.urls.regular }} 
                    style={styles.image} 
                />
                {/* 
                  Muestra el texto de la descripción alternativa de la imagen.
                  'task.alt_description' se asume que es una breve descripción o título relacionado con la imagen.
                */}
                <Text style={styles.itemText}>
                    {task.alt_description}
                </Text>
            </View>
            {/* Segunda columna que contiene los textos txt1 y txt2 */}
            <View style={styles.itemRight}>
                {/* Muestra el primer texto del task */}
                <Text style={styles.additionalText}>
                    {task.created_at}
                </Text>
                {/* Muestra el segundo texto del task */}
                <Text style={styles.additionalText}>
                    {task.updated_at}
                </Text>
            </View>
        </View>
    );
}

// Define los estilos para los componentes del Task.
const styles = StyleSheet.create({
    // Estilo para el contenedor principal de cada tarea
    item: {
        backgroundColor: '#FFF', // Fondo blanco
        padding: 15,             // Espaciado interno de 15 unidades
        borderRadius: 10,        // Bordes redondeados
        flexDirection: 'row',    // Elementos dentro dispuestos en fila
        justifyContent: 'space-between', // Distribución equitativa del espacio entre elementos
        marginBottom: 20         // Margen inferior de 20 unidades
    },
    // Estilo para el contenedor que alinea la imagen y el texto
    itemLeft: {
        flexDirection: 'column',    // Elementos dispuestos en fila
        alignItems: 'center',    // Centra verticalmente los elementos
        flexWrap: 'wrap'         // Permite que los elementos pasen a una nueva línea si es necesario
    },
    // Estilo para la imagen de la tarea
    image: {
        width: 100,              // Ancho de 100 unidades
        height: 100,             // Alto de 100 unidades
        borderRadius: 50,        // Bordes redondeados, haciendo la imagen circular
        marginRight: 15          // Margen derecho de 15 unidades
    },
    // Estilo para el texto de la descripción de la tarea
    itemText: {
        maxWidth: '50%'          // El ancho máximo del texto es el 80% del contenedor
    },
    // Estilo para el contenedor de la segunda columna
    itemRight: {
        justifyContent: 'center', // Centra verticalmente los textos dentro de la columna
    },
    // Estilo para los textos adicionales en la segunda columna
    additionalText: {
        fontSize: 16,            // Tamaño de fuente para los textos adicionales
        marginVertical: 5        // Margen vertical para separar los textos
    }
});
