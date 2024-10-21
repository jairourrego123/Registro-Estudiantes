using RegistroEstudiantes.Datos.modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroEstudiantes.Datos.interfaces
{
    public interface IEstudianteMateriaRepositorio
    {
        Task<IEnumerable<EstudianteMateria>> ObtenerEstudiantesMateriasAsync();
        Task<EstudianteMateria> ObtenerEstudianteMateriaPorIdAsync(int estudianteId, int materiaId);
        Task AgregarEstudianteMateriaAsync(EstudianteMateria estudianteMateria);
        Task EliminarEstudianteMateriaAsync(int estudianteId, int materiaId);
    }
}
