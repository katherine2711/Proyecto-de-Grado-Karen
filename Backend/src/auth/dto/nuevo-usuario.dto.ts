import { IsEmail, IsString, MaxLength } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class NuevoUsuarioDto{

@IsString()
@MaxLength(10, {message: 'nombre: longitud maxima de 10'})
nombre: string;

@IsNotBlank({message: 'El nombre de usuario no debe estar vacio'})
@MaxLength(10, {message: 'nombre de usuario: longitud maxima de 10'})
nombreUsuario: string;

@IsNotBlank({message: 'No puede estar vacio'})
@IsEmail()
correo: string;

@IsNotBlank({message: 'Este campo esta vacio'})
tel: string;

@IsNotBlank({message: 'Por favor complete este campo'})
jornada: string;

@IsNotBlank({message: 'Por favor Seleccione el programa cursando'})
programa: string;

@IsNotBlank({message: 'La contraseña del usuario no puede estar vacia'})
password: string;

}