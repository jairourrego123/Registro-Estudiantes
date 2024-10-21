using RegistroEstudiantes.Datos.modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroEstudiantes.Datos.interfaces
{
    public interface IMateriaRepositorio
    {
        Task<IEnumerable<Materia>> ObtenerMateriasAsync();
        Task<Materia> ObtenerMateriaPorIdAsync(int id);
        Task AgregarMateriaAsync(Materia materia);
        Task ActualizarMateriaAsync(Materia materia);
        Task EliminarMateriaAsync(int id);
    }
}
