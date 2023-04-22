# LubriAlvear-v1.0

Se desarrollará la funcionalidad de la carga de stock para un negocio real. Los datos de los productos son reales, suministrados por los propietarios del negocio.
Los archivos Excel fueron convertidos a JSON y subidos a un host de JSON (JSON Bin) desde donde se consumen para su uso en la web.
Se usará Bootstrap (V5.3.x) e íconos de FontAwesome para dar estilos. 

La carga de stock consiste en consumir los datos desde el host de JSON, y en base a las categorías existentes en esos datos, se renderiza el Select de la página de carga de stock (cargarStock.html)(cargarStock.js)
Se han validados los campos del formulario utilizando Sweet Alert.
Al crear un nuevo producto, el mismo se agrega en la misma página en una tabla al final de la misma, desde la cual se pueden eliminar de manera individual cada uno de los productos creados.
El id de cada producto nuevo está compuesto por un código compuesto por letras y números. Las letras se extraen de un producto de la misma categoría más un número aleatorio. Una vez creado el ID definitivo, se valida que no coincida con alguno de los productos existentes de la misma categoría. Si esto sucede, se repite el proceso de creación del id.

El botón de "finalizar carga" carga los elementos en la Local Storage y llama a la función que genera los POST al host de JSON.


Además, como extra (y sobre todo para trabajar más en profundidad los conceptos de Local Storage) se desarrolló una función de e-commerce. La misma es similar a la desarrollada en los workshops brindados durante el cursado.





