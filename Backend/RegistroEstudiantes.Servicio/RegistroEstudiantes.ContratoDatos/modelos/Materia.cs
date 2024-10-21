

namespace RegistroEstudiantes.Datos.modelos
{
    public class Materia
    {   
        public int MateriaId { get; set; }
        public required string Nombre { get; set; }
        public int Creditos { get; set; } = 3;

        // Relación con Estudiante y Profesor
        public  List<EstudianteMateria> EstudiantesMaterias { get; set; } = new ();
        public int ProfesorId { get; set; }

        //  navegacion 
        public Profesor Profesor { get; set; }
    }
}
