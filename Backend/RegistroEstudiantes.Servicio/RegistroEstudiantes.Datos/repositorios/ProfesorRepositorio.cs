using AutoMapper;
using Microsoft.EntityFrameworkCore;
using RegistroEstudiantes.ContratoDatos.DTOs;
using RegistroEstudiantes.ContratoDatos.Interfaces;
using RegistroEstudiantes.Datos.modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroEstudiantes.Datos.repositorios
{
    public class ProfesorRepositorio : IProfesorRepositorio
    {
           private readonly RegistroContext _context;
            private readonly IMapper _mapper;
        public ProfesorRepositorio( RegistroContext context , IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<IEnumerable<ProfesorDTO>> ObtenerProfesoresAsync()
        {
            var profesores = await _context.Profesores.Include(p => p.Materias).ToListAsync();
            return _mapper.Map<IEnumerable<ProfesorDTO>>(profesores);
        }

        public async Task<ProfesorDTO> ObtenerProfesorPorIdAsync(int id)
        {
            var profesor = await _context.Profesores.Include(p => p.Materias)
                                                     .FirstOrDefaultAsync(p => p.ProfesorId == id);
            return _mapper.Map<ProfesorDTO>(profesor);
        }

        public async Task AgregarProfesorAsync(ProfesorDTO profesorDto)
        {
            var profesor = _mapper.Map<Profesor>(profesorDto);
            await _context.Profesores.AddAsync(profesor);
            await _context.SaveChangesAsync();
        }

        public async Task ActualizarProfesorAsync(ProfesorDTO profesorDto)
        {
            var profesor = _mapper.Map<Profesor>(profesorDto);
            _context.Profesores.Update(profesor);
            await _context.SaveChangesAsync();
        }

        public async Task EliminarProfesorAsync(int id)
        {
            var profesor = await _context.Profesores.FindAsync(id);
            if (profesor != null)
            {
                _context.Profesores.Remove(profesor);
                await _context.SaveChangesAsync();
            }
        }
    }
}
