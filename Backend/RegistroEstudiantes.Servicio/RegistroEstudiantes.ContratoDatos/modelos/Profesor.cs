

namespace RegistroEstudiantes.Datos.modelos
{
    public class Profesor
    {
        public int ProfesorId { get; set; }
        public required string Nombre { get; set; }

        // Relación con Materias
        public List<Materia> Materias { get; set; } = new();
    }
}
