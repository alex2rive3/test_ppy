import os
import re
import subprocess

def ejecutar_pruebas(archivo_de_prueba, carpeta_alumnos):
    # Obtener la lista de archivos en la carpeta de alumnos
    archivos_alumnos = os.listdir(carpeta_alumnos)
    # Iterar sobre cada archivo de alumno y ejecutar las pruebas
    for i, archivo_alumno in enumerate(archivos_alumnos):
        print(f"Ejecutando pruebas para: {archivo_alumno}")

        # Construir la ruta completa del archivo del alumno
        ruta_completa_alumno = os.path.join(carpeta_alumnos, archivo_alumno)

        # Extraer el nombre del archivo sin la extensión
        nombre_sin_extension = os.path.splitext(archivo_alumno)[0]

        # Crear dinámicamente la cadena de importación para sobrescribir el import en el test
        import_statement = f"require('../{carpeta_alumnos}/{nombre_sin_extension}');"

        # Leer el contenido del archivo de prueba y sobrescribir la importación
        with open(archivo_de_prueba, 'r') as f:
            contenido_test = f.read()

        # Obtener el nombre del archivo anterior
        nombre_anterior = ""
        if i > 0:
            nombre_anterior = archivos_alumnos[i - 1]
            nombre_anterior = os.path.splitext(nombre_anterior)[0]

        # Reemplazar la antigua declaración de importación con la nueva
        if nombre_anterior != "":
            # Patrón de expresión regular para buscar la antigua declaración de importación
            pattern = re.compile(r"require\('../{}/{}'\);".format(carpeta_alumnos, nombre_anterior))
            # Reemplazar usando el patrón
            contenido_test = pattern.sub(import_statement, contenido_test)
        else:
            contenido_test = contenido_test.replace("require('');", import_statement)

        # Escribir el contenido modificado nuevamente al archivo
        with open(archivo_de_prueba, 'w') as f:
            f.write(contenido_test)

        # Ejecutar las pruebas con Jest
        comando = f"npm test {archivo_de_prueba} --testPathPattern={ruta_completa_alumno}"
        subprocess.run(comando, shell=True)

    # Restaurar el contenido original del archivo de prueba al final
    contenido_test = contenido_test.replace(import_statement, "require('');")
    with open(archivo_de_prueba, 'w') as f:
        f.write(contenido_test)

# Solicitar al usuario la opción de pruebas a ejecutar
opcion = input("Selecciona las pruebas que deseas ejecutar:\n"
               "1. Pruebas de vectores y bucles\n"
               "2. Pruebas del ejercitario\n"
               "3. Pruebas de decisiones\n"
               "Ingresa el número correspondiente a tu elección (1, 2 o 3): ")

if opcion == "1":
    print("Ejecutando pruebas de vectores y bucles...")
    ejecutar_pruebas("./test/vectores_bucles.test.js", "vectores_bucles")
elif opcion == "2":
    print("Ejecutando pruebas de ejercitarios...")
    ejecutar_pruebas("./test/ejercitario.test.js", "ejercitarios")
elif opcion == "3":
    print("Ejecutando pruebas de decisiones...")
    ejecutar_pruebas("./test/decisiones.test.js", "decisiones")
else:
    print("Opción no válida. Por favor, ingresa un número válido (1, 2 o 3).")

