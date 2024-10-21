

using System.ComponentModel.DataAnnotations;

namespace RegistroEstudiantes.Datos.modelos
{
    public class Estudiante
    {   
        public int EstudianteId { get; set; }
        public required string Nombre { get; set; }
        [EmailAddress(ErrorMessage ="Por favor, ingrese un correo valido.")]
        public required string Correo { get; set; }

        // Relación intermedia entre Estudiante y Materia
        public  required List<EstudianteMateria> EstudiantesMaterias { get; set; }
    }
}
