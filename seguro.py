import subprocess
import os
#import importlib.util

# Ruta del archivo de prueba
archivo_de_prueba = "./test/ejercitario.test.js"

# Ruta de la carpeta con los archivos de los alumnos
carpeta_alumnos = "./alumnos"

# Obtener la lista de archivos en la carpeta de alumnos
archivos_alumnos = os.listdir(carpeta_alumnos)

# Iterar sobre cada archivo de alumno y ejecutar las pruebas
for archivo_alumno in archivos_alumnos:
    print(f"Ejecutando pruebas para: {archivo_alumno}")

    # Construir la ruta completa del archivo del alumno
    ruta_completa_alumno = os.path.join(carpeta_alumnos, archivo_alumno)

    # Extraer el nombre del archivo sin la extensión
    nombre_sin_extension = os.path.splitext(archivo_alumno)[0]

    # Crear dinámicamente la cadena de importación para sobrescribir el import en el test
    import_statement = f"require('../alumnos/{nombre_sin_extension}');"

    # Leer el contenido del archivo de prueba y sobrescribir la importación
    with open(archivo_de_prueba, 'r') as f:
        contenido_test = f.read()

    # Reemplazar la antigua declaración de importación con la nueva
    contenido_test = contenido_test.replace("require", import_statement)

    # Escribir el contenido modificado nuevamente al archivo
    with open(archivo_de_prueba, 'w') as f:
        f.write(contenido_test)

    # Ejecutar las pruebas con Jest
    comando = f"npm test {archivo_de_prueba} --testPathPattern={ruta_completa_alumno}"
    #result=subprocess.run(comando, shell=True, capture_output=True)
    subprocess.run(comando, shell=True)
    
    # Imprimir el resultado de las pruebas
    #print(result.stdout.decode('utf-8'))
    #print(result.stderr.decode('utf-8'))

