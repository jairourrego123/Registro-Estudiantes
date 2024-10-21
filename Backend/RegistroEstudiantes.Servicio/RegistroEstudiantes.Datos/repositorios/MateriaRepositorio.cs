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
    public class MateriaRepositorio : IMateriaRepositorio
    {
        private readonly RegistroContext _context;
        private readonly IMapper _mapper;
        
        public MateriaRepositorio(RegistroContext context , IMapper mapper )
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<MateriaDTO>> ObtenerMateriasAsync()
        {
            var materias = await _context.Materias.Include(m => m.Profesor).ToListAsync();
            return _mapper.Map<IEnumerable<MateriaDTO>>(materias);
        }

        public async Task<MateriaDTO> ObtenerMateriaPorIdAsync(int id)
        {
            var materia = await _context.Materias.Include(m => m.Profesor)
                                                  .FirstOrDefaultAsync(m => m.MateriaId == id);
            return _mapper.Map<MateriaDTO>(materia);
        }

        public async Task AgregarMateriaAsync(MateriaDTO materiaDto)
        {
            var materia = _mapper.Map<Materia>(materiaDto);
            await _context.Materias.AddAsync(materia);
            await _context.SaveChangesAsync();
        }

        public async Task ActualizarMateriaAsync(MateriaDTO materiaDto)
        {
            var materia = _mapper.Map<Materia>(materiaDto);
            _context.Materias.Update(materia);
            await _context.SaveChangesAsync();
        }

        public async Task EliminarMateriaAsync(int id)
        {
            var materia = await _context.Materias.FindAsync(id);
            if (materia != null)
            {
                _context.Materias.Remove(materia);
                await _context.SaveChangesAsync();
            }
        }
    }
}
