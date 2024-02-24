import os
import re
import subprocess

def ejecutar_pruebas(archivo_de_prueba, carpeta_alumnos):
    # Obtener la lista de archivos en la carpeta de alumnos
    archivos_alumnos = os.listdir(carpeta_alumnos)
    RESET = "\033[0m"
    BLUE = "\033[34m"

    # Iterar sobre cada archivo de alumno y ejecutar las pruebas
    for i, archivo_alumno in enumerate(archivos_alumnos):
        print(f"{BLUE}Ejecutando pruebas para: {archivo_alumno}{RESET}")

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
        shell = subprocess.run(comando, shell=True, capture_output=True)
        salida_error = shell.stderr.decode('utf-8')

        # Crear el nombre del archivo de salida
        archivo_salida_nombre = f"{carpeta_alumnos}_salida.txt"

        # Abrir el archivo de salida en modo de escritura
        with open(archivo_salida_nombre, 'a') as archivo_salida:
            match = re.search(r'Test Suites:.*Time:.*', salida_error, re.DOTALL)
            if match:
                resumen_pruebas = match.group(0)
                # Escribir en el archivo de salida
                archivo_salida.write(f"{archivo_alumno}\n{resumen_pruebas}\n")
                # Imprimir en la consola
                #print(archivo_alumno, resumen_pruebas)

    # Restaurar el contenido original del archivo de prueba al final
    contenido_test = contenido_test.replace(import_statement, "require('');")
    with open(archivo_de_prueba, 'w') as f:
        f.write(contenido_test)

GREEN = "\033[32m"
RESET = "\033[0m"

# Solicitar al usuario la opción de pruebas a ejecutar
opcion = input(f"{GREEN}Selecciona las pruebas que deseas ejecutar:\n"
               f"1. Pruebas de vectores y bucles\n"
               f"2. Pruebas del ejercitario\n"
               f"3. Pruebas de decisiones\n"
               f"Ingresa el número correspondiente a tu elección (1, 2 o 3): {RESET}")

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

