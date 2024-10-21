using RegistroEstudiantes.Datos.modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroEstudiantes.Datos.interfaces
{
    public interface IProfesorRepositorio
    {
        Task<IEnumerable<Profesor>> ObtenerProfesoresAsync();
        Task<Profesor> ObtenerProfesorPorIdAsync(int id);
        Task AgregarProfesorAsync(Profesor profesor);
        Task ActualizarProfesorAsync(Profesor profesor);
        Task EliminarProfesorAsync(int id);
    }
}
