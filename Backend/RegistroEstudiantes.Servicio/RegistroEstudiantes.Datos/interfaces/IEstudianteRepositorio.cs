using RegistroEstudiantes.Datos.modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroEstudiantes.Datos.interfaces
{
    public interface IEstudianteRepositorio
    {
        Task<IEnumerable<Estudiante>> ObtenerEstudiantesAsync();
        Task<Estudiante> ObtenerEstudiantePorIdAsync(int id);
        Task AgregarEstudianteAsync(Estudiante estudiante);
        Task ActualizarEstudianteAsync(Estudiante estudiante);
        Task EliminarEstudianteAsync(int id);
    }
}
