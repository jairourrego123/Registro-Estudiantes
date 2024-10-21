using AutoMapper;
using Microsoft.EntityFrameworkCore;
using RegistroEstudiantes.ContratoDatos.DTOs;
using RegistroEstudiantes.ContratoDatos.Interfaces;
using RegistroEstudiantes.Datos.modelos;

namespace RegistroEstudiantes.Datos.repositorios
{
    public class EstudianteRepositorio : IEstudianteRepositorio
    {

        private readonly RegistroContext _context;
        private readonly IMapper _mapper;

        public EstudianteRepositorio( RegistroContext context , IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<EstudianteDTO>> ObtenerEstudiantesAsync()
        {
            var estudiantes = await _context.Estudiantes.Include(e => e.EstudiantesMaterias).ToListAsync();
            return _mapper.Map<IEnumerable<EstudianteDTO>>(estudiantes);
        }

        public async Task<EstudianteDTO> ObtenerEstudiantePorIdAsync(int id)
        {
            var estudiante = await _context.Estudiantes.Include(e => e.EstudiantesMaterias)
                                                       .FirstOrDefaultAsync(e => e.EstudianteId == id);
            return _mapper.Map<EstudianteDTO>(estudiante);
        }

        public async Task AgregarEstudianteAsync(EstudianteDTO estudianteDto)
        {
            var estudiante = _mapper.Map<Estudiante>(estudianteDto);
            await _context.Estudiantes.AddAsync(estudiante);
            await _context.SaveChangesAsync();
        }

        public async Task ActualizarEstudianteAsync(EstudianteDTO estudianteDto)
        {
            var estudiante = _mapper.Map<Estudiante>(estudianteDto);
            _context.Estudiantes.Update(estudiante);
            await _context.SaveChangesAsync();
        }

        public async Task EliminarEstudianteAsync(int id)
        {
            var estudiante = await _context.Estudiantes.FindAsync(id);
            if (estudiante != null)
            {
                _context.Estudiantes.Remove(estudiante);
                await _context.SaveChangesAsync();
            }
        }
    }
}
